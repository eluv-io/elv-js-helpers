const path = require('path')
const fs = require('fs')

const SRC_DIR = path.normalize(path.join(__dirname, '..','src'))
const UNIT_TEST_SRC_DIR = path.normalize(path.join(__dirname, '..','test','unit','src'))

// String -> [String]
// Returns list of subdirectory names
const subdirNameList = pathStr =>
  fs.readdirSync(pathStr, {withFileTypes: true})
    .filter(dirEnt => dirEnt.isDirectory() && !dirEnt.name.startsWith('.'))
    .map(dirEnt => path.basename(dirEnt.name))

// String -> [String]
// Returns array of Javascript file names with `.js` extension removed.
const jsFileBasenamesList = pathStr =>
  fs.readdirSync(pathStr, {withFileTypes: true})
    .filter(dirEnt => dirEnt.isFile() && dirEnt.name.endsWith('.js'))
    .map(dirEnt => path.basename(dirEnt.name, '.js'))

module.exports = {
  subdirNameList,
  jsFileBasenamesList,
  SRC_DIR,
  UNIT_TEST_SRC_DIR
}
