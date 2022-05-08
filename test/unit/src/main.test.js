const chai = require('chai')
chai.should()

describe('elv-js-helpers', () => {
  it('should not throw an exception when requiring the entire library', () => {
    const EJH = require('../../../src/main')
    console.log(EJH.sysLocale())
  })
})
