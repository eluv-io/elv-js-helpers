// unit test for mapWithIndex.js

const chai = require('chai')
chai.should()


const mapWithIndex = require('../../../../src/Functional/mapWithIndex')

describe('mapWithIndex', () => {
  it('should work as expected', () => {
    mapWithIndex(
      (e, i) => `${e}-${i}`,
      ['a', 'b', 'c']
    ).should.eql(
      ['a-0', 'b-1', 'c-2']
    )
  })

  it('should be curried', () => {
    const addIndexSuffix = mapWithIndex((e, i) => `${e}-${i}`)
    addIndexSuffix(['a', 'b', 'c']).should.eql(
      ['a-0', 'b-1', 'c-2']
    )
  })
})
