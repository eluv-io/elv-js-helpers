// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const RE_RATIONAL = TH.requireSrcFile('Validation/RE_RATIONAL')

describe('RE_RATIONAL JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    RE_RATIONAL.test('0').should.eql(true)
    RE_RATIONAL.test('-0').should.eql(true)
    RE_RATIONAL.test('0/1').should.eql(true)
    RE_RATIONAL.test('0/010').should.eql(true)
    RE_RATIONAL.test('1/0').should.eql(false)
    RE_RATIONAL.test('-0').should.eql(true)
    RE_RATIONAL.test('3.14').should.eql(false)
    RE_RATIONAL.test('9 1/2').should.eql(false)
    RE_RATIONAL.test('19/2').should.eql(true)
    RE_RATIONAL.test('007').should.eql(true)
    const fracString = '22/7'
    const match = fracString.match(RE_RATIONAL)
    if (!match) throw Error('Rational number string not in proper format')
    // first capture group is numerator:
    match[1].should.eql('22')
    // second capture group is slash + denominator:
    match[2].should.eql('/7')
  })
})
