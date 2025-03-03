// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const escapeForRegExp = TH.requireSrcFile('Conversion/escapeForRegExp')

describe('escapeForRegExp JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    escapeForRegExp('foo').should.eql('foo')
    escapeForRegExp('/').should.eql('/')
    TH.expect(() => escapeForRegExp(42)).to.throw('str.replace is not a function')
  })
})
