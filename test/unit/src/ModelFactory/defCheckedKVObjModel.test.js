const TH = require('../../../test-helpers')
const defCheckedKVObjModel = TH.requireSrcFile('ModelFactory/defCheckedKVObjModel')

describe('defCheckedKVObjModel', () => {

  const assertAfterCheck = TH.requireSrcFile('ModelAssertion/assertAfterCheck')
  const passesModelCheck = TH.requireSrcFile('Boolean/passesModelCheck')
  const PositiveIntModel = TH.requireSrcFile('Model/PositiveIntModel')
  const StringModel = TH.requireSrcFile('Model/StringModel')

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
})
