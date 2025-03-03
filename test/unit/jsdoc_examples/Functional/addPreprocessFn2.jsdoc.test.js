// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const addPreprocessFn2 = TH.requireSrcFile('Functional/addPreprocessFn2')

describe('addPreprocessFn2 JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const isString = TH.requireSrcFile('Boolean/isString')
    const strOrNumToNum = x => (isString(x) ? Number(x) : x)
    const add = (x, y) => x + y
    const lenientAdd = addPreprocessFn2(strOrNumToNum, add)
    lenientAdd(42, 1).should.eql(43)
    lenientAdd('42', 1).should.eql(43)
    lenientAdd(42, '1').should.eql(43)
    lenientAdd('42', '1').should.eql(43)
    // function is curried: call with 1 argument to obtain a function that will add the given preprocessor to other functions
    const allowStringNumInputs = addPreprocessFn2(strOrNumToNum)
    const mult = (x, y) => x * y
    const lenientMult = allowStringNumInputs(mult)
    lenientMult(42, '42').should.eql(1764)
    // call with 3 arguments to obtain a 1-input function that will preprocess its input
    const lenientMult42 = addPreprocessFn2(strOrNumToNum, mult, '42')
    lenientMult42('42').should.eql(1764)
    // call with 4 arguments to obtain final value instead of a function
    const x = 42
    const y = '42'
    addPreprocessFn2(strOrNumToNum, add, x, y).should.eql(84)
  })
})
