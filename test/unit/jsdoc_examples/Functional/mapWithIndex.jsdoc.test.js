// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const mapWithIndex = TH.requireSrcFile('Functional/mapWithIndex')

describe('mapWithIndex JSDoc example', () => {
  it('should execute correctly as described', () => {
    mapWithIndex((e, i) => `${e}-${i}`, ['a', 'b', 'c']).should.eql(['a-0', 'b-1', 'c-2'])
    // function is curried: call with just 1 arg to obtain a narrower function
    const addIndexSuffix = mapWithIndex((e, i) => `${e}-${i}`)
    addIndexSuffix(['a', 'b', 'c']).should.eql(['a-0', 'b-1', 'c-2'])
  })
})
