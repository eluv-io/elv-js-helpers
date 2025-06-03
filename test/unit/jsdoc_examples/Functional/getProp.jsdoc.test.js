// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const getProp = TH.requireSrcFile('Functional/getProp')

describe('getProp JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const myObject = {foo: {bar: [1, 2, 3]}}
    getProp('foo', myObject).should.eql({bar: [1, 2, 3]})
    TH.chai.assert.deepEqual(getProp('bar', myObject), undefined)
    const myArray = [0, 1, 2]
    getProp(0, myArray).should.eql(0)
    getProp(-1, myArray).should.eql(2)
    // function is curried, call with fewer arguments to obtain a more specific function
    const getFoo = getProp('foo')
    getFoo(myObject).should.eql({bar: [1, 2, 3]})
    const getFirst = getProp(0)
    getFirst(myArray).should.eql(0)
  })
})
