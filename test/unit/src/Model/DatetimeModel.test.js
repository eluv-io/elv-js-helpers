const TH = require('../../../test-helpers')
const DatetimeModel = TH.requireSrcFile('Model/DatetimeModel')

const kind = TH.requireSrcFile('Validation/kind')

describe('DatetimeModel', () => {
  it('should work as expected', () => {
    kind(DatetimeModel(new Date)).should.equal('Date')
    TH.expect(() => DatetimeModel('foo')).to.throw('expecting Date, got String "foo"')
  })
})
