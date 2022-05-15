const chai = require('chai')
chai.should()

const format = require('../../../../src/Conversion/format')

describe('format', () => {

  it('should return expected strings', () => {
    format(' ').should.equal('" "')
    format(42).should.equal('42')
    format(x => x*2).should.equal('[Function (anonymous)]')
    format(format).should.equal('[Function: format]')
  })
})
