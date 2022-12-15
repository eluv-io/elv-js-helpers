// unit test for RE_RATIONAL.js

const chai = require('chai')
chai.should()

const REGEX_RATIONAL = require('../../../../src/Validation/RE_RATIONAL')

describe('REGEX_RATIONAL', () => {
  it('should have JSDoc example that works', () => {
    REGEX_RATIONAL.test('0').should.equal(true)
    REGEX_RATIONAL.test('-0').should.equal(true)
    REGEX_RATIONAL.test('0/1').should.equal(true)
    REGEX_RATIONAL.test('0/010').should.equal(true)
    REGEX_RATIONAL.test('1/0').should.equal(false)
    REGEX_RATIONAL.test('-0').should.equal(true)
    REGEX_RATIONAL.test('3.14').should.equal(false)
    REGEX_RATIONAL.test('9 1/2').should.equal(false)
    REGEX_RATIONAL.test('19/2').should.equal(true)
    REGEX_RATIONAL.test('007').should.equal(true)

    const fracString = '22/7'
    const match = fracString.match(REGEX_RATIONAL)

    parseInt(match[1], 10).should.equal(22)
    match[2].should.equal('/7')
    parseInt(match[2].slice(1), 10).should.equal(7)
  })
})
