// unit test for defBoundedFracStrModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const defBoundedFracStrModel = require('../../../../src/ModelFactory/defBoundedFracStrModel')

describe('defBoundedFracStrModel', () => {

  it('should work as expected', () => {
    const PositiveFracModel = defBoundedFracStrModel(
      'PositiveFraction',
      '0',
      null,
      false,
      null
    )

    PositiveFracModel('42').should.equal('42')
    PositiveFracModel('22/7').should.equal('22/7')
    expect(()=>PositiveFracModel('0')).to.throw('Value must be > 0 (got: "0")')
    expect(()=>PositiveFracModel('-42')).to.throw('Value must be > 0 (got: "-42")')
    expect(()=>PositiveFracModel('foo')).to.throw('Value must be a string in the form of a whole number or a fraction (got: "foo")')
    expect(()=>PositiveFracModel(42)).to.throw('expecting String, got Number 42')

    const NegativeFracModel = defBoundedFracStrModel(
      'NegativeFraction',
      null,
      '0',
      null,
      false
    )

    expect(()=>NegativeFracModel('42')).to.throw('Value must be < 0 (got: "42")')
    expect(()=>NegativeFracModel('0')).to.throw('Value must be < 0 (got: "0")')
    NegativeFracModel('-22/7').should.equal('-22/7')
    NegativeFracModel('-42').should.equal('-42')

    const FracZeroToOneModel = defBoundedFracStrModel(
      'FractionZeroToOne',
      '0',
      '1',
      true,
      true
    )
    FracZeroToOneModel('1/2').should.equal('1/2')
  })
})
