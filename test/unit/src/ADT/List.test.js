const TH = require('../../../test-helpers')
const List = TH.requireSrcFile('ADT/List')

describe('List', () => {
  const myList = List([1, 2, 3])
  const emptyList = List([])

  it('should work as expected', () => {
    myList.toArray().should.eql([1, 2, 3])
    myList.head().inspect().should.equal('Just 1')
    myList.tail().inspect().should.equal('Just List [ 2, 3 ]')
    List([[1, 2, 3]]).inspect().should.equal('List [ [ 1, 2, 3 ] ]')
    List([42]).inspect().should.equal('List [ 42 ]')
    List(42).inspect().should.equal('List [ 42 ]')
    emptyList.head().inspect().should.equal('Nothing')
  })
})
