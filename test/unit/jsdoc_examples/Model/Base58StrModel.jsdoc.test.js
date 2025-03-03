// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const Base58StrModel = TH.requireSrcFile('Model/Base58StrModel')

describe('Base58StrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    Base58StrModel('foo').should.eql('foo')
    TH.expect(() => Base58StrModel('FOO')).to.throw('Value is not a valid Base58 string (got: "FOO")')
    TH.expect(() => Base58StrModel('  ')).to.throw('Value must not be a blank string (got: "  ")')
    TH.expect(() => Base58StrModel(42)).to.throw('expecting String, got Number 42')
  })
})
