const TH = require('../../../test-helpers')
const assertPropRel = TH.requireSrcFile('ModelAssertion/assertPropRel')

describe('assertPropRel', () => {

  const isGTE = TH.requireSrcFile('Boolean/isGTE')
  const defObjModel = TH.requireSrcFile('ModelFactory/defObjModel')

  it('should work as expected', () => {
    const NumLimitsModel = defObjModel(
      'NumberLimits',
      {
        min: Number,
        max: Number
      }
    ).extend().assert(
      ...assertPropRel(
        isGTE,
        'must be greater than or equal to',
        'max',
        'min'
      )
    )

    NumLimitsModel({min: 1, max: 2}).should.eql({min: 1, max: 2})
    TH.expect(() => NumLimitsModel({min: 2, max: 1})).to.throw('max (1) must be greater than or equal to min (2)')
  })
})
