const TH = require('../../../test-helpers')
const listPush = TH.requireSrcFile('Functional/listPush')

const List = TH.requireSrcFile('ADT/List')

describe('listPush', () => {

  it('should work as expected', () => {
    listPush(List([1,2,3]), 4).inspect().should.equal('List [ 1, 2, 3, 4 ]')
  })
})
