// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const currentFuncName = TH.requireSrcFile('Misc/currentFuncName')

describe('currentFuncName JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const MyFunc = () => console.log('Entered function: ' + currentFuncName())

    TH.sinon.stub(console, 'log')
    MyFunc()
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], 'Entered function: MyFunc')
    } finally {
      TH.sinon.restore()
    }
  })
})
