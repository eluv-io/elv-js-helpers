// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const liftA3Join = TH.requireSrcFile('Functional/liftA3Join')

describe('liftA3Join JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const curry = TH.requireSrcFile('Functional/curry')
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    // define a function that accepts 'normal' types as inputs and returns a wrapped type (an ADT)
    const div3 = curry((x, y, z) => (y === 0 || z === 0 ? Err(['division by zero']) : Ok(x / y / z)))
    // convert into a function that accepts wrapped types as inputs instead (and still returns a wrapped type)
    const div3Wrapped = liftA3Join(div3)
    div3Wrapped(Ok(42), Ok(3), Ok(2)).inspect().should.eql('Ok 7')
    div3Wrapped(Ok(42), Ok(0), Ok(2)).inspect().should.eql('Err [ "division by zero" ]')
    div3Wrapped(Err(['failed to read x']), Ok(0), Ok(2))
      .inspect()
      .should.eql('Err [ "failed to read x" ]')
    div3Wrapped(Ok(42), Err(['failed to read y']), Ok(2))
      .inspect()
      .should.eql('Err [ "failed to read y" ]')
    div3Wrapped(Err(['failed to read x']), Err(['failed to read y']), Err(['failed to read z']))
      .inspect()
      .should.eql('Err [ "failed to read x", "failed to read y", "failed to read z" ]')
  })
})
