'use strict'
const isArray = require('../Boolean/isArray')

const assertAfterCheck = require('../ModelAssertion/assertAfterCheck')
const assertEmpty = require('../ModelAssertion/assertEmpty')

const defBasicModel = require('../ModelFactory/defBasicModel')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input
 * is an empty array.
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
 * const EmptyArrModel = require('@eluvio/elv-js-helpers/Model/EmptyArrModel')
 *
 * EmptyArrModel([])         //=> []
 *
 * EmptyArrModel(null)       //=> EXCEPTION: 'expecting Array, got null'
 *
 * EmptyArrModel(undefined)  //=> EXCEPTION: 'expecting Array, got undefined'
 *
 * EmptyArrModel([1])        //=> EXCEPTION: 'Value must be empty (got: [1])'
 *
 * EmptyArrModel('')         //=> EXCEPTION: 'expecting Array, got String ""'
 *
 * EmptyArrModel(Math.round) //=> EXCEPTION: 'expecting Array, got Function'
 *
 */
const EmptyArrModel = defBasicModel('EmptyArray', Array).extend()
  .assert(
    ...assertAfterCheck(
      isArray,
      ...assertEmpty
    )
  )

module.exports = EmptyArrModel
