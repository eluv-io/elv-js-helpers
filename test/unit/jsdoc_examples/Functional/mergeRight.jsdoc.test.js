// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const mergeRight = TH.requireSrcFile('Functional/mergeRight')

describe('mergeRight JSDoc example', () => {
  it('should execute correctly as described', () => {
    const defaults = {
      children: ['DefaultChild1', 'DefaultChild2'],
      name: 'Anonymous',
    }
    const moreData = {
      age: 35,
      children: ['Charlie'],
    }
    mergeRight(defaults, moreData).should.eql({age: 35, children: ['Charlie'], name: 'Anonymous'})
    // function is curried: can call with fewer params to obtain a more specific function:
    const ensureNameAndChildren = mergeRight(defaults)
    ensureNameAndChildren({}).should.eql({children: ['DefaultChild1', 'DefaultChild2'], name: 'Anonymous'})
  })
})
