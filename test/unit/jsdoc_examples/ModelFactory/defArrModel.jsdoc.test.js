// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const defArrModel = TH.requireSrcFile('ModelFactory/defArrModel')

describe('defArrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    const NonNegativeNumModel = TH.requireSrcFile('Model/NonNegativeNumModel')
    const AgeArrayModel = defArrModel('AgeArray', NonNegativeNumModel)
    AgeArrayModel([42]).should.eql([42])
    AgeArrayModel([]).should.eql([])
    TH.expect(() => AgeArrayModel(-1)).to.throw('expecting Array of NonNegativeNumber, got Number -1')
    TH.expect(() => AgeArrayModel([-1])).to.throw('Array[0] must be >= 0 (got: -1)')
    TH.expect(() => AgeArrayModel('foo')).to.throw('expecting Array of NonNegativeNumber, got String "foo"')
    TH.expect(() => AgeArrayModel(['foo'])).to.throw('expecting Array[0] to be Number, got String "foo"')
  })
})
