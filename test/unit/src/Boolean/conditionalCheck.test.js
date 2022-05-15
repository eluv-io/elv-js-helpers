const chai = require('chai')
chai.should()

const isString = require('../../../../src/Boolean/isString')

const conditionalCheck = require('../../../../src/Boolean/conditionalCheck')

const stringStartsWithF = conditionalCheck(isString, x => x.startsWith('f'))

describe('conditionalCheck', () => {
  it('should return true for input disqualified by precheck', () => {
    stringStartsWithF(1).should.be.true
  })

  it('should return true for passing qualified input', () => {
    stringStartsWithF('foo').should.be.true
  })

  it('should return false for non-passing qualified input', () => {
    stringStartsWithF('bar').should.be.false
  })
})
