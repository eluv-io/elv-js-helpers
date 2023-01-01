const TH = require('../../../test-helpers')
const assertValidUTCStr = TH.requireSrcFile('ModelAssertion/assertValidUTCStr')

const StringModel = TH.requireSrcFile('Model/StringModel')

describe('assertValidUTCStr', () => {

  const [assertFn, assertErrMsgFn] = assertValidUTCStr()

  it('should work when used in an ObjectModel definition', () => {
    const UTCDateTimeStringModel = StringModel.extend()
      .assert(...assertValidUTCStr())
      .as('UTCDateTimeString')

    UTCDateTimeStringModel('2022-05-03T00:26:07Z').should.equal('2022-05-03T00:26:07Z')
    TH.expect(()=> UTCDateTimeStringModel('2022-99-03T00:26:07Z')).to.throw('Value is not a valid UTC datetime string (got: "2022-99-03T00:26:07Z")')
    TH.expect(()=> UTCDateTimeStringModel('foo')).to.throw('Value is not a valid UTC datetime string (got: "foo")')

  })

  it('should generate an assertion that returns true for good values', () => {
    assertFn('2022-05-03T00:26:07Z').should.be.true
  })

  it('should generate an assertion that returns false for bad timestamps that still pass regex', () => {
    assertFn('2022-99-03T00:26:07Z').should.be.false
    assertFn('a').should.be.false
  })

  it('should generate an assertion that returns true for values that are not instances of NonBlankString', () => {
    assertFn([1]).should.be.true
    assertFn('').should.be.true
    assertFn(' ').should.be.true
    assertFn(null).should.be.true
    assertFn(undefined).should.be.true
  })

  it('should generate an assertion error message function that returns message with bad value and (if available) attribute name', () => {
    assertErrMsgFn(false, 0, null).should.equal('Value is not a valid UTC datetime string (got: 0)')
    assertErrMsgFn(false, -1, 'startTime').should.equal('startTime is not a valid UTC datetime string (got: -1)')
  })
})
