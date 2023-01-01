const TH = require('../../../test-helpers')
const assertObjKeysValid = TH.requireSrcFile('ModelAssertion/assertObjKeysValid')

const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')

const defBasicModel = TH.requireSrcFile('ModelFactory/defBasicModel')

describe('assertObjKeysValid', () => {

  it('should work as expected', () => {
    const NoBlankKeysObjModel = defBasicModel('NoBlankKeysObj', Object)
      .extend()
      .assert(...assertObjKeysValid(NonBlankStrModel))

    NoBlankKeysObjModel({foo: 3}).should.eql({foo: 3})

    TH.expect(() => NoBlankKeysObjModel({'  ': 3})).to.throw('invalid property name "  " (is not a valid NonBlankString)')

    const AnyKeyModel = defBasicModel('AnyKey', Object)
      .extend()
      .assert(...assertObjKeysValid(null))

    AnyKeyModel({foo: 3}).should.eql({foo: 3})
    AnyKeyModel({'  ': 3}).should.eql({'  ': 3})
  })
})
