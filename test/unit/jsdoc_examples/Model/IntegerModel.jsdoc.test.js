// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const IntegerModel = TH.requireSrcFile('Model/IntegerModel')

describe('IntegerModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    IntegerModel(42).should.eql(42)
    TH.expect(() => IntegerModel(4.2)).to.throw('Value must be an integer (got: 4.2)')
    TH.expect(() => IntegerModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
