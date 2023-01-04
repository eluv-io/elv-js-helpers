// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const chain = TH.requireSrcFile('Functional/chain')

describe('chain JSDoc example', () => {
  it('should execute correctly as described', () => {
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    const map = TH.requireSrcFile('Functional/map')
    // function has only one input, not need to curry
    const reciprocal = a => (a === 0 ? Err(['division by zero']) : Ok(1 / a))
    const ok4 = Ok(4)
    const ok0 = Ok(0)
    const badNum = Err(['failed to read input'])
    reciprocal(4).inspect().should.eql('Ok 0.25')
    reciprocal(0).inspect().should.eql('Err [ "division by zero" ]')
    // passing in a wrapped value results in NaN (reciprocal does not know to unwrap value before use)
    reciprocal(ok4).inspect().should.eql('Ok NaN')
    // chain() asks input wrapper to remove wrapping and pass value to function, then does not re-wrap the (wrapped) return value
    chain(reciprocal, ok4).inspect().should.eql('Ok 0.25')
    // reciprocal gets value 0 and returns Err
    chain(reciprocal, ok0).inspect().should.eql('Err [ "division by zero" ]')
    // badNum ignores request to apply reciprocal()
    chain(reciprocal, badNum).inspect().should.eql('Err [ "failed to read input" ]')
    // compare to map - (which does not specify that result should not be re-wrapped)
    // return value is wrapped twice, once by reciprocal and once by ok4
    map(reciprocal, ok4).inspect().should.eql('Ok Ok 0.25')
    // chain is curried, it is possible to call with only the first argument to return a new function
    const wrappedReciprocal = chain(reciprocal)
    wrappedReciprocal(ok4).inspect().should.eql('Ok 0.25')
  })
})
