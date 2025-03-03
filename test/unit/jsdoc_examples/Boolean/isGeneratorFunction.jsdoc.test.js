// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const isGeneratorFunction = TH.requireSrcFile('Boolean/isGeneratorFunction')

describe('isGeneratorFunction JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    function* numbersUpTo(x) {
      for (let i = 0; i < x; i++) {
        yield i
      }
    }
    isGeneratorFunction(numbersUpTo).should.eql(true)
    isGeneratorFunction(Math.round).should.eql(false)
    isGeneratorFunction(undefined).should.eql(false)
  })
})
