// unit test for Pair.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const Pair = require('../../../../src/ADT/Pair')

describe('Pair', () => {

  const p = Pair(1,2)

  it('should work as expected', () => {
    p.inspect().should.equal('Pair( 1, 2 )')
    p.fst().should.equal(1)
    p.snd().should.equal(2)
    expect(()=> Pair(42)).to.throw('Pair: Must provide a first and second value')
  })
})
