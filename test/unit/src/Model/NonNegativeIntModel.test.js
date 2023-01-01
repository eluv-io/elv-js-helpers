const TH = require('../../../test-helpers')
const NonNegativeIntModel = TH.requireSrcFile('Model/NonNegativeIntModel')

describe('NonNegativeNumberModel', () => {

  it('should pass for good numbers', () => {
    NonNegativeIntModel(1).should.equal(1)
    NonNegativeIntModel(0).should.equal(0)
    NonNegativeIntModel(-0).should.equal(0)
  })

  it('should throw an exception for bad numbers', () => {
    TH.expect(() => NonNegativeIntModel(-1)).to.throw('Value must be >= 0 (got: -1)')
    TH.expect(() => NonNegativeIntModel(-1.5)).to.throw('Value must be an integer (got: -1.5)')
    TH.expect(() => NonNegativeIntModel(-Infinity)).to.throw('Value must be an integer (got: -Infinity)')
    TH.expect(() => NonNegativeIntModel(1.5)).to.throw('Value must be an integer (got: 1.5)')
    TH.expect(() => NonNegativeIntModel(Infinity)).to.throw('Value must be an integer (got: Infinity)')
  })


  it('should throw an exception for non-numbers', () => {
    TH.expect(() => NonNegativeIntModel()).to.throw('expecting Number, got undefined')
    TH.expect(() => NonNegativeIntModel([])).to.throw('expecting Number, got Array []')
    TH.expect(() => NonNegativeIntModel([1])).to.throw('expecting Number, got Array [1]')
    TH.expect(() => NonNegativeIntModel('1')).to.throw('expecting Number, got String "1"')
    TH.expect(() => NonNegativeIntModel(true)).to.throw('expecting Number, got Boolean true')
    TH.expect(() => NonNegativeIntModel(null)).to.throw('expecting Number, got null')
    TH.expect(() => NonNegativeIntModel(NonNegativeIntModel)).to.throw('expecting Number, got Function NonNegativeInteger')
    TH.expect(() => NonNegativeIntModel(x => x)).to.throw('expecting Number, got Function x => x')
  })
})
