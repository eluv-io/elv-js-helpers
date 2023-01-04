// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const FractionStrModel = TH.requireSrcFile('Model/FractionStrModel')

describe('FractionStrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    TH.expect(() => FractionStrModel('foo')).to.throw(
      'Value must be a string in the form of a whole number or a fraction (got: "foo")'
    )
    TH.expect(() => FractionStrModel('  ')).to.throw(
      'Value must be a string in the form of a whole number or a fraction (got: "  ")'
    )
    TH.expect(() => FractionStrModel(42)).to.throw('expecting String, got Number 42')
    FractionStrModel('42').should.eql('42')
    FractionStrModel('0').should.eql('0')
    FractionStrModel('-42').should.eql('-42')
    FractionStrModel('42/2').should.eql('42/2')
    TH.expect(() => FractionStrModel('42/0')).to.throw(
      'Value must be a string in the form of a whole number or a fraction (got: "42/0")'
    )
  })
})
