const TH = require('../../../test-helpers')
const defCheckedKVObjModel = TH.requireSrcFile('ModelFactory/defCheckedKVObjModel')

const assertAfterCheck = TH.requireSrcFile('ModelAssertion/assertAfterCheck')
const passesModelCheck = TH.requireSrcFile('Boolean/passesModelCheck')
const PositiveIntModel = TH.requireSrcFile('Model/PositiveIntModel')
const StringModel = TH.requireSrcFile('Model/StringModel')

describe('defCheckedKVObjModel', () => {

  const ThreeCharStringModel = StringModel.extend().assert(
    ...assertAfterCheck(
      passesModelCheck(StringModel),
      x => x.length === 3,
      'string must be 3 characters long'
    )
  ).as('ThreeCharString')

  const Test1Model = defCheckedKVObjModel('Test1', ThreeCharStringModel, PositiveIntModel)

  it('should pass for good objects', () => {
    Test1Model({'foo': 1}).should.eql({'foo': 1})
  })

  it('should throw an exception for bad objects', () => {
    TH.expect(() => Test1Model({'foo': -1})).to.throw('key "foo" points to a value that is an invalid PositiveInteger (PositiveInteger: Value must be > 0 (got: -1))')
    TH.expect(() => Test1Model({'foobar': 1})).to.throw('invalid property name "foobar" (is not a valid ThreeCharString)')
  })

  it('should throw an exception for non-objects', () => {
    TH.expect(() => Test1Model(Infinity)).to.throw('expecting Object, got Number Infinity')
  })

  it('should have a JSDoc example that works', () => {
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')

    const NoBlankStrKVObjectModel = defCheckedKVObjModel(
      'ObjectWithNonBlankStringKeysAndValues',
      NonBlankStrModel,
      NonBlankStrModel
    )

    NoBlankStrKVObjectModel({foo: 'bar'}).should.eql( {foo: 'bar'})
    TH.expect(() => NoBlankStrKVObjectModel({foo: '   '})).to.throw('key "foo" points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: "   "))')
    TH.expect(() => NoBlankStrKVObjectModel({'  ': 'bar'})).to.throw('invalid property name "  " (is not a valid NonBlankString)')
    TH.expect(() => NoBlankStrKVObjectModel({foo: 42})).to.throw('key "foo" points to a value that is an invalid NonBlankString (NonBlankString: expecting String, got Number 42)')
    TH.expect(() => NoBlankStrKVObjectModel(42)).to.throw('expecting Object, got Number 42')
  })
})
