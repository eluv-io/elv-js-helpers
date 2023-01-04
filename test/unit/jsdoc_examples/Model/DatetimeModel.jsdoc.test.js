// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const DatetimeModel = TH.requireSrcFile('Model/DatetimeModel')

describe('DatetimeModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    // when validation succeeds, returns the input:
    const testVal = new Date('2022-01-01T07:30:00Z')
    const myDatetime = DatetimeModel(testVal)
    myDatetime.valueOf().should.eql(1641022200000)
    TH.expect(() => DatetimeModel('foo')).to.throw('expecting Date, got String "foo"')
  })
})
