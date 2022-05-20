// unit test for _boundLowerErrMsg.js

const chai = require('chai')
chai.should()

const _boundLowerErrMsg = require('../../../../src/ModelAssertion/_boundLowerErrMsg')

describe('_boundLowerErrMsg', () => {
  it('should work as expected', () => {
    _boundLowerErrMsg(42, true).should.equal('must be >= 42')
    _boundLowerErrMsg(42, false).should.equal('must be > 42')
  })
})
