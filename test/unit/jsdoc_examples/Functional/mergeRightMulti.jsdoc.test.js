// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const mergeRightMulti = TH.requireSrcFile('Functional/mergeRightMulti')

describe('mergeRightMulti JSDoc example', () => {
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
    const evenMoreData = {
      age: 35,
      preferences: {
        movies: 'horror',
      },
    }
    mergeRightMulti([defaults, moreData, evenMoreData]).should.eql({
      age: 35,
      children: ['Charlie'],
      name: 'Anonymous',
      preferences: {movies: 'horror'},
    })
    mergeRightMulti([defaults]).should.eql({
      children: ['DefaultChild1', 'DefaultChild2'],
      name: 'Anonymous',
      preferences: {drink: 'water', music: 'rock'},
    })
    mergeRightMulti([]).should.eql({})
  })
})
