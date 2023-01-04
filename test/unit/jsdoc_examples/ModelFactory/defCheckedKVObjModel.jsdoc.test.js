// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const defCheckedKVObjModel = TH.requireSrcFile('ModelFactory/defCheckedKVObjModel')

describe('defCheckedKVObjModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
    const NoBlankStrKVObjectModel = defCheckedKVObjModel(
      'ObjectWithNonBlankStringKeysAndValues',
      NonBlankStrModel,
      NonBlankStrModel
    )
    NoBlankStrKVObjectModel({foo: 'bar'}).should.eql({foo: 'bar'})
    TH.expect(() => NoBlankStrKVObjectModel({foo: '   '})).to.throw(
      'key "foo" points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: "   "))'
    )
    TH.expect(() => NoBlankStrKVObjectModel({'  ': 'bar'})).to.throw(
      'invalid property name "  " (is not a valid NonBlankString)'
    )
    TH.expect(() => NoBlankStrKVObjectModel({foo: 42})).to.throw(
      'key "foo" points to a value that is an invalid NonBlankString (NonBlankString: expecting String, got Number 42)'
    )
    TH.expect(() => NoBlankStrKVObjectModel(42)).to.throw('expecting Object, got Number 42')
  })
})
