const TH = require('../../../test-helpers')
const getPath = TH.requireSrcFile('Functional/getPath')

const kind = TH.requireSrcFile('Validation/kind')

describe('getPath', () => {
  it('should work as expected', () => {
    getPath(['a', 'b'], {a: {b: 2}}).should.equal(2)
    kind(getPath(['a', 'b'], {c: {b: 2}})).should.equal('undefined')
    getPath(['a', 'b', 0], {a: {b: [1, 2, 3]}}).should.equal(1)
  })

  it('should be curried', () => {
    const getAB = getPath(['a','b'])
    getAB({a: {b: 2}}).should.equal(2)
  })
})
