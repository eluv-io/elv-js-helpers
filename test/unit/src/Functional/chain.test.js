const TH = require('../../../test-helpers')
const chain = TH.requireSrcFile('Functional/chain')

describe('chain', () => {

  const Err = TH.requireSrcFile('ADT/Err')
  const map = TH.requireSrcFile('Functional/map')
  const Ok = TH.requireSrcFile('ADT/Ok')

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
