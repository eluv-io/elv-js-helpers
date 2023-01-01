// unit test for currentFuncName.js

const chai = require('chai')
chai.should()
const expect = chai.expect
require('mocha-sinon')

const currentFuncName = require('../../../../src/Misc/currentFuncName')

describe('currentFuncName', () => {
  it('should have a correct example in JSDoc', function () {
    const MyFunc = () => console.log('Entered function: ' + currentFuncName())

    this.sinon.stub(console, 'log')
    MyFunc()
    expect(console.log.calledWith('Entered function: MyFunc')).to.be.true
    this.sinon.restore()
  })

  // it('should... ', function() {
  //
  // })
})
