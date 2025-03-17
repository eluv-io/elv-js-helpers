// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const reduce = TH.requireSrcFile('Functional/reduce')

describe('reduce JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const arrOfInt = [1, 2, 3, 4, 5]
    const add = (a, b) => a + b
    const mult = (a, b) => a * b
    reduce(add, 0, arrOfInt).should.eql(15)
    reduce(mult, 1, arrOfInt).should.eql(120)
    // note that choosing proper initial value for accumulator is important!
    reduce(mult, 0, arrOfInt).should.eql(0)
    const append = (a, b) => a.concat([b])
    reduce(append, [], arrOfInt).should.eql([1, 2, 3, 4, 5])
  })
})
