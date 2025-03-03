// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const liftA2Join = TH.requireSrcFile('Functional/liftA2Join')

describe('liftA2Join JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const curry = TH.requireSrcFile('Functional/curry')
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    // define a function that accepts 'normal' types as inputs and returns a wrapped type (an ADT)
    const div = curry((x, y) => (y === 0 ? Err(['division by zero']) : Ok(x / y)))
    // convert into a function that accepts wrapped types as inputs instead (and still returns a wrapped type)
    const divWrapped = liftA2Join(div)
    divWrapped(Ok(42), Ok(2)).inspect().should.eql('Ok 21')
    divWrapped(Ok(42), Ok(0)).inspect().should.eql('Err [ "division by zero" ]')
    divWrapped(Err(['failed to read x']), Ok(0))
      .inspect()
      .should.eql('Err [ "failed to read x" ]')
    divWrapped(Ok(42), Err(['failed to read y']))
      .inspect()
      .should.eql('Err [ "failed to read y" ]')
    divWrapped(Err(['failed to read x']), Err(['failed to read y']))
      .inspect()
      .should.eql('Err [ "failed to read x", "failed to read y" ]')
  })
})
