// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const head = TH.requireSrcFile('Functional/head')

describe('head JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    head([1, 2, 3, 4, 5]).should.eql(1)
    head([1]).should.eql(1)
    TH.chai.assert.deepEqual(head([]), undefined)
    head('abc').should.eql('a')
    head('a').should.eql('a')
    head('').should.eql('')
    // NOTE: bad data types are ignored
    TH.chai.assert.deepEqual(head(0), undefined)
    TH.chai.assert.deepEqual(head({foo: 'bar'}), undefined)
    // undefined will produce an exception
    TH.expect(() => head(undefined)).to.throw('Cannot read properties of undefined')
  })
})
