// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const format = TH.requireSrcFile('Conversion/format')

describe('format JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    format(' ').should.eql('" "')
    format(42).should.eql('42')
    format(x => x * 2).should.eql('[Function (anonymous)]')
    format(format).should.eql('[Function: format]')
  })
})
