// Creates placeholders for missing unit tests
// Also mirrors directory structure of /src to test/unit/src

const fs = require('fs')
const path = require('path')

const {jsFileBasenamesList, subdirNameList, SRC_DIR, UNIT_TEST_SRC_DIR} = require('./dirUtils')
const {jsDocExample, jsDocTest, newUnitTestFileText, prettify} = require('./processJSDocExample')

const mirror = (sourcePathStr, destPathStr) => {
  console.log(`Processing ${sourcePathStr}`)

  let createCount = 0
  let problemCount = 0
  let skipCount = 0

  const subDirs = subdirNameList(sourcePathStr)
  for (const subDir of subDirs) {
    const targetSubdir = path.join(destPathStr, subDir)
    const existing = fs.lstatSync(targetSubdir, {throwIfNoEntry: false})
    if (existing) {
      if (!existing.isDirectory()) throw targetSubdir + ' already exists but is not a directory.'
    } else {
      fs.mkdirSync(targetSubdir)
    }
    const sourceSubdir = path.join(sourcePathStr, subDir)
    const results = mirror(sourceSubdir, targetSubdir)
    createCount += results.createCount
    problemCount += results.problemCount
    skipCount += results.skipCount
  }

  const jsFiles = jsFileBasenamesList(sourcePathStr)
  for (const jsFile of jsFiles) {
    const scriptFile = path.join(sourcePathStr, jsFile + '.js')
    const scriptFileAbsPath = path.resolve(scriptFile)
    const targetFile = path.join(destPathStr, jsFile + '.test.js')
    const targetFileAbsPath = path.resolve(targetFile)
    const existing = fs.lstatSync(targetFile, {throwIfNoEntry: false})
    if (existing) {
      if (!existing.isFile()) throw targetFile + ' already exists but is not a file.'
    } else {

      const example = jsDocExample(scriptFile)
      if (!example) {
        console.warn('    @example not found in ' + scriptFile + ', skipping...')
        skipCount += 1
      } else {
        console.log('  CREATING ' + targetFile + '...')
        const test = jsDocTest(example, scriptFileAbsPath)
        const contents = newUnitTestFileText(scriptFileAbsPath, test)
        fs.writeFileSync(targetFile, contents)
        createCount += 1
        // apply `prettier` to fix indentation
        const result = prettify(targetFileAbsPath)
        if(result.status !== 0) {
          problemCount += 1
          console.error(`File failed prettification: ${targetFile}`)
          console.log(result.output.map(x=>x && x.toString()).join('\n'))
        }
      }
    }
  }

  return {createCount, problemCount, skipCount}
}

const {createCount, problemCount, skipCount} = mirror(
  SRC_DIR,
  UNIT_TEST_SRC_DIR
)

console.log(`FINISHED - created: ${createCount}, skipped: ${skipCount}, problems: ${problemCount}`)

