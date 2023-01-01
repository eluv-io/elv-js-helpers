const TH = require('../../../test-helpers')
const assertObjValuesValid = TH.requireSrcFile('ModelAssertion/assertObjValuesValid')

const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')

const defBasicModel = TH.requireSrcFile('ModelFactory/defBasicModel')


describe('assertObjValuesValid', () => {

  it('should work as expected', () => {
    const NoBlankStringValsObjModel = defBasicModel('NoBlankStringValsObj', Object)
      .extend()
      .assert(...assertObjValuesValid(NonBlankStrModel))

    TH.expect(()=>NoBlankStringValsObjModel({foo: '  '})).to.throw('key "foo" points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: "  "))')

    const AnyValueModel = defBasicModel('AnyValue', Object)
      .extend()
      .assert(...assertObjValuesValid(null))

    AnyValueModel({foo: 3}).should.eql( {foo:3})
    AnyValueModel({foo: '  '}).should.eql( {foo:'  '})
  })
})
