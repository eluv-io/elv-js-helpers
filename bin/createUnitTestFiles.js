// Creates placeholders for missing unit tests
// Also mirrors directory structure of /src to test/unit/src

const fs = require('fs')
const path = require('path')

const {subdirNameList, jsFileBasenamesList} = require('./dirUtils')

const RE_EXAMPLE = /(^ \* @example(.|\n)+^)(const )/m

const mirror = (sourcePathStr, destPathStr) => {
  const subDirs = subdirNameList(sourcePathStr)
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
      const exampleJSDoc = scriptCode.match(RE_EXAMPLE)
      if (!exampleJSDoc) {
        console.warn('  @example not found in ' + scriptFile + ', skipping...')
      } else {
        console.log('Creating ' + targetFile + '...')
        const requirePath = path.join(path.relative(destPathStr, sourcePathStr), jsFile)
        const contents = `// unit test for ${jsFile}.js
      
const chai = require('chai')
chai.should()
const expect = chai.expect

const ${jsFile} = require('${requirePath}')

describe('${jsFile}', () => {
  it('should work as expected', () => {
  
  })

  it('should ', () => {
  
  })
})

` + (exampleJSDoc ? '/**\n' + exampleJSDoc[1] : '')
        fs.writeFileSync(targetFile, contents)
      }
    }
  }
}

// TODO: add processing: replace '@eluvio/PROJECT_NAME/   with '../../../../src/
// remove leading asterisks
// remove blank lines
// replace ... //=> EXCEPTION: ... with expect(() => ...).to.throw(...)
// replace //=> ...  with .should.equal(...)
// wrap in test 'should have good JSDoc example'?

mirror('../src', '../test/unit/src')
