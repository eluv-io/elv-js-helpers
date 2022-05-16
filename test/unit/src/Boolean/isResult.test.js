// unit test for isResult.js

const chai = require('chai')
chai.should()

const isResult = require('../../../../src/Boolean/isResult')

const Err = require('../../../../src/ADT/Err')
const Ok = require('../../../../src/ADT/Ok')

describe('isResult', () => {
  it('should work as expected', () => {
    isResult(Err(['invalid query'])).should.be.true
    isResult(Ok(42)).should.be.true
    isResult('foo').should.be.false
  })
})
