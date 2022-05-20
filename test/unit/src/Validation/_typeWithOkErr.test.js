// unit test for _typeWithOkErr.js

const chai = require('chai')
chai.should()

const _typeWithOkErr = require('../../../../src/Validation/_typeWithOkErr')

const Err = require('../../../../src/ADT/Err')
const Ok = require('../../../../src/ADT/Ok')

describe('_typeWithOkErr', () => {
  it('should work as expected', () => {
    _typeWithOkErr(Err(['invalid query'])).should.equal('Err')
    _typeWithOkErr(Ok(42)).should.equal('Ok')
    _typeWithOkErr('foo').should.equal('String')
  })
})
