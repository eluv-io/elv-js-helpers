const TH = require('../../../test-helpers')
const dumpJSON = TH.requireSrcFile('Misc/dumpJSON')

describe('dumpJSON', () => {
  it('should work as expected for strings', () => {
    TH.sinon.spy(console, 'log')
    dumpJSON('A')
    try {
      TH.expect(console.log.calledOnce).to.be.true
      TH.expect(console.log.calledWith('"A"')).to.be.true
    } finally {
      TH.sinon.restore()
    }
  })

  it('should work as expected for numbers', () => {
    TH.sinon.spy(console, 'log')
    dumpJSON(42)
    try {
      TH.expect(console.log.calledOnce).to.be.true
      TH.expect(console.log.calledWith('42')).to.be.true
    } finally {
      TH.sinon.restore()
    }
  })

  it('should work as expected for undefined', () => {
    TH.sinon.spy(console, 'log')
    dumpJSON(undefined)
    try {
      TH.expect(console.log.calledOnce).to.be.true
      // JSON.stringify returns an actual undefined value, not a string
      TH.expect(console.log.calledWith(undefined)).to.be.true
    } finally {
      TH.sinon.restore()
    }
  })

  it('should work as expected for arrays', () => {
    TH.sinon.spy(console, 'log')
    dumpJSON([1, 2, 3])
    try {
      TH.expect(console.log.calledOnce).to.be.true
      TH.expect(console.log.calledWith(
        `[
  1,
  2,
  3
]`
      )).to.be.true
    } finally {
      TH.sinon.restore()
    }
  })

  it('should work as expected for objects', () => {
    TH.sinon.spy(console, 'log')
    dumpJSON({foo: 'bar'})
    try {
      TH.expect(console.log.calledOnce).to.be.true
      TH.expect(console.log.calledWith(
        `{
  "foo": "bar"
}`
      )).to.be.true
    } finally {
      TH.sinon.restore()
    }
  })


  it('should work as expected for functions', () => {
    TH.sinon.spy(console, 'log')
    dumpJSON(dumpJSON)
    try {
      TH.expect(console.log.calledOnce).to.be.true
      // JSON.stringify returns an actual undefined value, not a string
      TH.expect(console.log.calledWith(undefined)).to.be.true
    } finally {
      TH.sinon.restore()
    }
  })
})
