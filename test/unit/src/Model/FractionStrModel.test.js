// unit test for FractionStrModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const FractionStrModel = require('../../../../src/Model/FractionStrModel')

describe('FractionStrModel', () => {
  it('should work as expected', () => {
    expect(() => FractionStrModel('foo')).to.throw('Value must be a string in the form of a whole number or a fraction (got: "foo")')
    expect(() => FractionStrModel('  ')).to.throw('Value must be a string in the form of a whole number or a fraction (got: "  ")')
    expect(() => FractionStrModel(42)).to.throw('expecting String, got Number 42')
    FractionStrModel('42').should.equal('42')
    FractionStrModel('0').should.equal(   '0' )
    FractionStrModel('-42') .should.equal(  '-42')
    FractionStrModel('42/2').should.equal(  '42/2')
    expect(() => FractionStrModel('42/0')).to.throw('Value must be a string in the form of a whole number or a fraction (got: "42/0")')
  })
})
