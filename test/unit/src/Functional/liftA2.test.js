const TH = require('../../../test-helpers')
const liftA2 = TH.requireSrcFile('Functional/liftA2')

describe('liftA2', () => {

  const curry = TH.requireSrcFile('Functional/curry')
  const Err = TH.requireSrcFile('ADT/Err')
  const Ok = TH.requireSrcFile('ADT/Ok')
  const resultToPOJO = TH.requireSrcFile('Conversion/resultToPOJO')

  const mult = (a, b) => a * b
  const okObject = Ok(42)
  const errObject1 = Err('failed to obtain first input')
  const errObject2 = Err(['failed to obtain second input'])


  it('should work as expected', () => {
    mult(42, 42).should.equal(1764)
    const liftedMult = liftA2(curry(mult))
    const goodResult = liftedMult(okObject, okObject)
    resultToPOJO(goodResult).should.eql({ok: true, value: 1764})
    liftedMult(errObject1, okObject).inspect().should.equal('Err [ "failed to obtain first input" ]')
    liftedMult(okObject, errObject2).inspect().should.equal('Err [ "failed to obtain second input" ]')
    const badResult3 = liftedMult(errObject1, errObject2)
    badResult3.inspect().should.equal('Err [ "failed to obtain first input", "failed to obtain second input" ]')
    resultToPOJO(badResult3).should.eql(
      {
        ok: false,
        errMsgs: ['failed to obtain first input', 'failed to obtain second input'],
        errors: ['failed to obtain first input', 'failed to obtain second input']
      }
    )
  })

  it('should be curried', () => {
    liftA2(curry(mult), okObject, okObject).inspect().should.equal('Ok 1764')
  })
})
