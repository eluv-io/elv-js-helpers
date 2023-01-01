const TH = require('../../../test-helpers')
const cmpIndexable = TH.requireSrcFile('Functional/cmpIndexable')

describe('cmpIndexable', () => {
  it('should work as expected', () => {
    cmpIndexable([], [42]).should.equal(-1)
    cmpIndexable([42], []).should.equal(1)
    cmpIndexable([42], [42]).should.equal(0)
    cmpIndexable([42, 1], [42]).should.equal(1)
    TH.expect(() => cmpIndexable(2, 1)).to.throw('cmpIndexable: first argument does not have a length')
    cmpIndexable('abc', 'ab')
    TH.expect(() => cmpIndexable(null, undefined)).to.throw('Cannot read properties of null (reading \'length\')')
    TH.expect(() => cmpIndexable([42], ['a'])).to.throw('cmpIndexable: elements at index 0 are not comparable')
  })
})
