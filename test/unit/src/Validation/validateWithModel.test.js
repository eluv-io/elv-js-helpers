const TH = require('../../../test-helpers')
const validateWithModel = TH.requireSrcFile('Validation/validateWithModel')

describe('validateWithModel', () => {

  const defObjModel = TH.requireSrcFile('ModelFactory/defObjModel')
  const PositiveNumModel = TH.requireSrcFile('Model/PositiveNumModel')
  const resultUnwrap = TH.requireSrcFile('Conversion/resultUnwrap')

  it('should work as expected', () => {
    validateWithModel(PositiveNumModel, 42).inspect().should.equal('Ok 42')
    resultUnwrap(validateWithModel(PositiveNumModel, 0))[0].toString().should.equal( 'PositiveNumber: Value must be > 0 (got: 0)')
    resultUnwrap(validateWithModel(PositiveNumModel, 'foo'))[0].toString().should.equal( 'PositiveNumber: expecting Number, got String "foo"')
  })

  it('should be curried', () => {
    const validatePositiveNumber = validateWithModel(PositiveNumModel)
    validatePositiveNumber(42).inspect().should.equal('Ok 42')
    resultUnwrap(validatePositiveNumber(0))[0].toString().should.equal( 'PositiveNumber: Value must be > 0 (got: 0)')
    resultUnwrap(validatePositiveNumber('foo'))[0].toString().should.equal( 'PositiveNumber: expecting Number, got String "foo"')
  })

  it('should not hide attributes not defined in model', () => {
    const fooModel = defObjModel('foo', {foo: String})
    const data = resultUnwrap(validateWithModel(fooModel)({foo: 'f', bar: 'b'}))

    const rebuilt = JSON.parse(JSON.stringify(data))
    rebuilt.bar.should.equal('b')
  })
})
