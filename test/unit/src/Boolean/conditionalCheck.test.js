const TH = require('../../../test-helpers')
const conditionalCheck = TH.requireSrcFile('Boolean/conditionalCheck')

const isString = TH.requireSrcFile('Boolean/isString')

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
