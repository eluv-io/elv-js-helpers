// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const init = TH.requireSrcFile('Functional/init')

describe('init JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    init([1, 2, 3, 4, 5]).should.eql([1, 2, 3, 4])
    init([1]).should.eql([])
    init([]).should.eql([])
    init('abc').should.eql('ab')
    init('a').should.eql('')
    init('').should.eql('')
    // NOTE: bad data types are ignored
    init(0).should.eql([])
    init({foo: 'bar'}).should.eql([])
    // undefined will produce an exception
    TH.expect(() => init(undefined)).to.throw('Cannot read properties of undefined')
  })
})
