// helper to reduce boilerplate in tests
const path = require('path')

const chai = require('chai')
const sinon = require('sinon')

chai.should()
const expect = chai.expect

const requireSrcFile = subDirAndFilename => require(path.join(__dirname, '../src/', subDirAndFilename))

const isEquivalent = requireSrcFile('Boolean/isEquivalent')

module.exports = {
  chai,
  expect,
  isEquivalent,
  requireSrcFile,
  sinon
}
