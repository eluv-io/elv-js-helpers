// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const throwIfFalse = TH.requireSrcFile('Validation/throwIfFalse')

describe('throwIfFalse JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const PASSWORD_REGEX_4 = /[A-Z]{4}/
    const PASSWORD_REGEX_42 = /[A-Z]{42}/
    const password = 'ABCD'
    TH.expect(() => throwIfFalse('password must be 42 upper-case letters', PASSWORD_REGEX_42.test(password))).to.throw(
      'password must be 42 upper-case letters'
    )
    throwIfFalse('password must be 4 upper-case letters', PASSWORD_REGEX_4.test(password)).should.eql(true)
    throwIfFalse('foo', 42).should.eql(42)
    throwIfFalse('foo', []).should.eql([])
  })
})
