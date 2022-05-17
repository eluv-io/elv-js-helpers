// unit test for dumpJSON.js

const chai = require('chai')
chai.should()
const expect = chai.expect

chai.use(require('sinon-chai'))
require('mocha-sinon')

const dumpJSON = require('../../../../src/Misc/dumpJSON')
dumpJSON(undefined)
describe('dumpJSON', () => {
  beforeEach(function () {
    this.sinon.spy(console, 'log')
  })

  it('should work as expected for strings', () => {
    dumpJSON('A')
    expect(console.log.calledOnce).to.be.true
    expect(console.log.calledWith('"A"')).to.be.true
  })

  it('should work as expected for numbers', () => {
    dumpJSON(42)
    expect(console.log.calledOnce).to.be.true
    expect(console.log.calledWith('42')).to.be.true
  })

  it('should work as expected for undefined', () => {
    dumpJSON(undefined)
    expect(console.log.calledOnce).to.be.true
    // JSON.stringify returns an actual undefined value, not a string
    expect(console.log.calledWith(undefined)).to.be.true
  })

  it('should work as expected for arrays', () => {
    dumpJSON([1, 2, 3])
    expect(console.log.calledOnce).to.be.true
    expect(console.log.calledWith(
      `[
  1,
  2,
  3
]`
    )).to.be.true
  })

  it('should work as expected for objects', () => {
    dumpJSON({foo: 'bar'})
    expect(console.log.calledOnce).to.be.true
    expect(console.log.calledWith(
      `{
  "foo": "bar"
}`
    )).to.be.true
  })


  it('should work as expected for functions', () => {
    dumpJSON(dumpJSON)
    expect(console.log.calledOnce).to.be.true
    // JSON.stringify returns an actual undefined value, not a string
    expect(console.log.calledWith(undefined)).to.be.true
  })
})
