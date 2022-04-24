// builds (or rebuilds) the index.js file


const path = require('path')
const fs = require('fs')

const ifElse = require('crocks/logic/ifElse')
const R = require('ramda')

const throwError = require('./src/throwError')

const newPathStruct = (pathStr, workingDir = '.') => new Object({
  fullPathStr: absPath(pathStr, workingDir),
  fullWorkDir: path.resolve(workingDir),
  origPathStr: pathStr,
  origWorkDir: workingDir,
})

// convert (pathStr, workingDir = ".") input arguments into a path struct,
// invoke path struct assertion, and return true if succeeded
const psAssertWrap = f => R.pipe(
  newPathStruct,
  f,
  R.T
)

const psFullPath = R.prop('fullPathStr')

const psExists = R.pipe(psFullPath, fs.existsSync)
// returns original path string in quotes, plus if resolved path is different, appends
// the resolved path in parentheses
const pathDesc = ({origPathStr, fullPathStr}) => [
  `"${origPathStr}"`,
  fullPathStr !== origPathStr ?
    ` (resolved to "${fullPathStr}")` :
    ''
].join('')
const fPrepend = R.curry((prefix, strVal) => fWrap(prefix, '', strVal))

const errMsgNonexistentPath = R.pipe(pathDesc, fPrepend('Path not found: '))

const throwErrNotExist = R.compose(throwError, errMsgNonexistentPath)

const psAssertExists = ifElse(
  psExists,
  R.identity,
  throwErrNotExist
)
const statIsDir = R.invoker(0, 'isDirectory')
const psIsDir = R.pipe(psFullPath, fs.statSync, statIsDir)
const errMsgNotDir = R.pipe(pathDesc, fPrepend('Path is not a directory: '))
const throwErrNotDir = R.compose(throwError, errMsgNotDir)

const psAssertIsDir = R.pipe(
  psAssertExists,
  ifElse(
    psIsDir,
    R.identity,
    throwErrNotDir
  )
)


const absPath = (pathStr, workingDir = '.') => path.isAbsolute(pathStr)
  ? pathStr
  : path.isAbsolute(workingDir)
    ? path.resolve(workingDir, pathStr)
    : path.resolve(path.resolve(workingDir), pathStr)

// non-recursive list of files in a directory (returns array of dirEnt)
const dirFileList = ({pathStr, workingDir = '.'}) => {
  const dirAbs = absPath(pathStr, workingDir)
  assertIsDir(dirAbs)
  return fs.readdirSync(dirAbs, {withFileTypes: true}).filter(statIsFile)
}
const statIsFile = R.invoker(0, 'isFile')

const assertIsDir = psAssertWrap(psAssertIsDir)

const fWrap = R.curry((prefix, suffix, str) => `${prefix}${str}${suffix}`)


const writeFile = (contents, filePath, workingDir = '.', logger) => {
  const fullPath = absPath(filePath, workingDir)
  if (logger) logger.log(`Writing file ${fullPath}...`)
  fs.writeFileSync(fullPath, contents)
}






const lines = []
const srcInternalFiles = dirFileList({pathStr:'src/internal'})
const srcFiles = dirFileList({pathStr:'src'})

for(const f of srcInternalFiles){
  const basename = path.basename(f.name,'.js')
  lines.push(`  ${basename}: require('./src/internal/${basename}')`)
}
for(const f of srcFiles){
  const basename = path.basename(f.name,'.js')
  lines.push(`  ${basename}: require('./src/${basename}')`)
}

const fileContents = `module.exports = {\n${lines.join(',\n')}\n}\n`

writeFile(fileContents,'index.js')
