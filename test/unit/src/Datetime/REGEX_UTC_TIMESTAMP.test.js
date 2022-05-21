// unit test for REGEX_UTC_TIMESTAMP.js

const chai = require('chai')
chai.should()

const REGEX_UTC_TIMESTAMP = require('../../../../src/Datetime/REGEX_UTC_TIMESTAMP')

describe('REGEX_UTC_TIMESTAMP', () => {

  it('should work as expected', () => {
    REGEX_UTC_TIMESTAMP.test('2022-01-02T03:45:00Z').should.be.true
    REGEX_UTC_TIMESTAMP.test('foo').should.be.false

    const utcString = '2022-01-02T03:45:00Z'
    const match = utcString.match(REGEX_UTC_TIMESTAMP)

    parseInt(match[1], 10).should.equal(2022)
    parseInt(match[2], 10).should.equal(1)
    parseInt(match[3], 10).should.equal(2)
    parseInt(match[4], 10).should.equal(3)
    parseInt(match[5], 10).should.equal(45)
    parseInt(match[6], 10).should.equal(0)
  })
})
