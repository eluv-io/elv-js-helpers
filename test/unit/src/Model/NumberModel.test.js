const TH = require('../../../test-helpers')
const NumberModel = TH.requireSrcFile('Model/NumberModel')

describe('NumberModel', () => {

  it('should pass for numbers', () => {
    NumberModel(1).should.equal(1)
    NumberModel(0).should.equal(0)
    NumberModel(-0).should.equal(0)
    NumberModel(1.5).should.equal(1.5)
    NumberModel(-1.5).should.equal(-1.5)
    NumberModel(Infinity).should.equal(Infinity)
    NumberModel(-Infinity).should.equal(-Infinity)
  })

  it('should throw an exception for non-numbers', () => {
    TH.expect(() => NumberModel()).to.throw('expecting Number, got undefined')
    TH.expect(() => NumberModel([])).to.throw('expecting Number, got Array []')
    TH.expect(() => NumberModel([1])).to.throw('expecting Number, got Array [1]')
    TH.expect(() => NumberModel('1')).to.throw('expecting Number, got String "1"')
    TH.expect(() => NumberModel(true)).to.throw('expecting Number, got Boolean true')
    TH.expect(() => NumberModel(null)).to.throw('expecting Number, got null')
    TH.expect(() => NumberModel(NaN)).to.throw('expecting Number, got Number NaN')
    TH.expect(() => NumberModel(NumberModel)).to.throw('expecting Number, got Function Number')
    TH.expect(() => NumberModel(x => x)).to.throw('expecting Number, got Function x => x')
  })
})
