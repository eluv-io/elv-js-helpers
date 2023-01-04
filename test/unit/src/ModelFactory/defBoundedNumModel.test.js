const TH = require('../../../test-helpers')
const defBoundedNumModel = TH.requireSrcFile('ModelFactory/defBoundedNumModel')

describe('defBoundedNumModel', function () {

  const kind = TH.requireSrcFile('Validation/kind')
  const resultUnwrap = TH.requireSrcFile('Conversion/resultUnwrap')
  const validateWithModel = TH.requireSrcFile('Validation/validateWithModel')

  const ZeroToOneInclusive = defBoundedNumModel('ZeroToOneInclusive', 0, 1, true, true)
  const ZeroToOneLowerInclusive = defBoundedNumModel('ZeroToOneLowerInclusive', 0, 1, true, false)
  const ZeroToOneUpperInclusive = defBoundedNumModel('ZeroToOneUpperInclusive', 0, 1, false, true)

  const ValidateZeroToOneInclusive = validateWithModel(ZeroToOneInclusive)
  const ValidateZeroToOneLowerInclusive = validateWithModel(ZeroToOneLowerInclusive)
  const ValidateZeroToOneUpperInclusive = validateWithModel(ZeroToOneUpperInclusive)

  it('should pass for valid inputs', function () {
    TH.expect(() => ZeroToOneInclusive(0)).to.not.throw()
    TH.expect(() => ZeroToOneInclusive(0.5)).to.not.throw()
    TH.expect(() => ZeroToOneInclusive(1)).to.not.throw()

    TH.expect(() => ZeroToOneLowerInclusive(0)).to.not.throw()
    TH.expect(() => ZeroToOneLowerInclusive(0.5)).to.not.throw()

    TH.expect(() => ZeroToOneUpperInclusive(0.5)).to.not.throw()
    TH.expect(() => ZeroToOneUpperInclusive(1)).to.not.throw()
  })

  it('should throw for out of range inputs', function () {
    TH.expect(() => ZeroToOneInclusive(-Infinity)).to.throw()
    TH.expect(() => ZeroToOneInclusive(-1)).to.throw()
    TH.expect(() => ZeroToOneInclusive(1.5)).to.throw()
    TH.expect(() => ZeroToOneInclusive(Infinity)).to.throw()

    TH.expect(() => ZeroToOneLowerInclusive(-Infinity)).to.throw()
    TH.expect(() => ZeroToOneLowerInclusive(-1)).to.throw()
    TH.expect(() => ZeroToOneLowerInclusive(1)).to.throw()
    TH.expect(() => ZeroToOneLowerInclusive(Infinity)).to.throw()

    TH.expect(() => ZeroToOneUpperInclusive(-Infinity)).to.throw()
    TH.expect(() => ZeroToOneUpperInclusive(-1)).to.throw()
    TH.expect(() => ZeroToOneUpperInclusive(0)).to.throw()
    TH.expect(() => ZeroToOneUpperInclusive(1.5)).to.throw()
    TH.expect(() => ZeroToOneUpperInclusive(Infinity)).to.throw()
  })

  it('should only return 1 error for non-numeric inputs', function () {
    let result = resultUnwrap(ValidateZeroToOneInclusive())
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('ZeroToOneInclusive: expecting Number, got undefined')

    result = resultUnwrap(ValidateZeroToOneInclusive(null))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('ZeroToOneInclusive: expecting Number, got null')

    result = resultUnwrap(ValidateZeroToOneInclusive({foo: 1}))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('ZeroToOneInclusive: expecting Number, got Object {\n\tfoo: 1 \n}')

    result = resultUnwrap(ValidateZeroToOneInclusive('foo'))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('ZeroToOneInclusive: expecting Number, got String "foo"')
  })

  it('should only return 1 error for out-of-range inputs', function () {
    let result = resultUnwrap(ValidateZeroToOneInclusive(-1))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('ZeroToOneInclusive: Value must be >= 0 and <= 1 (got: -1)')

    result = resultUnwrap(ValidateZeroToOneInclusive(2))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('ZeroToOneInclusive: Value must be >= 0 and <= 1 (got: 2)')

    result = resultUnwrap(ValidateZeroToOneLowerInclusive(1))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('ZeroToOneLowerInclusive: Value must be >= 0 and < 1 (got: 1)')

    result = resultUnwrap(ValidateZeroToOneUpperInclusive(0))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('ZeroToOneUpperInclusive: Value must be > 0 and <= 1 (got: 0)')
  })
})
