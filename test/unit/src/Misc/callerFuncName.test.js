// unit test for callerFuncName.js

const chai = require('chai')
chai.should()
const expect = chai.expect
require('mocha-sinon')

const callerFuncName = require('../../../../src/Misc/callerFuncName')

describe('callerFuncName', () => {
  it('should have a correct example in JSDoc', function () {
    const currentFuncName = require('../../../../src/Misc/currentFuncName')
    const MyFunc = () => console.log('Function: ' + currentFuncName() + ' was called by: ' + callerFuncName())
    const OuterFunc = () => MyFunc()

    this.sinon.stub(console, 'log')
    OuterFunc()
    expect(console.log.calledWith('Function: MyFunc was called by: OuterFunc')).to.be.true
    this.sinon.restore()
  })

  // it('should... ', function() {
  //
  // })
})
