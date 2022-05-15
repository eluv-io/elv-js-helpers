const path = require('path')
const fs = require('fs')

const dirList = pathStr =>
  fs.readdirSync(pathStr, {withFileTypes: true})
    .filter(dirEnt => dirEnt.isDirectory() && !dirEnt.name.startsWith('.'))
    .map(dirEnt => path.basename(dirEnt.name))


const jsFileBasenamesList = pathStr =>
  fs.readdirSync(pathStr, {withFileTypes: true})
    .filter(dirEnt => dirEnt.isFile() && dirEnt.name.endsWith('.js'))
    .map(dirEnt => path.basename(dirEnt.name, '.js'))

module.exports = {
  dirList,
  jsFileBasenamesList
}
