// unit test for defBoundedIntModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const defBoundedIntModel = require('../../../../src/ModelFactory/defBoundedIntModel')

describe('defBoundedIntModel', () => {

  it('should work as expected', () => {
    const CartonEggCountModel = defBoundedIntModel('CartonEggCount', 0, 12, true, true)
    expect(() => CartonEggCountModel(-1)).to.throw('Value must be >= 0 and <= 12 (got: -1)')
    CartonEggCountModel(0).should.equal(0)
    expect(() => CartonEggCountModel(4.2)).to.throw('Value must be an integer (got: 4.2)')
    CartonEggCountModel(6).should.equal(6)
    expect(() => CartonEggCountModel(42)).to.throw('Value must be >= 0 and <= 12 (got: 42)')
    expect(() => CartonEggCountModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
