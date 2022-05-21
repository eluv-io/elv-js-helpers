// unit test for _boundBetweenErrMsg.js

const chai = require('chai')
chai.should()

const _boundBetweenErrMsg = require('../../../../src/ModelAssertion/_boundBetweenErrMsg')

describe('_boundBetweenErrMsg', () => {
  it('should work as expected', () => {
    _boundBetweenErrMsg(0, 42, true, true) .should.equal('must be >= 0 and <= 42')
    _boundBetweenErrMsg(0, 42, false, false) .should.equal('must be > 0 and < 42')
  })
})
