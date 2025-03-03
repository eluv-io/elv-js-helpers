// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const ObjectModel = TH.requireSrcFile('Model/ObjectModel')

describe('ObjectModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    ObjectModel({foo: 'bar'}).should.eql({foo: 'bar'})
    TH.expect(() => ObjectModel('foo')).to.throw('expecting Object, got String "foo"')
  })
})
