const chai = require('chai')
chai.should()
const expect = chai.expect

const NonBlankStrModel = require('../../../src/NonBlankStrModel')

describe('NonBlankStrModel', () => {

  it('should pass for non-blank strings', () => {
    NonBlankStrModel('foo').should.equal('foo')
    NonBlankStrModel(' a ').should.equal(' a ')
    NonBlankStrModel('1').should.equal('1')
  })

  it('should throw an exception for blank strings', () => {
    expect(() => NonBlankStrModel('')).to.throw('Value must not be a blank string (got: "")')
    expect(() => NonBlankStrModel(' ')).to.throw('Value must not be a blank string (got: " ")')
  })

  it('should throw an exception for non-strings', () => {
    expect(() => NonBlankStrModel(1.5)).to.throw('expecting String, got Number 1.5')
    expect(() => NonBlankStrModel(-1.5)).to.throw('expecting String, got Number -1.5')
    expect(() => NonBlankStrModel(Infinity)).to.throw('expecting String, got Number Infinity')
    expect(() => NonBlankStrModel(-Infinity)).to.throw('expecting String, got Number -Infinity')
    expect(() => NonBlankStrModel()).to.throw('expecting String, got undefined')
    expect(() => NonBlankStrModel([])).to.throw('expecting String, got Array []')
    expect(() => NonBlankStrModel([1])).to.throw('expecting String, got Array [1]')
    expect(() => NonBlankStrModel(true)).to.throw('expecting String, got Boolean true')
    expect(() => NonBlankStrModel(null)).to.throw('expecting String, got null')
    expect(() => NonBlankStrModel(NonBlankStrModel)).to.throw('expecting String, got Function NonBlankString')
    expect(() => NonBlankStrModel(x => x)).to.throw('expecting String, got Function x => x')
  })

})
