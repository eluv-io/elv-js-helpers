const TH = require('../../../test-helpers')
const dumpJSON = TH.requireSrcFile('Misc/dumpJSON')

describe('dumpJSON', () => {
  it('should work as expected for strings', function () {
    this.sinon.spy(console, 'log')
    dumpJSON('A')
    TH.expect(console.log.calledOnce).to.be.true
    TH.expect(console.log.calledWith('"A"')).to.be.true
  })

  it('should work as expected for numbers', function () {
    this.sinon.spy(console, 'log')
    dumpJSON(42)
    TH.expect(console.log.calledOnce).to.be.true
    TH.expect(console.log.calledWith('42')).to.be.true
  })

  it('should work as expected for undefined', function () {
    this.sinon.spy(console, 'log')
    dumpJSON(undefined)
    TH.expect(console.log.calledOnce).to.be.true
    // JSON.stringify returns an actual undefined value, not a string
    TH.expect(console.log.calledWith(undefined)).to.be.true
  })

  it('should work as expected for arrays', function () {
    this.sinon.spy(console, 'log')
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
  })

  it('should work as expected for objects', function () {
    this.sinon.spy(console, 'log')
    dumpJSON({foo: 'bar'})
    TH.expect(console.log.calledOnce).to.be.true
    TH.expect(
      console.log.calledWith(
        `{
  "foo": "bar"
}`
      )
    ).to.be.true
  })

  it('should work as expected for functions', function () {
    this.sinon.spy(console, 'log')
    dumpJSON(dumpJSON)
    TH.expect(console.log.calledOnce).to.be.true
    // JSON.stringify returns an actual undefined value, not a string
    TH.expect(console.log.calledWith(undefined)).to.be.true
  })
})
