// unit test for fromPairs.js

const chai = require('chai')
chai.should()


const fromPairs = require('../../../../src/Conversion/fromPairs')

const List = require('../../../../src/ADT/List')
const Pair = require('../../../../src/ADT/Pair')

describe('fromPairs', () => {

  it('should work as expected', () => {
    const kvPairs = List([Pair('a', 1), Pair('b', 2)])
    fromPairs(kvPairs).should.eql({a: 1, b: 2})
  })
})
