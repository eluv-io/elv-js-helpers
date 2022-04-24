const chai = require('chai')
chai.should()
const expect = chai.expect

const throwError = require('../../../src/throwError')

describe('throwError', () => {

  it('should throw an exception with the message passed in', () => {
    expect(() => throwError('foo')).to.throw('foo')
  })

})
