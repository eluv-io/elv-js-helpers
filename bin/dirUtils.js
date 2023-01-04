const path = require('path')
const fs = require('fs')

const comparator = require('@eluvio/ramda-fork/src/comparator')
const equals = require('@eluvio/ramda-fork/src/equals')
const F = require('@eluvio/ramda-fork/src/F')
const mergeRight = require('@eluvio/ramda-fork/src/mergeRight')
const T = require('@eluvio/ramda-fork/src/T')

const _dirnameInclude = (options, dirname) => options.dirNameFilter(dirname)
  && !(options.dirOmitHidden && dirname.startsWith('.'))

const _filenameInclude = (options, filename) => options.fileNameFilter(filename)
  && !(options.fileOmitHidden && filename.startsWith('.'))

const _DEFAULT_OPTIONS = {
  dirNameFilter: T,
  dirOmitHidden: true,
  fileNameFilter: T,
  fileOmitHidden: true,
  traverseOrderFn: comparator(
    (dirent1, dirent2) =>
      dirent1.isDirectory() > dirent2.isDirectory()
      || dirent1.name < dirent2.name
  )
}

const JS_DOC_TEST_DIR = path.resolve(__dirname, '..', 'test', 'unit', 'jsdoc_examples')

const SRC_DIR = path.resolve(__dirname, '..', 'src')

// Construct a Node.js fs.Dirent object for a path
// const _dirent = dirOrFilePath => {
//   const absPath = path.normalize(path.resolve(dirOrFilePath))
//   if (!fs.existsSync(absPath)) throw Error(`'${absPath}' not found`)
//
//   const itemName = path.basename(absPath)
//   const parentDirPath = path.dirname(absPath)
//
//   const direntries = fs.readdirSync(parentDirPath, {withFileTypes: true}).filter(dirent => dirent.name === itemName)
//   if (direntries.length !== 1) throw Error(`Unexpected number of dirents (${direntries.length}) found for '${absPath}'`)
//   return direntries[0]
// }


const isDir = pathStr => fs.statSync(pathStr).isDirectory()

const isFile = pathStr => fs.statSync(pathStr).isFile()

// lists files and directories in a directory, applying specified filters and sorting
const ls = (options, pathStr) => {
  const opts = mergeRight(_DEFAULT_OPTIONS, options)
  return fs.readdirSync(pathStr, {withFileTypes: true})
    .filter(
      dirent =>
        (dirent.isDirectory() && _dirnameInclude(opts, dirent.name))
        || (dirent.isFile() && _filenameInclude(opts, dirent.name))
    )
    .sort(opts.traverseOrderFn)
    .map(dirent => dirent.name)
}

// String -> [String]
// Returns array of Javascript file names with `.js` extension removed.
const jsFileBasenamesList = pathStr => ls(
  {
    fileNameFilter: x => x.endsWith('.js'),
    dirNameFilter: F
  },
  pathStr
).map(x => path.basename(x, '.js'))

// Returns array of absolute file paths
// If a path to a file is passed in, returns 1-element array
// If a path to a directory is passed in, returns array containing absolute paths for every file found during a
// depth-first traversal of the directory tree.
const fileListRecursive = (options, dirOrFilePath) => {
  const opts = mergeRight(_DEFAULT_OPTIONS, options)

  const absPath = path.normalize(path.resolve(dirOrFilePath))
  if (!fs.existsSync(absPath)) throw Error(`'${absPath}' not found`)
  const basename = path.basename(absPath)

  if (fs.statSync(absPath).isFile()) return _filenameInclude(opts, basename) ? [absPath] : []

  if (fs.statSync(absPath).isDirectory()) return _dirnameInclude(opts, basename)
    ? ls(opts, absPath)
      .map(name => fileListRecursive(opts, path.join(absPath, name)))
      .flat(2)
    : []

  throw Error(`'${absPath} is neither a file nor a directory`)
}

// returns path to (JSDoc example) unit test file corresponding to a given source file
const jsDocUnitTestFilePath = srcFileAbsPath => {
  const category = path.basename(path.dirname(srcFileAbsPath))
  const unitTestFilename = path.basename(srcFileAbsPath, '.js') + '.jsdoc.test.js'
  return path.resolve(
    path.join(__dirname, '..', 'test', 'unit', 'jsdoc_examples', category, unitTestFilename)
  )
}

const mirrorDirStructure = (sourceDir, targetDir) => {
  if(!path.relative(sourceDir,targetDir).startsWith('../')) throw Error(`${targetDir} is inside ${sourceDir}`)
  if(!path.relative(targetDir,sourceDir).startsWith('../')) throw Error(`${sourceDir} is inside ${targetDir}`)
  const sourceSubdirs = subdirNameList(sourceDir)
  for (const subDir of sourceSubdirs) {
    const targetSubdir = path.join(targetDir, subDir)
    const existing = fs.lstatSync(targetSubdir, {throwIfNoEntry: false})
    if (existing) {
      if (!existing.isDirectory()) throw targetSubdir + ' already exists but is not a directory.'
    } else {
      fs.mkdirSync(targetSubdir)
    }
    const sourceSubdir = path.join(sourceDir, subDir)
    mirrorDirStructure(sourceSubdir, targetSubdir)
  }
  const targetAfterMirror = subdirNameList(targetDir)
  if (!equals(sourceSubdirs, targetAfterMirror)) throw Error(`mirrorDirStructure: ${targetDir} does not have same subdirectories as ${sourceDir} (check for extra subdirectories in former)`)
}


// String -> [String]
// Returns list of subdirectory names
// Omits those with names starting with '.'
const subdirNameList = pathStr =>
  fs.readdirSync(pathStr, {withFileTypes: true})
    .filter(dirEnt => dirEnt.isDirectory() && !dirEnt.name.startsWith('.'))
    .map(dirEnt => path.basename(dirEnt.name))


// returns path to (regular) unit test file corresponding to a given source file
const unitTestFilePath = srcFileAbsPath => {
  const category = path.basename(path.dirname(srcFileAbsPath))
  const unitTestFilename = path.basename(srcFileAbsPath, '.js') + '.test.js'
  return path.resolve(
    path.join(__dirname, '..', 'test', 'unit', 'src', category, unitTestFilename)
  )
}


module.exports = {
  fileListRecursive,
  isDir,
  isFile,
  JS_DOC_TEST_DIR,
  jsDocUnitTestFilePath,
  jsFileBasenamesList,
  ls,
  mirrorDirStructure,
  SRC_DIR,
  subdirNameList,
  unitTestFilePath
}
