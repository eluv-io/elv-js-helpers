const TH = require('../../../test-helpers')
const callerFuncName = TH.requireSrcFile('Misc/callerFuncName')

describe('callerFuncName', () => {
  it('should have a correct example in JSDoc', function () {
    const currentFuncName = TH.requireSrcFile('Misc/currentFuncName')
    const MyFunc = () => console.log('Function: ' + currentFuncName() + ' was called by: ' + callerFuncName())
    const OuterFunc = () => MyFunc()

    TH.sinon.stub(console, 'log')
    OuterFunc()
    TH.expect(console.log.calledWith('Function: MyFunc was called by: OuterFunc')).to.be.true
    TH.sinon.restore()
  })

  // it('should... ', function() {
  //
  // })
})
