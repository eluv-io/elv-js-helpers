const TH = require('../../../test-helpers')
const comparator = TH.requireSrcFile('Functional/comparator')

const isGT = TH.requireSrcFile('Boolean/isGT')
const isLT = TH.requireSrcFile('Boolean/isLT')

describe('comparator', () => {

  it('should work as expected', () => {
    const compAscending = comparator(isGT)
    const compDescending = comparator(isLT)

    let data = [1, 42, -42, 0]
    data.sort(compAscending)
    data.join(',').should.equal('-42,0,1,42')

    data.sort(compDescending)
    data.join(',').should.equal('42,1,0,-42')
  })
})
