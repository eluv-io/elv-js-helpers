// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const last = TH.requireSrcFile('Functional/last')

describe('last JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    last([1, 2, 3, 4, 5]).should.eql(5)
    last([1]).should.eql(1)
    TH.chai.assert.deepEqual(last([]), undefined)
    last('abc').should.eql('c')
    last('a').should.eql('a')
    last('').should.eql('')
    // NOTE: bad data types are ignored
    TH.chai.assert.deepEqual(last(0), undefined)
    TH.chai.assert.deepEqual(last({foo: 'bar'}), undefined)
    // undefined will produce an exception
    TH.expect(() => last(undefined)).to.throw('Cannot read properties of undefined')
  })
})
