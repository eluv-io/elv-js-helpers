// unit test for map.js

const chai = require('chai')
chai.should()

const map = require('../../../../src/Functional/map')

const Err = require('../../../../src/ADT/Err')
const Ok = require('../../../../src/ADT/Ok')

describe('map', () => {

  const double = a => a * 2
  const ok21 = Ok(21)
  const badNum = Err(['failed to read input'])

  it('should work as expected', () => {
    double(21).should.equal(42)
    isNaN(double(ok21)).should.be.true
    map(double, ok21).inspect().should.equal('Ok 42')
    map(double, badNum).inspect().should.equal('Err [ "failed to read input" ]')
  })
})
