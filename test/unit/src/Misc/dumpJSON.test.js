const TH = require('../../../test-helpers')
const dumpJSON = TH.requireSrcFile('Misc/dumpJSON')

describe('dumpJSON', () => {
  it('should work as expected for strings', () => {
    TH.sinon.spy(console, 'log')
    dumpJSON('A')
    TH.expect(console.log.calledOnce).to.be.true
    TH.expect(console.log.calledWith('"A"')).to.be.true
    TH.sinon.restore()
  })

  it('should work as expected for numbers', () => {
    TH.sinon.spy(console, 'log')
    dumpJSON(42)
    TH.expect(console.log.calledOnce).to.be.true
    TH.expect(console.log.calledWith('42')).to.be.true
    TH.sinon.restore()
  })

  it('should work as expected for undefined', () => {
    TH.sinon.spy(console, 'log')
    dumpJSON(undefined)
    TH.expect(console.log.calledOnce).to.be.true
    // JSON.stringify returns an actual undefined value, not a string
    TH.expect(console.log.calledWith(undefined)).to.be.true
    TH.sinon.restore()
  })

  it('should work as expected for arrays', () => {
    TH.sinon.spy(console, 'log')
    dumpJSON([1, 2, 3])
    TH.expect(console.log.calledOnce).to.be.true
    TH.expect(
      console.log.calledWith(
        `[
  1,
  2,
  3
]`
      )
    ).to.be.true
    TH.sinon.restore()
  })

  it('should work as expected for objects', () => {
    TH.sinon.spy(console, 'log')
    dumpJSON({foo: 'bar'})
    TH.expect(console.log.calledOnce).to.be.true
    TH.expect(
      console.log.calledWith(
        `{
  "foo": "bar"
}`
      )
    ).to.be.true
    TH.sinon.restore()
  })

  it('should work as expected for functions', () =>  {
    TH.sinon.spy(console, 'log')
    dumpJSON(dumpJSON)
    TH.expect(console.log.calledOnce).to.be.true
    // JSON.stringify returns an actual undefined value, not a string
    TH.expect(console.log.calledWith(undefined)).to.be.true
    TH.sinon.restore()
  })
})
