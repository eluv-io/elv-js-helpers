// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const defTypedKVObjModel = TH.requireSrcFile('ModelFactory/defTypedKVObjModel')

describe('defTypedKVObjModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
    const NoBlankKVModel = defTypedKVObjModel('NonBlankKV', NonBlankStrModel, NonBlankStrModel)
    NoBlankKVModel({}).should.eql({})
    NoBlankKVModel({foo: 'bar'}).should.eql({foo: 'bar'})
    TH.expect(() => NoBlankKVModel({foo: '   '})).to.throw(
      'key "foo" points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: "   "))'
    )
    TH.expect(() => NoBlankKVModel({'  ': 'bar'})).to.throw(
      'invalid property name "  " (is not a valid NonBlankString)'
    )
    TH.expect(() => NoBlankKVModel({foo: 42})).to.throw(
      'key "foo" points to a value that is an invalid NonBlankString (NonBlankString: expecting String, got Number 42)'
    )
    TH.expect(() => NoBlankKVModel(42)).to.throw('expecting Object, got Number 42')
  })
})
