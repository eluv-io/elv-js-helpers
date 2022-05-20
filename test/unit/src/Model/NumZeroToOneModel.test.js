// unit test for NumZeroToOneModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const NumZeroToOneModel = require('../../../../src/Model/NumZeroToOneModel')

describe('NumZeroToOneModel', () => {
  it('should work as expected', () => {
    NumZeroToOneModel(0) .should.equal( 0 )
    NumZeroToOneModel(0.5)  .should.equal( 0.5 )
    NumZeroToOneModel(1)    .should.equal( 1 )
    expect(() => NumZeroToOneModel(42)).to.throw('Value must be >= 0 and <= 1 (got: 42)')
    expect(() => NumZeroToOneModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
