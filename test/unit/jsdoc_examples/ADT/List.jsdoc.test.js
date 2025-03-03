// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const List = TH.requireSrcFile('ADT/List')

describe('List JSDoc example', () => {
  it('should execute correctly as described', () => {
    const myList = List([1, 2, 3])
    // List with 3 elements:
    myList.inspect().should.eql('List [ 1, 2, 3 ]')
    // Convert to Javascript array:
    myList.toArray().should.eql([1, 2, 3])
    // head() returns instance of the Crocks 'Maybe' ADT: if array is empty, returns Nothing, else returns Just
    myList.head().inspect().should.eql('Just 1')
    // tail() returns an instance of Crocks 'Maybe' ADT, which wraps a List if there were at least 2 elements in original List
    myList.tail().inspect().should.eql('Just List [ 2, 3 ]')
    // List with 1 element, which itself is a 3-item array:
    List([[1, 2, 3]])
      .inspect()
      .should.eql('List [ [ 1, 2, 3 ] ]')
    // List with 1 element:
    List([42]).inspect().should.eql('List [ 42 ]')
    List([42]).tail().inspect().should.eql('Nothing')
    // Non-array input is treated as a single-element array:
    List(42).inspect().should.eql('List [ 42 ]')
    // List with 0 elements:
    const emptyList = List([])
    emptyList.inspect().should.eql('List [ ]')
    // Instance of the Crocks 'Maybe' ADT, with no value
    emptyList.head().inspect().should.eql('Nothing')
  })
})
