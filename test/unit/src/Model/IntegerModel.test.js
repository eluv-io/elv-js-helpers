const TH = require('../../../test-helpers')
const IntegerModel = TH.requireSrcFile('Model/IntegerModel')

describe('IntegerModel', () => {

  it('should pass for integers', () => {
    IntegerModel(1).should.equal(1)
    IntegerModel(0).should.equal(0)
    IntegerModel(-0).should.equal(0)
  })

  it('should throw an exception for non-integers', () => {
    TH.expect(() => IntegerModel(1.5)).to.throw('Value must be an integer (got: 1.5)')
    TH.expect(() => IntegerModel(-1.5)).to.throw('Value must be an integer (got: -1.5)')
    TH.expect(() => IntegerModel(Infinity)).to.throw('Value must be an integer (got: Infinity)')
    TH.expect(() => IntegerModel(-Infinity)).to.throw('Value must be an integer (got: -Infinity)')
  })

  it('should throw an exception for non-numbers', () => {
    TH.expect(() => IntegerModel()).to.throw('expecting Number, got undefined')
    TH.expect(() => IntegerModel([])).to.throw('expecting Number, got Array []')
    TH.expect(() => IntegerModel([1])).to.throw('expecting Number, got Array [1]')
    TH.expect(() => IntegerModel('1')).to.throw('expecting Number, got String "1"')
    TH.expect(() => IntegerModel(true)).to.throw('expecting Number, got Boolean true')
    TH.expect(() => IntegerModel(null)).to.throw('expecting Number, got null')
    TH.expect(() => IntegerModel(IntegerModel)).to.throw('expecting Number, got Function Integer')
    TH.expect(() => IntegerModel(x => x)).to.throw('expecting Number, got Function x => x')
  })
})
