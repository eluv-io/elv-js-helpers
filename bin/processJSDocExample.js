const child_process = require('child_process')
const fs = require('fs')
const path = require('path')

const JSDOC_EXAMPLE_RE = /^ \* @example((.|\n)+^) *\*\//m
const JSDOC_TEST_NAME = 'should have a working example in JSDoc'
const PRETTIER_BIN_PATH = path.resolve(__dirname, '..', 'node_modules', 'prettier', 'bin-prettier.js')

const testRequireText = srcFileAbsPath => `TH.requireSrcFile('${srcFileAbsPath.split('/src/')[1].slice(0, -3)}')`
const jsDocRequireMatch = srcFileAbsPath => `require('@eluvio/elv-js-helpers/${srcFileAbsPath.split('/src/')[1].slice(0, -3)}')`

const jsDocExample = filePath => {
  const scriptCode = fs.readFileSync(filePath).toString()
  const match = scriptCode.match(JSDOC_EXAMPLE_RE)
  return match && match[1]
}

// generates one 'it(...)' test block
const jsDocTest = (jsDocExampleText, srcFileAbsPath) => {
  const requireFindText = jsDocRequireMatch(srcFileAbsPath)

  // handle example lines that throw exceptions
  const exceptionSearch = /(.+)( +\/\/=> EXCEPTION: +)(.+)/
  const exceptionReplacer = (_, code, divider, exceptionString) => `TH.expect(() => ${code}).to.throw(${exceptionString})`

  // handle example lines that output to console
  const consoleSearch = /(.+)( +\/\/=> OUTPUT: +)(.+)/
  const consoleReplacer = (_, code, divider, outputString) => `\nTH.sinon.stub(console,'log')\n${code}\nTH.expect(console.log.calledWith(${outputString})).to.be.true\nTH.sinon.restore()\n`

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

  return `it('${JSDOC_TEST_NAME}', () => {\n${jsDocAssertions}\n})`
}

const newUnitTestFileText = (srcFileAbsPath, jsDocAssertions) => {
  const srcFileBasename = path.basename(srcFileAbsPath, '.js')
  const requireStmt = `const ${srcFileBasename} = ${testRequireText(srcFileAbsPath)}`

  return `const TH = require('../../../test-helpers')
${requireStmt}

describe('${srcFileBasename}', () => {
  ${jsDocAssertions}

  // it('should... ', () => {
  //
  // })
})
`
}


const prettify = filePath => child_process.spawnSync(PRETTIER_BIN_PATH, ['-w', filePath])

module.exports = {
  jsDocExample,
  jsDocTest,
  JSDOC_EXAMPLE_RE,
  JSDOC_TEST_NAME,
  newUnitTestFileText,
  PRETTIER_BIN_PATH,
  prettify
}
