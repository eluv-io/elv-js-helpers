// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const defBoundedFracStrModel = TH.requireSrcFile('ModelFactory/defBoundedFracStrModel')

describe('defBoundedFracStrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    const PositiveFracModel = defBoundedFracStrModel('PositiveFraction', '0', null, false, null)
    PositiveFracModel('42').should.eql('42')
    PositiveFracModel('22/7').should.eql('22/7')
    TH.expect(() => PositiveFracModel('0')).to.throw('Value must be > 0 (got: "0")')
    TH.expect(() => PositiveFracModel('-42')).to.throw('Value must be > 0 (got: "-42")')
    TH.expect(() => PositiveFracModel('foo')).to.throw(
      'Value must be a string in the form of a whole number or a fraction (got: "foo")'
    )
    TH.expect(() => PositiveFracModel(42)).to.throw('expecting String, got Number 42')
    const NegativeFracModel = defBoundedFracStrModel('NegativeFraction', null, '0', null, false)
    TH.expect(() => NegativeFracModel('42')).to.throw('Value must be < 0 (got: "42")')
    TH.expect(() => NegativeFracModel('0')).to.throw('Value must be < 0 (got: "0")')
    NegativeFracModel('-22/7').should.eql('-22/7')
    NegativeFracModel('-42').should.eql('-42')
    const FracZeroToOneModel = defBoundedFracStrModel('FractionZeroToOne', '0', '1', true, true)
    FracZeroToOneModel('1/2').should.eql('1/2')
  })
})
