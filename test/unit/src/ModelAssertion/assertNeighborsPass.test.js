// unit test for assertNeighborsPass.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const assertNeighborsPass = require('../../../../src/ModelAssertion/assertNeighborsPass')

describe('assertNeighborsPass', () => {
  it('should work as expected', () => {
    const defBasicModel = require('../../../../src/ModelFactory/defBasicModel')
    const kind = require('../../../../src/Validation/kind')

    // Note use of spread operator (...) to unpack the array returned by assertNeighborsPass()
    const ArrayAllSameKindModel = defBasicModel('ArrayAllSameKindModel', Array).extend()
      .assert(
        ...assertNeighborsPass(
          (x, y) => kind(x) === kind(y),
          'elements are not all of the same kind'
        )
      )

    ArrayAllSameKindModel([1, 2, 3]).should.eql([1, 2, 3])
    ArrayAllSameKindModel([]).should.eql([])
    expect(() => ArrayAllSameKindModel([42, 'a'])).to.throw('Value elements are not all of the same kind (got: [42,"a"])')
    expect(() => ArrayAllSameKindModel('foo')).to.throw('expecting Array, got String "foo"')
  })
})
