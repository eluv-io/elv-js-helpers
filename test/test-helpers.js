const path = require('path')

const chai = require('chai')
chai.should()
const expect = chai.expect
require('mocha-sinon')

const requireSrcFile = subDirAndFilename => require(path.join(__dirname, '../src/', subDirAndFilename))

module.exports = {
  chai,
  expect,
  requireSrcFile
}
