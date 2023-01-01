const TH = require('../../../test-helpers')
const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')

describe('NonBlankStrModel', () => {

  it('should pass for non-blank strings', () => {
    NonBlankStrModel('foo').should.equal('foo')
    NonBlankStrModel(' a ').should.equal(' a ')
    NonBlankStrModel('1').should.equal('1')
  })

  it('should throw an exception for blank strings', () => {
    TH.expect(() => NonBlankStrModel('')).to.throw('Value must not be a blank string (got: "")')
    TH.expect(() => NonBlankStrModel(' ')).to.throw('Value must not be a blank string (got: " ")')
  })

  it('should throw an exception for non-strings', () => {
    TH.expect(() => NonBlankStrModel(1.5)).to.throw('expecting String, got Number 1.5')
    TH.expect(() => NonBlankStrModel(-1.5)).to.throw('expecting String, got Number -1.5')
    TH.expect(() => NonBlankStrModel(Infinity)).to.throw('expecting String, got Number Infinity')
    TH.expect(() => NonBlankStrModel(-Infinity)).to.throw('expecting String, got Number -Infinity')
    TH.expect(() => NonBlankStrModel()).to.throw('expecting String, got undefined')
    TH.expect(() => NonBlankStrModel([])).to.throw('expecting String, got Array []')
    TH.expect(() => NonBlankStrModel([1])).to.throw('expecting String, got Array [1]')
    TH.expect(() => NonBlankStrModel(true)).to.throw('expecting String, got Boolean true')
    TH.expect(() => NonBlankStrModel(null)).to.throw('expecting String, got null')
    TH.expect(() => NonBlankStrModel(NonBlankStrModel)).to.throw('expecting String, got Function NonBlankString')
    TH.expect(() => NonBlankStrModel(x => x)).to.throw('expecting String, got Function x => x')
  })
})
