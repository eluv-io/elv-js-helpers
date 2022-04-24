const chai = require('chai')
chai.should()

const NumberModel = require('../../../src/NumberModel')

const assertBounded = require('../../../src/assertBounded')

describe('assertBounded', () => {

  const [assertPositiveNumberFn, assertPositiveErrMsgFn] =
    assertBounded(NumberModel, 0, null,false, null)

  const [assertNegativeNumberFn, assertNegativeErrMsgFn] =
    assertBounded(NumberModel, null, 0,null, true)

  const [assertNonPositiveNumberFn, assertNonPositiveErrMsgFn] =
    assertBounded(NumberModel, null, null,null, true)

  const [assertNonNegativeNumberFn, assertNonNegativeErrMsgFn] =
    assertBounded(NumberModel, 0, null,true, null)

  const [assertFiniteNumberFn, assertFiniteErrMsgFn] =
    assertBounded(NumberModel, -Infinity, Infinity,false, false)

  const [assertNumberFn1, assertNumberErrMsgFn1] =
    assertBounded(NumberModel, -Infinity, Infinity,true, true)

  const [assertNumberFn2, assertNumberErrMsgFn2] =
    assertBounded(NumberModel, null, null, null, null)

  it('should generate an assertion that returns true for good values', () => {
    assertPositiveNumberFn(1).should.be.true
    assertPositiveNumberFn(1.5).should.be.true
    assertPositiveNumberFn(Infinity).should.be.true

    assertNonPositiveNumberFn(0).should.be.true
    assertNonPositiveNumberFn(-1).should.be.true
    assertNonPositiveNumberFn(-1.5).should.be.true
    assertNonPositiveNumberFn(-Infinity).should.be.true

    assertNegativeNumberFn(-1).should.be.true
    assertNegativeNumberFn(-1.5).should.be.true
    assertNegativeNumberFn(-Infinity).should.be.true

    assertNonNegativeNumberFn(0).should.be.true
    assertNonNegativeNumberFn(1).should.be.true
    assertNonNegativeNumberFn(1.5).should.be.true
    assertNonNegativeNumberFn(Infinity).should.be.true

    assertFiniteNumberFn(-1.5).should.be.true
    assertFiniteNumberFn(1).should.be.true
    assertFiniteNumberFn(0).should.be.true
    assertFiniteNumberFn(1).should.be.true
    assertFiniteNumberFn(1.5).should.be.true

    assertNumberFn1(-Infinity).should.be.true
    assertNumberFn1(-1.5).should.be.true
    assertNumberFn1(1).should.be.true
    assertNumberFn1(0).should.be.true
    assertNumberFn1(1).should.be.true
    assertNumberFn1(1.5).should.be.true
    assertNumberFn1(Infinity).should.be.true

    assertNumberFn2(-Infinity).should.be.true
    assertNumberFn2(-1.5).should.be.true
    assertNumberFn2(1).should.be.true
    assertNumberFn2(0).should.be.true
    assertNumberFn2(1).should.be.true
    assertNumberFn2(1.5).should.be.true
    assertNumberFn2(Infinity).should.be.true

  })

  it('should generate an assertion that returns false for bad values that are still instances of the underlying model', () => {
    assertPositiveNumberFn(-Infinity).should.be.false
    assertPositiveNumberFn(-1).should.be.false
    assertPositiveNumberFn(0).should.be.false
  })

  it('should generate an assertion that returns true for values that are not instances of the underlying model', () => {
    assertPositiveNumberFn([1]).should.be.true
    assertPositiveNumberFn('a').should.be.true
    assertPositiveNumberFn(null).should.be.true
    assertPositiveNumberFn(undefined).should.be.true
  })

  it('should generate an assertion error message function that returns message with bad value and (if available) attribute name', () => {
    assertPositiveErrMsgFn(false, 0, null).should.equal('Value must be > 0 (got: 0)')
    assertPositiveErrMsgFn(false, -1, 'pixelWidth').should.equal('pixelWidth must be > 0 (got: -1)')
  })
})
