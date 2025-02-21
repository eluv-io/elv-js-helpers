// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const objFromEntries = TH.requireSrcFile('Conversion/objFromEntries')

describe('objFromEntries JSDoc example', () => {
  it('should execute correctly as described', () => {
    const kvPairs = [
      ['a', 1],
      ['b', 2],
    ]
    objFromEntries(kvPairs).should.eql({a: 1, b: 2})
  })
})
