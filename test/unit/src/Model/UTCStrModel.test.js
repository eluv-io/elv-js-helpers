// unit test for UTCStrModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const UTCStrModel = require('../../../../src/Model/UTCStrModel')

describe('UTCStrModel', () => {
  it('should work as expected', () => {
    UTCStrModel('2022-01-01T14:00:00Z').should.equal('2022-01-01T14:00:00Z')
    expect(() => UTCStrModel('2022-13-01T14:00:00Z')).to.throw('Value is not a valid UTC datetime string (got: "2022-13-01T14:00:00Z")')
    expect(() => UTCStrModel('foo')).to.throw('Value is not a valid UTC datetime string (got: "foo")')
    expect(() => UTCStrModel(42)).to.throw('expecting String, got Number 42')
  })
})
