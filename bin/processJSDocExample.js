const child_process = require('child_process')
const fs = require('fs')
const path = require('path')

const JSDOC_EXAMPLE_RE = /^ \* @example((.|\n)+^) *\*\//m
const PRETTIER_BIN_PATH = path.resolve(__dirname, '..', 'node_modules', 'prettier', 'bin-prettier.js')

const srcFileBasename = srcFilePath => path.basename(srcFilePath, '.js')
const srcFileSubDirPlusBasename = srcFileAbsPath =>  srcFileAbsPath.split('/src/')[1].slice(0, -3)
const testRequireText = srcFileAbsPath => `TH.requireSrcFile('${srcFileSubDirPlusBasename(srcFileAbsPath)}')`
const jsDocRequireMatch = srcFileAbsPath => `require('@eluvio/elv-js-helpers/${srcFileSubDirPlusBasename(srcFileAbsPath)}')`

// Get JSDoc @example from source file.
// Returns multi-line string containing everything in between "@example" and final " *\" of JSDoc comment block
const jsDocExample = filePath => {
  const scriptCode = fs.readFileSync(filePath).toString()
  const match = scriptCode.match(JSDOC_EXAMPLE_RE)
  return match && match[1]
}

// generates 'describe(...)' block for test of JSDoc example
const jsDocTest = (jsDocExampleText, srcFileAbsPath) => {
  const name = srcFileBasename(srcFileAbsPath)
  const requireFindText = jsDocRequireMatch(srcFileAbsPath)

  // handle example lines that throw exceptions
  const exceptionSearch = /(.+)( +\/\/=> EXCEPTION: +)(.+)/
  const exceptionReplacer = (_, code, divider, exceptionString) => `TH.expect(() => ${code}).to.throw(${exceptionString})`

  // handle example lines that output to console
  const consoleSearch = /(.+)( +\/\/=> OUTPUT: +)(.+)/
  const consoleReplacer = (_, code, divider, outputString) => `\nTH.sinon.stub(console,'log')\n${code}\ntry{TH.expect(console.log.calledWith(${outputString})).to.be.true\n} finally {\nTH.sinon.restore()\n}`

  // handle example lines that return values
  const shouldSearch = /(.+)( +\/\/=> +)(.+)/
  const shouldReplacer = (_, code, divider, value) => `${code}.should.eql(${value})`

  // convert JSDoc example to chai test assertions
  const jsDocAssertions = jsDocExampleText
    .split('\n')
    .filter(x => !x.includes(requireFindText)) // remove require statement for the src file
    .map(x => x.replace(/^ *\*/, '')) // first * of each line
    .map(
      x => x.replace(
        'require(\'@eluvio/elv-js-helpers/',
        'TH.requireSrcFile(\''
      )
    ) // change 'includes'
    .map(x => x.replace(exceptionSearch, exceptionReplacer)) // process assertions related to exceptions
    .map(x => x.replace(consoleSearch, consoleReplacer)) // process assertions related to console output
    .map(x => x.replace(shouldSearch, shouldReplacer)) // process assertions that return values
    .filter(x => !/^\w*$/.test(x)) // remove blank lines
    .join('\n')

  return `describe('${name} JSDoc example', () => {
  it('should execute correctly as described', () => {
    ${jsDocAssertions}
  })
})
`
}

const newUnitTestFileText = (srcFileAbsPath, jsDocAssertions) => {
  const name = srcFileBasename(srcFileAbsPath)
  const requireStmt = `const ${name} = ${testRequireText(srcFileAbsPath)}`

  return `const TH = require('../../../test-helpers')
${requireStmt}

// AUTO-GENERATED TEST: Do not modify the following "describe('${name} JSDoc example', ...)" block:
${jsDocAssertions}

// Place additional tests in the 'describe' block below.
//
// describe('${name}', () => {
//
//   it('should... ', () => {
//
//   })
//
// })
`
}


const prettify = filePath => child_process.spawnSync(PRETTIER_BIN_PATH, ['-w', filePath])

module.exports = {
  jsDocExample,
  jsDocTest,
  JSDOC_EXAMPLE_RE,
  newUnitTestFileText,
  PRETTIER_BIN_PATH,
  prettify
}
