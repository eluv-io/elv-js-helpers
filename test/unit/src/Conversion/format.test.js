const TH = require('../../../test-helpers')
const format = TH.requireSrcFile('Conversion/format')

// AUTO-GENERATED TEST: Do not modify the following "describe('format JSDoc example', ...)" block:
describe('format JSDoc example', () => {
  it('should execute correctly as described', () => {
    format(' ').should.eql('" "')
    format(42).should.eql('42')
    format(x => x * 2).should.eql('[Function (anonymous)]')
    format(format).should.eql('[Function: format]')
  })
})
