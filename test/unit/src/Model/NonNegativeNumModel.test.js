const TH = require('../../../test-helpers')
const NonNegativeNumModel = TH.requireSrcFile('Model/NonNegativeNumModel')

describe('NonNegativeNumModel', () => {

  it('should pass for good numbers', () => {
    NonNegativeNumModel(1).should.equal(1)
    NonNegativeNumModel(0).should.equal(0)
    NonNegativeNumModel(-0).should.equal(0)
    NonNegativeNumModel(1.5).should.equal(1.5)
    NonNegativeNumModel(Infinity).should.equal(Infinity)
  })

  it('should throw an exception for bad numbers', () => {
    TH.expect(() => NonNegativeNumModel(-1)).to.throw('Value must be >= 0 (got: -1)')
    TH.expect(() => NonNegativeNumModel(-1.5)).to.throw('Value must be >= 0 (got: -1.5)')
    TH.expect(() => NonNegativeNumModel(-Infinity)).to.throw('Value must be >= 0 (got: -Infinity)')
  })


  it('should throw an exception for non-numbers', () => {
    TH.expect(() => NonNegativeNumModel()).to.throw('expecting Number, got undefined')
    TH.expect(() => NonNegativeNumModel([])).to.throw('expecting Number, got Array []')
    TH.expect(() => NonNegativeNumModel([1])).to.throw('expecting Number, got Array [1]')
    TH.expect(() => NonNegativeNumModel('1')).to.throw('expecting Number, got String "1"')
    TH.expect(() => NonNegativeNumModel(true)).to.throw('expecting Number, got Boolean true')
    TH.expect(() => NonNegativeNumModel(null)).to.throw('expecting Number, got null')
    TH.expect(() => NonNegativeNumModel(NonNegativeNumModel)).to.throw('expecting Number, got Function NonNegativeNumber')
    TH.expect(() => NonNegativeNumModel(x => x)).to.throw('expecting Number, got Function x => x')
  })
})
