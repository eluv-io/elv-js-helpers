const path = require('path')
const {mirrorDirStructure} = require('./dirUtils')

const sourceDir = process.argv[2]
const targetDir = process.argv[3]

if (!sourceDir || !targetDir) {
  console.log(`USAGE:
  
  node mirrorDirStructure.js sourceDir targetDir
  
`
  )
  process.exit(1)
}

const sourceAbsPath = path.resolve(sourceDir)
const targetAbsPath = path.resolve(targetDir)
mirrorDirStructure(sourceAbsPath, targetAbsPath)
