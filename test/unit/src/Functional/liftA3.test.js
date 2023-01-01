const TH = require('../../../test-helpers')
const liftA3 = TH.requireSrcFile('Functional/liftA3')

const Err = TH.requireSrcFile('ADT/Err')
const Ok = TH.requireSrcFile('ADT/Ok')

const resultToPOJO = TH.requireSrcFile('Conversion/resultToPOJO')

const curry = TH.requireSrcFile('Functional/curry')

describe('liftA3', () => {

  const mult3 = (a, b, c) => a * b * c
  const okObject = Ok(42)
  const errObject1 = Err('failed to obtain first input')
  const errObject2 = Err(['failed to obtain second input'])

  it('should work as expected', () => {
    mult3(42, 42, 42).should.equal(74088)
    const liftedMult3 = liftA3(curry(mult3))
    const goodResult = liftedMult3(okObject, okObject, okObject)
    goodResult.inspect().should.equal('Ok 74088')
    resultToPOJO(goodResult).should.eql({ok: true, value: 74088})
    liftedMult3(errObject1, okObject, okObject)   //=> Err ['failed to obtain first input']
    liftedMult3(okObject, errObject2, okObject)   //=> Err ['failed to obtain second input']
    const badResult3 = liftedMult3(errObject1, errObject2, okObject)
    badResult3.inspect().should.equal('Err [ "failed to obtain first input", "failed to obtain second input" ]')
    resultToPOJO(badResult3).should.eql(
      {
        ok: false,
        errors: ['failed to obtain first input', 'failed to obtain second input'],
        errorDetails: ['failed to obtain first input', 'failed to obtain second input']
      }
    )
  })

  it('should be curried', () => {
    liftA3(curry(mult3), okObject, okObject, okObject).inspect().should.equal('Ok 74088')
  })
})
