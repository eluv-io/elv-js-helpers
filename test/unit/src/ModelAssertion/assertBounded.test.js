const TH = require('../../../test-helpers')
const assertBounded = TH.requireSrcFile('ModelAssertion/assertBounded')

const NumberModel = TH.requireSrcFile('Model/NumberModel')

describe('assertBounded', () => {

  const [assertPositiveNumberFn, assertPositiveErrMsgFn] =
    assertBounded(NumberModel, 0, null, false, null)

  const [assertNegativeNumberFn, assertNegativeErrMsgFn] =
    assertBounded(NumberModel, null, 0, null, false)

  const [assertNonPositiveNumberFn, assertNonPositiveErrMsgFn] =
    assertBounded(NumberModel, null, 0, null, true)

  const [assertNonNegativeNumberFn, assertNonNegativeErrMsgFn] =
    assertBounded(NumberModel, 0, null, true, null)

  // all numbers except Infinity and -Infinity
  const [assertFiniteNumberFn, assertFiniteErrMsgFn] =
    assertBounded(NumberModel, -Infinity, Infinity, false, false)

  // all numbers valid, syntax 1
  const [assertAnyNumberFn1, assertAnyNumberErrMsgFn1] =
    assertBounded(NumberModel, -Infinity, Infinity, true, true)

  // all numbers valid, syntax 2 - err msg returned is just a string
  const [assertAnyNumberFn2, assertAnyNumberErrMsg2] =
    assertBounded(NumberModel, null, null, null, null)

  it('should generate an assertion that returns expected value for inputs that are instances of underlying Model', () => {
    assertPositiveNumberFn(-Infinity).should.be.false
    assertPositiveNumberFn(-1.5).should.be.false
    assertPositiveNumberFn(-1).should.be.false
    assertPositiveNumberFn(0).should.be.false
    assertPositiveNumberFn(1).should.be.true
    assertPositiveNumberFn(1.5).should.be.true
    assertPositiveNumberFn(Infinity).should.be.true

    assertNegativeNumberFn(-Infinity).should.be.true
    assertNegativeNumberFn(-1.5).should.be.true
    assertNegativeNumberFn(-1).should.be.true
    assertNegativeNumberFn(0).should.be.false
    assertNegativeNumberFn(1).should.be.false
    assertNegativeNumberFn(1.5).should.be.false
    assertNegativeNumberFn(Infinity).should.be.false

    assertNonPositiveNumberFn(-Infinity).should.be.true
    assertNonPositiveNumberFn(-1.5).should.be.true
    assertNonPositiveNumberFn(-1).should.be.true
    assertNonPositiveNumberFn(0).should.be.true
    assertNonPositiveNumberFn(1).should.be.false
    assertNonPositiveNumberFn(1.5).should.be.false
    assertNonPositiveNumberFn(Infinity).should.be.false

    assertNonNegativeNumberFn(-Infinity).should.be.false
    assertNonNegativeNumberFn(-1.5).should.be.false
    assertNonNegativeNumberFn(-1).should.be.false
    assertNonNegativeNumberFn(0).should.be.true
    assertNonNegativeNumberFn(1).should.be.true
    assertNonNegativeNumberFn(1.5).should.be.true
    assertNonNegativeNumberFn(Infinity).should.be.true

    assertFiniteNumberFn(-Infinity).should.be.false
    assertFiniteNumberFn(-1.5).should.be.true
    assertFiniteNumberFn(-1).should.be.true
    assertFiniteNumberFn(0).should.be.true
    assertFiniteNumberFn(1).should.be.true
    assertFiniteNumberFn(1.5).should.be.true
    assertFiniteNumberFn(Infinity).should.be.false

    assertAnyNumberFn1(-Infinity).should.be.true
    assertAnyNumberFn1(-1.5).should.be.true
    assertAnyNumberFn1(1).should.be.true
    assertAnyNumberFn1(0).should.be.true
    assertAnyNumberFn1(1).should.be.true
    assertAnyNumberFn1(1.5).should.be.true
    assertAnyNumberFn1(Infinity).should.be.true

    assertAnyNumberFn2(-Infinity).should.be.true
    assertAnyNumberFn2(-1.5).should.be.true
    assertAnyNumberFn2(1).should.be.true
    assertAnyNumberFn2(0).should.be.true
    assertAnyNumberFn2(1).should.be.true
    assertAnyNumberFn2(1.5).should.be.true
    assertAnyNumberFn2(Infinity).should.be.true
  })

  it('should generate an assertion that returns true for values that are not instances of the underlying Model', () => {
    [
      assertPositiveNumberFn,
      assertNegativeNumberFn,
      assertNonPositiveNumberFn,
      assertNonNegativeNumberFn,
      assertFiniteNumberFn,
      assertAnyNumberFn1,
      assertAnyNumberFn2
    ].map(
      f => {
        f([1]).should.be.true
        f('a').should.be.true
        f(null).should.be.true
        f(undefined).should.be.true
      }
    )
  })

  it('should generate an assertion error message function that returns message with bad value and (if available) attribute name', () => {
    // note that in real life the offending value would be numeric, and assertAnyNumberErrMsgFn1 and
    // assertAnyNumberErrMsgFn2 should never actually get called
    assertPositiveErrMsgFn(false, NaN, null).should.equal('Value must be > 0 (got: NaN)')
    assertPositiveErrMsgFn(false, NaN, 'pixelWidth').should.equal('pixelWidth must be > 0 (got: NaN)')

    assertNegativeErrMsgFn(false, NaN, null).should.equal('Value must be < 0 (got: NaN)')
    assertNegativeErrMsgFn(false, NaN, 'pixelWidth').should.equal('pixelWidth must be < 0 (got: NaN)')

    assertNonPositiveErrMsgFn(false, NaN, null).should.equal('Value must be <= 0 (got: NaN)')
    assertNonPositiveErrMsgFn(false, NaN, 'pixelWidth').should.equal('pixelWidth must be <= 0 (got: NaN)')

    assertNonNegativeErrMsgFn(false, NaN, null).should.equal('Value must be >= 0 (got: NaN)')
    assertNonNegativeErrMsgFn(false, NaN, 'pixelWidth').should.equal('pixelWidth must be >= 0 (got: NaN)')

    assertFiniteErrMsgFn(false, NaN, null).should.equal('Value must be > -Infinity and < Infinity (got: NaN)')
    assertFiniteErrMsgFn(false, NaN, 'pixelWidth').should.equal('pixelWidth must be > -Infinity and < Infinity (got: NaN)')

    assertAnyNumberErrMsgFn1(false, NaN, null).should.equal('Value must be >= -Infinity and <= Infinity (got: NaN)')
    assertAnyNumberErrMsgFn1(false, NaN, 'pixelWidth').should.equal('pixelWidth must be >= -Infinity and <= Infinity (got: NaN)')

    assertAnyNumberErrMsg2.should.equal('')
  })

  it('should work as expected when used to extend a Model', () => {
    const NumberBetweenZeroAndOneModel = NumberModel.extend()
      .assert(...assertBounded(NumberModel, 0, 1, true, true))
      .as('NumberBetweenZeroAndOne')

    TH.expect(() => NumberBetweenZeroAndOneModel(-1)).to.throw('Value must be >= 0 and <= 1 (got: -1)')
    NumberBetweenZeroAndOneModel(0).should.equal(0)
    NumberBetweenZeroAndOneModel(0.5).should.equal(0.5)
    NumberBetweenZeroAndOneModel(1).should.equal(1)
    TH.expect(() => NumberBetweenZeroAndOneModel(2)).to.throw('Value must be >= 0 and <= 1 (got: 2)')
  })
})
