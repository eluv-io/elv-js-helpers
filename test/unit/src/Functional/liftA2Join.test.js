const TH = require('../../../test-helpers')
const liftA2Join = TH.requireSrcFile('Functional/liftA2Join')

const Err = TH.requireSrcFile('ADT/Err')
const Ok = TH.requireSrcFile('ADT/Ok')

const curry = TH.requireSrcFile('Functional/curry')

const div = curry(
  (x, y) => y === 0 ?
    Err(['division by zero']) :
    Ok(x / y)
)

describe('liftA2Join', () => {
  it('should work as expected', () => {
    const divWrapped = liftA2Join(div)
    divWrapped(
      Ok(42),
      Ok(2)
    ).inspect().should.equal('Ok 21')

    divWrapped(
      Ok(42),
      Ok(0)
    ).inspect().should.equal('Err [ "division by zero" ]')

    divWrapped(
      Err(['failed to read x']),
      Ok(0)
    ).inspect().should.equal('Err [ "failed to read x" ]')

    divWrapped(
      Ok(42),
      Err(['failed to read y'])
    ).inspect().should.equal('Err [ "failed to read y" ]')

    divWrapped(
      Err(['failed to read x']),
      Err(['failed to read y'])
    ).inspect().should.equal('Err [ "failed to read x", "failed to read y" ]')
  })
})
