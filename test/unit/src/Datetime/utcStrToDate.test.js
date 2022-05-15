// '2022-05-03T00:26:07Z'

const chai = require('chai')
chai.should()
const expect = chai.expect

const utcStrToDate = require('../../../../src/Datetime/utcStrToDate')

describe('utcStrToDate', () => {

  it('should return expected datetimes for valid inputs', () => {
    utcStrToDate('2022-01-01T14:00:00Z').toISOString()
      .should.equal('2022-01-01T14:00:00.000Z')

    utcStrToDate('2022-05-03T00:26:07Z').toISOString()
      .should.equal('2022-05-03T00:26:07.000Z')
  })

  it('should throw expected exceptions for invalid inputs', () => {
    expect(() => utcStrToDate('2022-99-01T14:00:00Z'))
      .to.throw('Value is not a valid UTC Datetime string (got: "2022-99-01T14:00:00Z")')

    expect(() => utcStrToDate('2022-02-30T14:00:00Z'))
      .to.throw('Value is not a valid UTC datetime string (got: "2022-02-30T14:00:00Z")')

    expect(() => utcStrToDate(42))
      .to.throw('expecting String, got Number 42')
  })
})
