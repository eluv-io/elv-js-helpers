// unit test for PositiveNumModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const PositiveNumModel = require('../../../../src/Model/PositiveNumModel')

describe('PositiveNumModel', () => {
  it('should ', () => {
    PositiveNumModel(42).should.equal(42)
    expect(() => PositiveNumModel(0)).to.throw('Value must be > 0 (got: 0)')
    expect(() => PositiveNumModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
