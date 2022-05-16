// unit test for List.js

const equals = require('ramda/src/equals')

const chai = require('chai')
chai.should()

const List = require('../../../../src/ADT/List')

describe('List', () => {
  const myList = List([1,2,3])
  const emptyList = List([])

  it('should work as expected', () => {
    equals(myList.toArray(), [ 1, 2, 3 ]).should.be.true
    myList.head().inspect().should.equal('Just 1')
    myList.tail().inspect().should.equal('Just List [ 2, 3 ]')
    List([[1,2,3]]).inspect().should.equal('List [ [ 1, 2, 3 ] ]')
    List([42]).inspect().should.equal('List [ 42 ]')
    List(42).inspect().should.equal('List [ 42 ]')
    emptyList.head().inspect().should.equal('Nothing')
  })
})
