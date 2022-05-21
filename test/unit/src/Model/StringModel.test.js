// unit test for StringModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const StringModel = require('../../../../src/Model/StringModel')

describe('StringModel', () => {
  it('should work as expected', () => {
    StringModel('foo').should.equal('foo')
    expect(() => StringModel(42)).to.throw('expecting String, got Number 42')
  })
})
