// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const dumpJSON = TH.requireSrcFile('Misc/dumpJSON')

describe('dumpJSON JSDoc example', () => {
  it('should execute correctly as described', () => {
    TH.sinon.stub(console, 'log')
    dumpJSON('A')
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], '"A"')
    } finally {
      TH.sinon.restore()
    }

    TH.sinon.stub(console, 'log')
    dumpJSON(42)
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], '42')
    } finally {
      TH.sinon.restore()
    }

    TH.sinon.stub(console, 'log')
    dumpJSON(undefined)
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], undefined)
    } finally {
      TH.sinon.restore()
    }

    TH.sinon.stub(console, 'log')
    dumpJSON([1, 2, 3])
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], `[\n  1,\n  2,\n  3\n]`)
    } finally {
      TH.sinon.restore()
    }

    TH.sinon.stub(console, 'log')
    dumpJSON({foo: 'bar'})
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], `{\n  "foo": "bar"\n}`)
    } finally {
      TH.sinon.restore()
    }

    TH.sinon.stub(console, 'log')
    dumpJSON(dumpJSON)
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], undefined)
    } finally {
      TH.sinon.restore()
    }
  })
})
