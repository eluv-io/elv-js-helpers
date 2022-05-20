// unit test for NumZeroToOneXModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const NumZeroToOneXModel = require('../../../../src/Model/NumZeroToOneXModel')

describe('NumZeroToOneXModel', () => {
  it('should ', () => {
    NumZeroToOneXModel(0).should.equal(0)
    NumZeroToOneXModel(0.5).should.equal(0.5)
    expect(() => NumZeroToOneXModel(1)).to.throw('Value must be >= 0 and < 1 (got: 1)')
    expect(() => NumZeroToOneXModel(42)).to.throw('Value must be >= 0 and < 1 (got: 42)')
    expect(() => NumZeroToOneXModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
