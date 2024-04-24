// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const getProp = TH.requireSrcFile('Functional/getProp')

describe('getProp JSDoc example', () => {
  it('should execute correctly as described', () => {
    const myObject = {foo: {bar: [1, 2, 3]}}
    getProp('foo', myObject).should.eql({bar: [1, 2, 3]})
    TH.chai.assert.deepEqual(getProp('bar', myObject), undefined)
    const myArray = [0, 1, 2]
    getProp(0, myArray).should.eql(0)
    getProp(-1, myArray).should.eql(2)
  })
})
