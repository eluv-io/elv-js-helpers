const chai = require('chai')
chai.should()

describe('elv-js-helpers', () => {
  it('should not throw an exception when requiring the entire library', () => {
    const EJH = require('../../index')
    console.log(EJH.sysLocale())
  })
})
