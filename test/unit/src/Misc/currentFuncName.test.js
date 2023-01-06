const TH = require('../../../test-helpers')
const currentFuncName = TH.requireSrcFile('Misc/currentFuncName')

describe('currentFuncName', () => {
  it('should have a correct example in JSDoc', function () {
    const MyFunc = () => console.log('Entered function: ' + currentFuncName())

    TH.sinon.stub(console, 'log')
    MyFunc()
    TH.expect(console.log.calledWith('Entered function: MyFunc')).to.be.true
    TH.sinon.restore()
  })

  // it('should... ', function() {
  //
  // })
})
