// unit test for truthTable.js

const chai = require('chai')
chai.should()

const truthTable = require('../../../../src/Functional/truthTable')

describe('truthTable', () => {
  it('should work as expected', () => {
    let isChild = false
    let isMale = false
    truthTable(['woman', 'man', 'girl', 'boy'], [isChild, isMale]).should.equal('woman')

    truthTable(['woman', 'man', 'girl', 'boy'], [true, false]).should.equal('girl')
    truthTable(['woman', 'man', 'girl', 'boy'], [true, true]).should.equal('boy')
    truthTable(['woman', 'man', 'girl', 'boy'], [false, true]).should.equal('man')
  })
})
