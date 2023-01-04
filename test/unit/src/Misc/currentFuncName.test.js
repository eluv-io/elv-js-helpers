const TH = require('../../../test-helpers')
const currentFuncName = TH.requireSrcFile('Misc/currentFuncName')

describe('currentFuncName', () => {
  it('should work as expected', () => {
    const MyFunc = () => console.log('Entered function: ' + currentFuncName())

    TH.sinon.stub(console, 'log')
    MyFunc()
    try {
      TH.expect(console.log.calledWith('Entered function: MyFunc')).to.be.true
    } finally {
      TH.sinon.restore()
    }
  })
})
