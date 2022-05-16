// unit test for Ok.js

const chai = require('chai')
chai.should()

const Ok = require('../../../../src/ADT/Ok')

describe('Ok', () => {

  it('should work as expected', () => {
    Ok(42).inspect().should.equal('Ok 42')
  })
})
