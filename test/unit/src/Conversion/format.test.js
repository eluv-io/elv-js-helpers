const TH = require('../../../test-helpers')
const format = TH.requireSrcFile('Conversion/format')

describe('format', () => {

  it('should return expected strings', () => {
    format(' ').should.equal('" "')
    format(42).should.equal('42')
    format(x => x*2).should.equal('[Function (anonymous)]')
    format(format).should.equal('[Function: format]')
  })
})
