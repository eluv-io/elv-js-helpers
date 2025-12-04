'use strict'
const isArray = require('../Boolean/isArray')

const assertAfterCheck = require('../ModelAssertion/assertAfterCheck')
const assertNotEmpty = require('../ModelAssertion/assertNotEmpty')

const defBasicModel = require('../ModelFactory/defBasicModel')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input
 * is a non-empty array.
 *
 * If input passes validation, will return the input
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> Array | THROW
 * @param {*} - The input to validate
 * @returns {Array} The validated input
 * @example
 *
 * 'use strict'
 * const NonEmptyArrModel = require('@eluvio/elv-js-helpers/Model/NonEmptyArrModel')
 *
 * NonEmptyArrModel([1])         //=> [1]
 *
 * NonEmptyArrModel(null)       //=> EXCEPTION: 'expecting Array, got null'
 *
 * NonEmptyArrModel(undefined)  //=> EXCEPTION: 'expecting Array, got undefined'
 *
 * NonEmptyArrModel([])         //=> EXCEPTION: 'Value must not be empty (got: [])'
 *
 * NonEmptyArrModel('')         //=> EXCEPTION: 'expecting Array, got String ""'
 *
 * NonEmptyArrModel(Math.round) //=> EXCEPTION: 'expecting Array, got Function'
 *
 */
const NonEmptyArrModel = defBasicModel('NonEmptyArray', Array).extend()
  .assert(
    ...assertAfterCheck(
      isArray,
      ...assertNotEmpty
    )
  )

module.exports = NonEmptyArrModel
