// builds (or rebuilds) the main.js file
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

const codeBlocksAndFileList = (rootPath, pathStr) => {
  // const currentRelPath = pathStr.replace(rootPath, '.')
  const currentDirName = path.basename(pathStr)
  let codeBlocks = []
  let fileList = []
  const subDirs = dirList(pathStr)
  for (const subDir of subDirs) {
    let [subCodeBlocks, subFileList] = codeBlocksAndFileList(rootPath, path.join(pathStr, subDir))
    codeBlocks = codeBlocks.concat(subCodeBlocks)
    fileList = fileList.concat(subFileList)
  }

  const jsFiles = jsFileBasenamesList(pathStr).filter(x => x !== 'main')
  for (const jsFile of jsFiles) {
    const filePath = path.join(pathStr, jsFile).replace(rootPath, '.')
    fileList.push(filePath)
  }

  codeBlocks.push(
    rootPath === pathStr ?
      'module.exports = {' :
      `const ${currentDirName} = {`
  )
  const kvList = []
  for (const subDir of subDirs) {
    kvList.push(`  ${subDir}`)
  }
  for (const jsFile of jsFiles) {
    const filePath = path.join(pathStr, jsFile).replace(rootPath, '.')
    kvList.push(`  ${jsFile}: require('${filePath}')`)
  }
  codeBlocks.push(kvList.join(',\n'))
  codeBlocks.push('}\n')
  return [codeBlocks, fileList]
}

const [codeBlocks] = codeBlocksAndFileList('src', 'src')

const fileContents = codeBlocks.join('\n')

fs.writeFileSync('src/main.js', fileContents)
