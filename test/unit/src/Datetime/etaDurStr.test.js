// unit test for etaDurStr.js

const chai = require('chai')
chai.should()

const etaDurStr = require('../../../../src/Datetime/etaDurStr')

describe('etaDurStr', () => {

  it('should work as expected', () => {
    etaDurStr(0).should.equal('0s')
    etaDurStr(1).should.equal('1s')
    etaDurStr(61).should.equal('1m 01s')
    etaDurStr(3661).should.equal('1h 01m 01s')
    etaDurStr(90061).should.equal('1d 01h 01m 01s')
    etaDurStr(954061).should.equal('11d 01h 01m 01s')
    etaDurStr(-1).should.equal('--')
  })
})
