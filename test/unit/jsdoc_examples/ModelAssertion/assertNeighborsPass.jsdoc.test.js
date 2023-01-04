// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const assertNeighborsPass = TH.requireSrcFile('ModelAssertion/assertNeighborsPass')

describe('assertNeighborsPass JSDoc example', () => {
  it('should execute correctly as described', () => {
    const defBasicModel = TH.requireSrcFile('ModelFactory/defBasicModel')
    const kind = TH.requireSrcFile('Validation/kind')
    // Note use of spread operator (...) to unpack the array returned by assertNeighborsPass()
    const ArrayAllSameKindModel = defBasicModel('ArrayAllSameKindModel', Array)
      .extend()
      .assert(...assertNeighborsPass((x, y) => kind(x) === kind(y), 'elements are not all of the same kind'))
    ArrayAllSameKindModel([1, 2, 3]).should.eql([1, 2, 3])
    ArrayAllSameKindModel([]).should.eql([])
    TH.expect(() => ArrayAllSameKindModel([42, 'a'])).to.throw(
      'Value elements are not all of the same kind (got: [42,"a"])'
    )
    TH.expect(() => ArrayAllSameKindModel('foo')).to.throw('expecting Array, got String "foo"')
  })
})
