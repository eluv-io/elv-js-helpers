// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const flatten = TH.requireSrcFile('Functional/flatten')

describe('flatten JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    flatten([1, [2, [3]]]).should.eql([1, 2, 3])
    flatten('abc').should.eql(['a', 'b', 'c'])
  })
})
