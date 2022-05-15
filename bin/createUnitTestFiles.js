// Creates placeholders for unit tests
// Also mirrors directory structure of /src to test/unit/src

const fs = require('fs')
const path = require('path')

const {dirList, jsFileBasenamesList} = require('./dirUtils')

const REGEXP_EXAMPLE = /(^ \* @example(.|\n)+^)(const Err )/m

const mirror = (sourcePathStr, destPathStr) => {
  const subDirs = dirList(sourcePathStr)
  for (const subDir of subDirs) {
    const targetSubdir = path.join(destPathStr, subDir)
    const existing = fs.lstatSync(targetSubdir, {throwIfNoEntry: false})
    if (existing) {
      if (!existing.isDirectory()) throw targetSubdir + ' already exists but is not a directory.'
    } else {
      fs.mkdirSync(targetSubdir)
    }
    const sourceSubdir = path.join(sourcePathStr, subDir)
    mirror(sourceSubdir, targetSubdir)
  }

  const jsFiles = jsFileBasenamesList(sourcePathStr)
  for (const jsFile of jsFiles) {
    const scriptFile = path.join(sourcePathStr, jsFile + '.js')
    const targetFile = path.join(destPathStr, jsFile + '.test.js')
    const existing = fs.lstatSync(targetFile, {throwIfNoEntry: false})
    if (existing) {
      if (!existing.isFile()) throw targetFile + ' already exists but is not a file.'
    } else {
      const scriptCode = fs.readFileSync(scriptFile).toString()
      const exampleJSDoc = scriptCode.match(REGEXP_EXAMPLE)
      if(!exampleJSDoc) console.warn('@example not found in ' + scriptFile)
      const requirePath = path.join(path.relative(destPathStr, sourcePathStr), jsFile)
      const contents = `// unit test for ${jsFile}.js
      
const chai = require('chai')
chai.should()
const expect = chai.expect

const ${jsFile} = require('${requirePath}')

describe('${jsFile}', () => {

  it('should ', () => {
  
  })

  it('should ', () => {
  
  })
})

/**
` + exampleJSDoc[1]

      console.log(JSON.stringify(exampleJSDoc,null,2))
      fs.writeFileSync(targetFile, contents)
    }
  }
}

mirror('../src', '../test/unit/src')
