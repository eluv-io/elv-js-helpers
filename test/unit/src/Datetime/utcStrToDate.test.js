const TH = require('../../../test-helpers')
const utcStrToDate = TH.requireSrcFile('Datetime/utcStrToDate')

describe('utcStrToDate', () => {

  it('should return expected datetimes for valid inputs', () => {
    utcStrToDate('2022-01-01T14:00:00Z').toISOString()
      .should.equal('2022-01-01T14:00:00.000Z')

    utcStrToDate('2022-05-03T00:26:07Z').toISOString()
      .should.equal('2022-05-03T00:26:07.000Z')
  })

  it('should throw expected exceptions for invalid inputs', () => {
    TH.expect(() => utcStrToDate('2022-99-01T14:00:00Z'))
      .to.throw('Value is not a valid UTC datetime string (got: "2022-99-01T14:00:00Z")')

    TH.expect(() => utcStrToDate('2022-02-30T14:00:00Z'))
      .to.throw('Value is not a valid UTC datetime string (got: "2022-02-30T14:00:00Z")')

    TH.expect(() => utcStrToDate(42))
      .to.throw('expecting String, got Number 42')
  })
})
