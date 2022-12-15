const isArray = require('../Boolean/isArray')

const assertAfterCheck = require('../ModelAssertion/assertAfterCheck')
const assertEmpty = require('../ModelAssertion/assertEmpty')

const defBasicModel = require('../ModelFactory/defBasicModel')

// empty array
const EmptyArrModel = defBasicModel('EmptyArray', Array).extend()
  .assert(
    ...assertAfterCheck(
      isArray,
      ...assertEmpty
    )
  )

module.exports = EmptyArrModel
