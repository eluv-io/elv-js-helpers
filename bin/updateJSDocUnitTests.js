const fs = require('fs')
const path = require('path')

const babylon = require('babylon')
const traverse = require('babel-traverse').default
const t = require('babel-types')

const {jsFileBasenamesList, subdirNameList, SRC_DIR, UNIT_TEST_SRC_DIR} = require('./dirUtils')
const {jsDocExample, jsDocTest, JSDOC_TEST_NAME, prettify} = require('./processJSDocExample')

const processDir = (srcDir, testDir) => {
  if (!fs.existsSync(srcDir)) throw Error(`Src dir ${srcDir} not found`)
  if (!fs.lstatSync(srcDir).isDirectory()) throw Error(`'${srcDir}' exists but is not a directory`)
  if (!fs.existsSync(testDir)) throw Error(`Unit test dir ${testDir} not found`)
  if (!fs.lstatSync(testDir).isDirectory()) throw Error(`'${testDir}' exists but is not a directory`)

  let processedCount = 0
  let problemCount = 0
  let skipCount = 0

  const subDirNames = subdirNameList(srcDir)
  for (const subDirName of subDirNames) {
    const srcSubdir = path.join(srcDir, subDirName)
    const testSubdir = path.join(testDir, subDirName)
    // recurse
    const result = processDir(srcSubdir, testSubdir)
    processedCount += result.processedCount
    problemCount += result.problemCount
    skipCount += result.skipCount
  }

  const sourceFileBasenames = jsFileBasenamesList(srcDir)
  for (const srcFileBasename of sourceFileBasenames) {
    const srcFilePath = path.join(srcDir, srcFileBasename + '.js')
    console.log(`Processing ${srcFileBasename}...`)
    const srcFileAbsPath = path.resolve(srcFilePath)
    if (!fs.statSync(srcFilePath).isFile()) throw Error(`'${srcFilePath}' exists but is not a file`)

    const example = jsDocExample(srcFilePath)
    if (!example) {
      console.warn(`No @example found for ${srcFilePath}`)
      skipCount += 1
      continue
    }
    const testFilePath = path.join(testDir, `${srcFileBasename}.test.js`)
    if (!fs.existsSync(testFilePath)) throw Error(`Unit test file ${testFilePath} not found`)
    if (!fs.lstatSync(testFilePath).isFile()) throw Error(`'${testFilePath}' exists but is not a file`)

    const testFileText = fs.readFileSync(testFilePath).toString()
    const testAST = babylon.parse(testFileText, {sourceType: 'module'})
    const isDescribe = path => t.isIdentifier(path.node, {name: 'describe'})
    const traverseResult = {}

    traverse(testAST, {
      enter(path) {
        if (isDescribe(path)) {
          const describeCallExpr = path.parent
          const describeFn = path.parent.arguments[1]
          // line numbers are 1-based
          traverseResult.describeStartLine = describeCallExpr.loc.start.line
          traverseResult.describeEndLine = describeCallExpr.loc.end.line

          const statements = describeFn.body.body
          const tests = statements.filter(
            x => t.isExpressionStatement(x)
              && x.expression.callee.type === 'Identifier'
              && x.expression.callee.name === 'it'
          )
          const jsDocTest = tests.find(x => x.expression.arguments[0].value === JSDOC_TEST_NAME)
          if (jsDocTest) {
            traverseResult.jsDocTestStartLine = jsDocTest.expression.arguments[1].loc.start.line
            traverseResult.jsDocTestEndLine = jsDocTest.expression.arguments[1].loc.end.line
          }
          path.stop()
        }
      }
    })

    const testBlock = jsDocTest(example, srcFileAbsPath)
    const testFileLines = testFileText.split('\n')
    let revisedTestFile = ''
    if (traverseResult.jsDocTestStartLine) {
      // found the test of JSDoc example
      // remove and replace
      revisedTestFile = [
        testFileLines.slice(0, traverseResult.jsDocTestStartLine - 1).join('\n'),
        testBlock,
        testFileLines.slice(traverseResult.jsDocTestEndLine).join('\n')
      ].join('\n')
    } else {
      // did not find the test of JSDoc example
      // insert at beginning of 'describe' block as first test
      revisedTestFile = [
        testFileLines.slice(0, traverseResult.describeStartLine).join('\n'),
        testBlock + '\n',
        testFileLines.slice(traverseResult.describeStartLine).join('\n')
      ].join('\n')
    }
    fs.writeFileSync(testFilePath, revisedTestFile)
    processedCount += 1
    const prettifyResult = prettify(testFilePath)
    if (prettifyResult.status !== 0) {
      problemCount += 1
      console.error(`File failed prettification: ${testFilePath}`)
      console.log(prettifyResult.output.map(x => x && x.toString()).join('\n'))
    }
  }

  return {processedCount, problemCount, skipCount}
}

const runResult = processDir(SRC_DIR, UNIT_TEST_SRC_DIR )
console.log(JSON.stringify(runResult,null,2))

// TODO: update ramdoc to handle multiline OUTPUT: in @example
// TODO: insert failing unit tests for missing @example instead of skipping
