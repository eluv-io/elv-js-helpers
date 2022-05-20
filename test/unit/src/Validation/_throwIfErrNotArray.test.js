// unit test for _throwIfErrNotArray.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const _throwIfErrNotArray = require('../../../../src/Validation/_throwIfErrNotArray')

// NOTE: To demonstrate exception, we need to import original version of Err from Crocks, because
// src/ADT/Err.js automatically wraps non-array values

const {Err} = require('crocks/Result')

const Ok = require('../../../../src/ADT/Ok')

describe('_throwIfErrNotArray', () => {

  it('should work as expected', () => {
    _throwIfErrNotArray(Err(['invalid query'])).inspect().should.equal('Err [ "invalid query" ]')
    expect(() => _throwIfErrNotArray(Err('invalid query'))).to.throw('Err instance does not contain an array, instead contains: string (invalid query)')
    expect(() => _throwIfErrNotArray(Ok(42))).to.throw('Expected an Err, got: Ok (Ok 42)')
    expect(() => _throwIfErrNotArray(42)).to.throw('Expected an Err, got: Number (42)')
  })
})
