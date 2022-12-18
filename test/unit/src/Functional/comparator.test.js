// unit test for comparator.js

const chai = require('chai')
chai.should()

const comparator = require('../../../../src/Functional/comparator')
const isGT = require('../../../../src/Boolean/isGT')
const isLT = require('../../../../src/Boolean/isLT')

describe('comparator', () => {

  it('should work as expected', () => {
    const compAscending = comparator(isGT)
    const compDescending = comparator(isLT)

    let data = [1, 42, -42, 0]
    data.sort(compAscending)
    data.join(',').should.equal('-42,0,1,42')

    data.sort(compDescending)
    data.join(',').should.equal('42,1,0,-42')
  })
})
