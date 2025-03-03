// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const sortBy = TH.requireSrcFile('Functional/sortBy')

describe('sortBy JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const sortByName = sortBy(x => x.name)
    const sortByNameCaseInsensitive = sortBy(x => x.name.toLowerCase())
    sortByName([{name: 'alpha'}, {name: 'Bravo'}, {name: 'charlie'}])
      .map(x => x.name)
      .should.eql(['Bravo', 'alpha', 'charlie'])
    sortByNameCaseInsensitive([{name: 'alpha'}, {name: 'Bravo'}, {name: 'charlie'}])
      .map(x => x.name)
      .should.eql(['alpha', 'Bravo', 'charlie'])
  })
})
