// unit test for _throwIfNotResult.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const _throwIfNotResult = require('../../../../src/Validation/_throwIfNotResult')

const Ok = require('../../../../src/ADT/Ok')
const Err = require('../../../../src/ADT/Err')

describe('_throwIfNotResult', () => {
  it('should work as expected', () => {
    expect(()=>_throwIfNotResult(42)).to.throw('Expected a value of type Result, got: Number (42)')
    _throwIfNotResult(Err(['42'])).inspect().should.equal('Err [ "42" ]')
    _throwIfNotResult(Ok(42)).inspect().should.equal('Ok 42')
  })
})
