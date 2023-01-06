// TODO: run eslint fix on jsdoc test files after prettifying (fix single-quote)

const child_process = require('child_process')
const fs = require('fs')
const path = require('path')

const JSDOC_EXAMPLE_RE = /^ \* @example((.|\n)+^) *\*\//m
const PRETTIER_BIN_PATH = path.resolve(__dirname, '..', 'node_modules', 'prettier', 'bin-prettier.js')

const srcFileBasename = srcFilePath => path.basename(srcFilePath, '.js')
const srcFileSubDirPlusBasename = srcFileAbsPath =>  srcFileAbsPath.split('/src/')[1].slice(0, -3)
const testRequireText = srcFileAbsPath => `TH.requireSrcFile('${srcFileSubDirPlusBasename(srcFileAbsPath)}')`
const jsDocRequireMatch = srcFileAbsPath => `require('@eluvio/elv-js-helpers/${srcFileSubDirPlusBasename(srcFileAbsPath)}')`

// Get JSDoc @example from source file.
// Returns multi-line string containing everything in between "@example" and final " *\" of JSDoc comment block
const jsDocExample = filePath => {
  const scriptCode = fs.readFileSync(filePath).toString()
  const match = scriptCode.match(JSDOC_EXAMPLE_RE)
  return match && match[1]
}

// generates 'describe(...)' block for test of JSDoc example
const jsDocTest = (jsDocExampleText, srcFileAbsPath) => {
  const name = srcFileBasename(srcFileAbsPath)
  const requireFindText = jsDocRequireMatch(srcFileAbsPath)

  // handle example lines that throw exceptions
  const exceptionSearch = /(.+)( +\/\/=> EXCEPTION: +)(.+)/
  const exceptionReplacer = (_, code, divider, exceptionString) => `TH.expect(() => ${code}).to.throw(${exceptionString})`

  // handle example lines that output to console
  const consoleSearch = /(.+)( +\/\/=> OUTPUT: +)(.+)/
  const consoleReplacer = (_, code, divider, outputString) => `\nTH.sinon.stub(console,'log')\n${code}\ntry{TH.chai.assert.deepEqual(console.log.getCall(0).args[0],${outputString})\n} finally {\nTH.sinon.restore()\n}`

  // handle example lines that return values
  const shouldSearch = /(.+)( +\/\/=> +)(.+)/
  const shouldReplacer = (_, code, divider, value) => value === 'undefined' || value === 'null'
    ? `TH.chai.assert.deepEqual(${code},${value})`
    : `${code}.should.eql(${value})`

  // convert JSDoc example to chai test assertions
  const jsDocAssertions = jsDocExampleText
    .split('\n')
    .filter(x => !x.includes(requireFindText)) // remove require statement for the src file
    .map(x => x.replace(/^ *\*/, '')) // first * of each line
    .map(
      x => x.replace(
        'require(\'@eluvio/elv-js-helpers/',
        'TH.requireSrcFile(\''
      )
    ) // change 'includes'
    .map(x => x.replace(exceptionSearch, exceptionReplacer)) // process assertions related to exceptions
    .map(x => x.replace(consoleSearch, consoleReplacer)) // process assertions related to console output
    .map(x => x.replace(shouldSearch, shouldReplacer)) // process assertions that return values
    .filter(x => !/^\w*$/.test(x)) // remove blank lines
    .join('\n')

  return `describe('${name} JSDoc example', () => {
  it('should execute correctly as described', () => {
    ${jsDocAssertions}
  })
})
`
}

const newUnitTestFileText = (srcFileAbsPath, jsDocAssertions) => {
  const name = srcFileBasename(srcFileAbsPath)
  const requireStmt = `const ${name} = ${testRequireText(srcFileAbsPath)}`

  return `// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
${requireStmt}

${jsDocAssertions}
`
}

const prettify = filePath => child_process.spawnSync(PRETTIER_BIN_PATH, ['-w', filePath])

// const updateJSDocUnitTest = srcFileAbsPath => {
//   console.log(`Processing ${srcFileAbsPath}...`)
//   let processedCount = 0
//   let problemCount = 0
//   let skipCount = 0
//
//   const example = jsDocExample(srcFileAbsPath)
//   if (!example) {
//     console.warn(`No @example found for ${srcFileAbsPath}`)
//     skipCount += 1
//   } else {
//     const srcFileBasename = path.basename(srcFileAbsPath, '.js')
//     const testFilePath = jsDocUnitTestFilePath(srcFileAbsPath)
//     // if (!fs.existsSync(testFilePath)) throw Error(`Unit test file ${testFilePath} not found`)
//     if (!fs.lstatSync(testFilePath).isFile()) throw Error(`'${testFilePath}' exists but is not a file`)
//
//     // const testFileText = fs.readFileSync(testFilePath).toString()
//     // const testAST = babylon.parse(testFileText, {sourceType: 'module'})
//     // const isDescribeIdentifier = path => t.isIdentifier(path.node, {name: 'describe'})
//     // const traverseResult = {}
//     //
//     // traverse(testAST, {
//     //   enter(path) {
//     //     if (isDescribeIdentifier(path)) {
//     //       // check the first argument (string, description of the thing being tested) to see if this is the
//     //       // correct 'describe' block.
//     //       const describeArg1 = path.parent.arguments[0]
//     //       if (describeArg1.value === `${srcFileBasename} JSDoc example`) {
//     //         const describeCallExpr = path.parent
//     //         // line numbers are 1-based
//     //         traverseResult.describeStartLine = describeCallExpr.loc.start.line
//     //         traverseResult.describeEndLine = describeCallExpr.loc.end.line
//     //         // halt traversal
//     //         path.stop()
//     //       }
//     //     }
//     //   }
//     // })
//
//     const testBlock = jsDocTest(example, srcFileAbsPath)
//     const testFileLines = testFileText.split('\n')
//     let revisedTestFile = ''
//     if (traverseResult.describeStartLine) {
//       // found the describe() block for unit test of JSDoc example
//       // remove and replace
//       revisedTestFile = [
//         testFileLines.slice(0, traverseResult.describeStartLine - 1).join('\n'),
//         testBlock,
//         testFileLines.slice(traverseResult.describeEndLine).join('\n')
//       ].join('\n')
//     } else {
//       // did not find the test of JSDoc example
//       // insert at fourth line
//       revisedTestFile = [
//         testFileLines.slice(0, 3).join('\n'),
//         `// AUTO-GENERATED TEST: Do not modify the following "describe('${srcFileBasename} JSDoc example', ...)" block:`,
//         testBlock + '\n',
//         testFileLines.slice(3).join('\n')
//       ].join('\n')
//     }
//     fs.writeFileSync(testFilePath, revisedTestFile)
//     processedCount += 1
//     const prettifyResult = prettify(testFilePath)
//     if (prettifyResult.status !== 0) {
//       problemCount += 1
//       console.error(`File failed prettification: ${testFilePath}`)
//       console.log(prettifyResult.output.map(x => x && x.toString()).join('\n'))
//     }
//   }
//   return {processedCount, problemCount, skipCount}
// }

module.exports = {
  jsDocExample,
  jsDocTest,
  JSDOC_EXAMPLE_RE,
  newUnitTestFileText,
  PRETTIER_BIN_PATH,
  prettify
}
