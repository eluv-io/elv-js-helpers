// unit test for hasNoDuplicates.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const hasNoDuplicates = require('../../../../src/Boolean/hasNoDuplicates')

describe('hasNoDuplicates', () => {

  it('should work as described in JSDoc', () => {
    hasNoDuplicates([]).should.equal(true)

    hasNoDuplicates([1, 2, 3]).should.equal(true)

    hasNoDuplicates([1, 2, 2]).should.equal(false)

    hasNoDuplicates([[1, 2], [1, 2]]).should.equal(false)

    hasNoDuplicates([[1, 2], [2, 1]]).should.equal(true)

    hasNoDuplicates([[1, 1], [2, 2]]).should.equal(true)

    hasNoDuplicates([{a: 1, b: 2}, {b: 2, a: 1}]).should.equal(false)

    expect(() => hasNoDuplicates('foo')).to.throw('hasNoDuplicates() - expecting Array, got: String')

  })

})
