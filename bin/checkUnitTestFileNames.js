const fs = require('fs')
const path = require('path')

const {subdirNameList, jsFileBasenamesList} = require('./dirUtils')

const UNIT_TEST_DIR = path.normalize(path.join(__dirname, '..','test','unit','src'))

const SRC_DIR = path.normalize(path.join(__dirname, '..','src'))

const checkDir = (testDir, srcDir) => {
  if (!fs.existsSync(testDir)) console.error(`Unit test dir ${testDir} not found`)
  if (!fs.existsSync(srcDir)) console.error(`Unit test dir ${testDir} has no corresponding src dir ${srcDir}`)
  const subDirNames = subdirNameList(testDir)
  for (const subDirName of subDirNames) {
    const testSubdir = path.join(testDir, subDirName)
    const srcSubdir = path.join(srcDir, subDirName)
    checkDir(testSubdir, srcSubdir)
  }
  const testFileNames = jsFileBasenamesList(testDir)
  for (const testFileName of testFileNames) {
    if (!testFileName.endsWith('.test')) console.error(`${path.join(testDir, testFileName)} does not end in .test.js`)
    const testFilePath = path.join(testDir, testFileName)
    const srcFilePath = path.join(srcDir, path.basename(testFileName, '.test')) + '.js'
    if (!fs.existsSync(srcFilePath)) {
      console.error(`Test file ${testFilePath} does not have corresponding src file ${srcFilePath}`)
    } else {
      if (!fs.statSync(srcFilePath).isFile()) console.error(`Src path ${srcFilePath} is not a file`)
    }
  }
}

console.log('\nChecking for unit test filenames that do not look correct...\n')
checkDir(UNIT_TEST_DIR, SRC_DIR)
console.log('\nDone.\n')

