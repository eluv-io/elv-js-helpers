// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const listPush = TH.requireSrcFile('Functional/listPush')

describe('listPush JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const List = TH.requireSrcFile('ADT/List')
    listPush(List([1, 2, 3]), 4)
      .inspect()
      .should.eql('List [ 1, 2, 3, 4 ]')
  })
})
