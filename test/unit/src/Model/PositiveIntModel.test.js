// unit test for PositiveIntModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const PositiveIntModel = require('../../../../src/Model/PositiveIntModel')

describe('PositiveIntModel', () => {
  it('should ', () => {
    PositiveIntModel(42).should.equal(42)
    expect(() => PositiveIntModel(0)).to.throw('Value must be > 0 (got: 0)')
    expect(() => PositiveIntModel(4.2)).to.throw('Value must be an integer (got: 4.2)')
    expect(() => PositiveIntModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
