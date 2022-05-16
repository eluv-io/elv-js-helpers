// unit test for toPairs.js

const chai = require('chai')
chai.should()

const toPairs = require('../../../../src/Conversion/toPairs')

describe('toPairs', () => {

  it('should work as expected', () => {
    toPairs({a:1, b:2}).inspect().should.equal('List [ Pair( "a", 1 ), Pair( "b", 2 ) ]')
  })
})
