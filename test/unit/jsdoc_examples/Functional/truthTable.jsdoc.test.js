// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const truthTable = TH.requireSrcFile('Functional/truthTable')

describe('truthTable JSDoc example', () => {
  it('should execute correctly as described', () => {
    // Given the following table:
    // | isChild | isMale | result  |
    // |---------|--------|---------|
    // |    F    |    F   | 'woman' |
    // |    F    |    T   |  'man'  |
    // |    T    |    F   |  'girl' |
    // |    T    |    T   |  'boy'  |
    'use strict'
    let isChild = false
    let isMale = false
    truthTable(['woman', 'man', 'girl', 'boy'], [isChild, isMale]).should.eql('woman')
    // For comparison - expressed using if/then
    if (isChild) {
      if (isMale) {
        return 'boy'
      } else {
        return 'girl'
      }
    } else {
      if (isMale) {
        return 'man'
      } else {
        return 'woman'
      }
    }
  })
})
