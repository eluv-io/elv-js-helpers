// unit test for _throwIfNotErr.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const _throwIfNotErr = require('../../../../src/Validation/_throwIfNotErr')

const Err = require('../../../../src/ADT/Err')
const Ok = require('../../../../src/ADT/Ok')

describe('_throwIfNotErr', () => {

  it('should work as expected', () => {
    expect(()=>_throwIfNotErr(42)).to.throw('Expected an Err, got: Number (42)')
    expect(()=>_throwIfNotErr(Ok(42))).to.throw('Expected an Err, got: Ok (Ok 42)')
    _throwIfNotErr(Err(['foo'])).inspect().should.equal('Err [ "foo" ]')
  })
})
