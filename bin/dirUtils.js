const path = require('path')
const fs = require('fs')

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
  jsFileBasenamesList
}
