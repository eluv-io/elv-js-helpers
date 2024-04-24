// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const parseUTCStr = TH.requireSrcFile('Datetime/parseUTCStr')

describe('parseUTCStr JSDoc example', () => {
  it('should execute correctly as described', () => {
    const dateObject = parseUTCStr('2022-01-01T14:00:00Z')
    dateObject.valueOf().should.eql(1641045600000)
    const dateObjectMilliseconds = parseUTCStr('2022-01-01T14:00:00.123Z')
    dateObjectMilliseconds.valueOf().should.eql(1641045600123)
    // Strings containing bad datetime return Date object containing NaN
    const badDate = parseUTCStr('2022-99-01T14:00:00Z')
    badDate.valueOf().should.eql(NaN)
    // Non-strings return Date object containing NaN
    const nonStringDate = parseUTCStr(42)
    nonStringDate.valueOf().should.eql(NaN)
  })
})
