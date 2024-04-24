const TH = require('../../../test-helpers')
const UTCStrModel = TH.requireSrcFile('Model/UTCStrModel')

describe('UTCStrModel', () => {
  it('should work as expected', () => {
    UTCStrModel('2022-01-01T14:00:00Z').should.equal('2022-01-01T14:00:00Z')
    TH.expect(() => UTCStrModel('2022-13-01T14:00:00Z')).to.throw('Value is not a valid UTC datetime string (got: "2022-13-01T14:00:00Z")')
    TH.expect(() => UTCStrModel('foo')).to.throw('Value is not in UTC format \'yyyy-mm-ddThh:mm:ss[.s...]Z\' (got: "foo")')
    TH.expect(() => UTCStrModel(42)).to.throw('expecting String, got Number 42')
  })
})
