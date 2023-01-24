// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const defNonEmptyTypedKVObjModel = TH.requireSrcFile('ModelFactory/defNonEmptyTypedKVObjModel')

describe('defNonEmptyTypedKVObjModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    const defObjectModel = TH.requireSrcFile('ModelFactory/defObjectModel')
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
    const NonEmptyNonBlankKVModel = defNonEmptyTypedKVObjModel('NonEmptyNonBlankKV', NonBlankStrModel, NonBlankStrModel)
    TH.expect(() => NonEmptyNonBlankKVModel({})).to.throw('Value must have at least one entry (got: {})')
    NonEmptyNonBlankKVModel({foo: 'bar'}).should.eql({foo: 'bar'})
    TH.expect(() => NonEmptyNonBlankKVModel({foo: ' '})).to.throw(
      'key "foo" points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: " "))'
    )
    TH.expect(() => NonEmptyNonBlankKVModel({' ': 'bar'})).to.throw(
      'invalid property name " " (is not a valid NonBlankString)'
    )
    TH.expect(() => NonEmptyNonBlankKVModel({foo: 42})).to.throw(
      'key "foo" points to a value that is an invalid NonBlankString (NonBlankString: expecting String, got Number 42)'
    )
    TH.expect(() => NonEmptyNonBlankKVModel(42)).to.throw('expecting Object, got Number 42')
    // When used for a field in an object, the error message will include the name of the field:
    const MediaFileModel = defObjectModel('MediaFile', {
      streams: defNonEmptyTypedKVObjModel(
        'streamsMap',
        NonBlankStrModel,
        defObjectModel('stream', {
          type: ['audio', 'subtitle', 'video'],
        })
      ),
    })
    TH.expect(() => MediaFileModel({streams: {}})).to.throw('streams must have at least one entry (got: {})')
  })
})
