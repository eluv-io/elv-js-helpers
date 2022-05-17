// unit test for listPush.js

const chai = require('chai')
chai.should()

const listPush = require('../../../../src/Functional/listPush')

const List = require('../../../../src/ADT/List')

describe('listPush', () => {

  it('should work as expected', () => {
    listPush(List([1,2,3]), 4).inspect().should.equal('List [ 1, 2, 3, 4 ]')
  })
})
