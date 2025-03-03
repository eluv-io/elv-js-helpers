'use strict'
const isArray = require('../Boolean/isArray')

const assertAfterCheck = require('../ModelAssertion/assertAfterCheck')
const assertNotEmpty = require('../ModelAssertion/assertNotEmpty')

const defBasicModel = require('../ModelFactory/defBasicModel')

// generic non-empty array
const NonEmptyArrModel = defBasicModel('NonEmptyArray', Array).extend()
  .assert(
    ...assertAfterCheck(
      isArray,
      ...assertNotEmpty
    )
  )

module.exports = NonEmptyArrModel
