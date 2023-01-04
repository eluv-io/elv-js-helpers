const TH = require('../../../test-helpers')
const liftA3Join = TH.requireSrcFile('Functional/liftA3Join')

describe('liftA3Join', () => {

  const curry = TH.requireSrcFile('Functional/curry')
  const Err = TH.requireSrcFile('ADT/Err')
  const Ok = TH.requireSrcFile('ADT/Ok')

  const div3 = curry(
    (x, y, z) => y === 0 || z === 0 ?
      Err(['division by zero']) :
      Ok(x / y / z)
  )

  it('should work as expected', () => {
    const div3Wrapped = liftA3Join(div3)
    div3Wrapped(
      Ok(42),
      Ok(3),
      Ok(2)
    ).inspect().should.equal('Ok 7')

    div3Wrapped(
      Ok(42),
      Ok(0),
      Ok(2)
    ).inspect().should.equal('Err [ "division by zero" ]')

    div3Wrapped(
      Err(['failed to read x']),
      Ok(0),
      Ok(2)
    ).inspect().should.equal('Err [ "failed to read x" ]')

    div3Wrapped(
      Ok(42),
      Err(['failed to read y']),
      Ok(2)
    ).inspect().should.equal('Err [ "failed to read y" ]')

    div3Wrapped(
      Err(['failed to read x']),
      Err(['failed to read y']),
      Err(['failed to read z'])
    ).inspect().should.equal('Err [ "failed to read x", "failed to read y", "failed to read z" ]')
  })
})
