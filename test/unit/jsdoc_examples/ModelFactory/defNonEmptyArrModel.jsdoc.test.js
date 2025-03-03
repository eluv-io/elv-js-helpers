// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const defNonEmptyArrModel = TH.requireSrcFile('ModelFactory/defNonEmptyArrModel')

describe('defNonEmptyArrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const NonNegativeNumModel = TH.requireSrcFile('Model/NonNegativeNumModel')
    const NonEmptyAgeArrayModel = defNonEmptyArrModel('NonEmptyAgeArray', NonNegativeNumModel)
    NonEmptyAgeArrayModel([42]).should.eql([42])
    TH.expect(() => NonEmptyAgeArrayModel([])).to.throw('Value must not be empty (got: [])')
    TH.expect(() => NonEmptyAgeArrayModel(-1)).to.throw('expecting Array of NonNegativeNumber, got Number -1')
    TH.expect(() => NonEmptyAgeArrayModel([-1])).to.throw('Array[0] must be >= 0 (got: -1)')
    TH.expect(() => NonEmptyAgeArrayModel('')).to.throw('expecting Array of NonNegativeNumber, got String ""')
    TH.expect(() => NonEmptyAgeArrayModel(['foo'])).to.throw('expecting Array[0] to be Number, got String "foo"')
  })
})
