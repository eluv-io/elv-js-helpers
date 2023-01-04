const TH = require('../../../test-helpers')
const RE_RATIONAL = TH.requireSrcFile('Validation/RE_RATIONAL')

describe('RE_RATIONAL', () => {
  it('should work as expected', () => {
    RE_RATIONAL.test('0').should.equal(true)
    RE_RATIONAL.test('-0').should.equal(true)
    RE_RATIONAL.test('0/1').should.equal(true)
    RE_RATIONAL.test('0/010').should.equal(true)
    RE_RATIONAL.test('1/0').should.equal(false)
    RE_RATIONAL.test('-0').should.equal(true)
    RE_RATIONAL.test('3.14').should.equal(false)
    RE_RATIONAL.test('9 1/2').should.equal(false)
    RE_RATIONAL.test('19/2').should.equal(true)
    RE_RATIONAL.test('007').should.equal(true)

    const fracString = '22/7'
    const match = fracString.match(RE_RATIONAL)

    parseInt(match[1], 10).should.equal(22)
    match[2].should.equal('/7')
    parseInt(match[2].slice(1), 10).should.equal(7)
  })
})
