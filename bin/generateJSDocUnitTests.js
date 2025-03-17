// Creates/recreates unit tests for JSDoc examples

const fs = require('fs')
const path = require('path')

const {
  fileListRecursive,
  jsDocUnitTestFilePath,
  SRC_DIR
} = require('./dirUtils')
const {jsDocExample, jsDocTest, newUnitTestFileText, prettify} = require('./processJSDocExample')

const generateJSDocUnitTest = srcFileAbsPath => {
  console.log(`Processing ${srcFileAbsPath}`)

  const testFileAbsPath = jsDocUnitTestFilePath(srcFileAbsPath)
  // check if test file already exists
  const existing = fs.lstatSync(testFileAbsPath, {throwIfNoEntry: false})
  let buildNeeded = true
  if (existing) {
    if (!existing.isFile()) throw Error(`${testFileAbsPath} already exists but is not a file.`)
    // check if test file is newer than source file
    const sourceFileStats = fs.lstatSync(srcFileAbsPath)
    buildNeeded = sourceFileStats.mtimeMs >= existing.mtimeMs
  }
  if (buildNeeded) {
    const example = jsDocExample(srcFileAbsPath)
    if (!example) {
      console.warn('    @example not found in ' + srcFileAbsPath + ', skipping...')
    } else {
      console.log('  CREATING ' + testFileAbsPath + '...')
      const test = jsDocTest(example, srcFileAbsPath)
      const contents = newUnitTestFileText(srcFileAbsPath, test)
      fs.writeFileSync(testFileAbsPath, contents)
      // apply `prettier` to fix indentation
      const result = prettify(testFileAbsPath)
      if (result.status !== 0) {
        console.error(`File failed prettification: ${testFileAbsPath}`)
        console.log(result.output.map(x => x && x.toString()).join('\n'))
      }
    }
  } else {
    console.log('  newer test file already exists, skipping...')
  }
}

const sourceFileOrDir = process.argv[2]

if (!sourceFileOrDir) {
  console.log(`USAGE:
  
  node createJSDocUnitTests.js sourceFileOrDir
  
`
  )
  process.exit(1)
}

const sourceAbsPath = path.resolve(sourceFileOrDir)

const relativePath = path.relative(SRC_DIR, sourceAbsPath)
if (relativePath.startsWith('../')) throw Error(`${sourceAbsPath} is not inside ${SRC_DIR}`)

const srcFiles = fileListRecursive(
  {fileNameFilter: x => x !== 'main.js' && x.endsWith('.js')},
  sourceAbsPath
)

srcFiles.map(generateJSDocUnitTest)
