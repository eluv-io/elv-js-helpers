const TH = require('../../../test-helpers')
const callerFuncName = TH.requireSrcFile('Misc/callerFuncName')

describe('callerFuncName', () => {
  it('should work as expected', () => {
    const currentFuncName = TH.requireSrcFile('Misc/currentFuncName')
    const MyFunc = () => console.log('Function: ' + currentFuncName() + ' was called by: ' + callerFuncName())
    const OuterFunc = () => MyFunc()

    TH.sinon.stub(console, 'log')
    OuterFunc()
    try {
      TH.expect(console.log.calledWith('Function: MyFunc was called by: OuterFunc')).to.be.true
    } finally {
      TH.sinon.restore()
    }
  })
})
