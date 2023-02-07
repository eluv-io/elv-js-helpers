// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const getPath = TH.requireSrcFile('Functional/getPath')

describe('getPath JSDoc example', () => {
  it('should execute correctly as described', () => {
    const myObject = {foo: {bar: [1, 2, 3]}}
    getPath(['foo'], myObject).should.eql({bar: [1, 2, 3]})
    TH.chai.assert.deepEqual(getPath(['bar'], myObject), undefined)
    getPath(['foo', 'bar', 0], myObject).should.eql(1)
    getPath(['foo', 'bar', -1], myObject).should.eql(3)
  })
})
