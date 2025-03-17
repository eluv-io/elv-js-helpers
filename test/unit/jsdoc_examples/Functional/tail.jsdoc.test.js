// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const tail = TH.requireSrcFile('Functional/tail')

describe('tail JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    tail([1, 2, 3, 4, 5]).should.eql([2, 3, 4, 5])
    tail([1]).should.eql([])
    tail([]).should.eql([])
    tail('abc').should.eql('bc')
    tail('a').should.eql('')
    tail('').should.eql('')
    // NOTE: bad data types are ignored
    tail(0).should.eql([])
    tail({foo: 'bar'}).should.eql([])
    // undefined will produce an exception
    TH.expect(() => tail(undefined)).to.throw('Cannot read properties of undefined')
  })
})
