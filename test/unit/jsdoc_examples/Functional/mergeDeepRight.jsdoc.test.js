// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const mergeDeepRight = TH.requireSrcFile('Functional/mergeDeepRight')

describe('mergeDeepRight JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const defaults = {
      children: ['DefaultChild1', 'DefaultChild2'],
      name: 'Anonymous',
      preferences: {
        drink: 'water',
        music: 'rock',
      },
    }
    const moreData = {
      age: 35,
      children: ['Charlie'],
      preferences: {
        drink: 'beer',
        movies: 'comedy',
      },
    }
    mergeDeepRight(defaults, moreData).should.eql({
      age: 35,
      children: ['Charlie'],
      name: 'Anonymous',
      preferences: {drink: 'beer', movies: 'comedy', music: 'rock'},
    })
    // function is curried: can call with fewer params to obtain a more specific function:
    const ensureNameAndChildren = mergeDeepRight(defaults)
    ensureNameAndChildren({}).should.eql({
      children: ['DefaultChild1', 'DefaultChild2'],
      name: 'Anonymous',
      preferences: {drink: 'water', music: 'rock'},
    })
  })
})
