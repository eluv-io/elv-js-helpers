// unit test for chain.js

const chai = require('chai')
chai.should()

const chain = require('../../../../src/Functional/chain')

const Err = require('../../../../src/ADT/Err')
const Ok = require('../../../../src/ADT/Ok')

const map = require('../../../../src/Functional/map')

describe('chain', () => {
  const reciprocal = a => a === 0 ? Err(['division by zero']) : Ok(1 / a)
  const ok4 = Ok(4)
  const ok0 = Ok(0)
  const badNum = Err(['failed to read input'])

  it('should work as expected', () => {
    reciprocal(4).inspect().should.equal('Ok 0.25')
    reciprocal(0).inspect().should.equal('Err [ "division by zero" ]')
    reciprocal(ok4).inspect().should.equal('Ok NaN')
    chain(reciprocal, ok4).inspect().should.equal('Ok 0.25')
    chain(reciprocal, ok0).inspect().should.equal('Err [ "division by zero" ]')
    chain(reciprocal, badNum).inspect().should.equal('Err [ "failed to read input" ]')
    map(reciprocal, ok4).inspect().should.equal('Ok Ok 0.25')
  })

  it('should be curried', () => {
    const wrappedReciprocal = chain(reciprocal)
    wrappedReciprocal(ok4).inspect().should.equal('Ok 0.25')
  })
})
