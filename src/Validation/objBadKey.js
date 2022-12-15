const curry = require('crocks/helpers/curry')

const find = require('ramda/src/find')
const keys = require('ramda/src/keys')

const failsModelCheck = require('../Boolean/failsModelCheck')

/**
 * Iterates over object properties and returns first property name (key) where passesModelCheck(keyModel) returns false
 *
 * Returns undefined if all keys are valid.
 *
 * @function
 * @curried
 * @category Validation
 * @sig Model -> Object -> String | undefined
 * @param {Model} keyModel - The Model to check keys against
 * @returns {(String|undefined)} - The bad key if found, `undefined` otherwise
 * @example
 *
 * const NonBlankStrModel = require('@eluvio/elv-js-helpers/Model/NonBlankStrModel')
 *
 * const objBadKey = require('@eluvio/elv-js-helpers/Validation/objBadKey')
 *
 * objBadKey(NonBlankStrModel, {foo:3})  //=> undefined
 *
 * objBadKey(NonBlankStrModel, {' ':3})  //=> ' '
 *
 * // function is curried: call with fewer params to obtain a narrower function
 * const findBlankKey = objBadKey(NonBlankStrModel)
 *
 * findBlankKey({foo:3})  //=> undefined
 *
 * findBlankKey({' ':3})  //=> ' '
 *
 */
const objBadKey = curry(
  (keyModel, obj) => find(
    failsModelCheck(keyModel),
    keys(obj)
  )
)

module.exports = objBadKey
