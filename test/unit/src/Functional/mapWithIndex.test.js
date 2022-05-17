// unit test for mapWithIndex.js

const chai = require('chai')
chai.should()

const equals = require('ramda/src/equals')

const mapWithIndex = require('../../../../src/Functional/mapWithIndex')

describe('mapWithIndex', () => {


  it('should work as expected', () => {
    equals(
      mapWithIndex(
        (e, i) => `${e}-${i}`,
        ['a', 'b', 'c']
      ),
      ['a-0', 'b-1', 'c-2']
    ).should.be.true
  })

  it('should be curried', () => {
    const addIndexSuffix = mapWithIndex((e, i) => `${e}-${i}`)
    equals(
      addIndexSuffix(['a', 'b', 'c']),
      ['a-0', 'b-1', 'c-2']
    ).should.be.true
  })
})
