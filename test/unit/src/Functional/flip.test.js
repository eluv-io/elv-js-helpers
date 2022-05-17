// unit test for flip.js

const chai = require('chai')
chai.should()

const flip = require('../../../../src/Functional/flip')

describe('flip', () => {
  const div = (a, b) => a/b

  it('should work as expected', () => {
    div(4, 2)         .should.equal( 2)
    const reciprocalDiv = flip(div)
    reciprocalDiv(4, 2).should.equal( 0.5)
  })

  it('should be curried', () => {
    flip(div, 4, 2) .should.equal( 0.5)
  })
})
