// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const callerFuncName = TH.requireSrcFile('Misc/callerFuncName')

describe('callerFuncName JSDoc example', () => {
  it('should execute correctly as described', () => {
    const currentFuncName = TH.requireSrcFile('Misc/currentFuncName')
    const MyFunc = () => console.log('Function: ' + currentFuncName() + ' was called by: ' + callerFuncName())
    const OuterFunc = () => MyFunc()

    TH.sinon.stub(console, 'log')
    OuterFunc()
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], 'Function: MyFunc was called by: OuterFunc')
    } finally {
      TH.sinon.restore()
    }
  })
})
