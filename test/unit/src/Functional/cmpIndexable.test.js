// unit test for cmpIndexable.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const cmpIndexable = require('../../../../src/Functional/cmpIndexable')

describe('cmpIndexable', () => {
  it('should work as expected', () => {
    cmpIndexable([], [42]).should.equal(-1)
    cmpIndexable([42], []).should.equal(1)
    cmpIndexable([42], [42]).should.equal(0)
    cmpIndexable([42, 1], [42]).should.equal(1)
    expect(() => cmpIndexable(2, 1)).to.throw('cmpIndexable: first argument does not have a length')
    cmpIndexable('abc', 'ab')
    expect(() => cmpIndexable(null, undefined)).to.throw('Cannot read properties of null (reading \'length\')')
    expect(() => cmpIndexable([42], ['a'])).to.throw('cmpIndexable: elements at index 0 are not comparable')
  })
})
