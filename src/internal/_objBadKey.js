const compose = require('crocks/helpers/compose')
const curry = require('crocks/helpers/curry')

const find = require('ramda/src/find')
const keys = require('ramda/src/keys')
const not = require('ramda/src/not')

const checkVsModel = require('../checkVsModel')

/**
 * Iterates over object properties and returns first property name (key) where checkVsModel(keyModel) returns false
 *
 * Returns undefined if all keys are valid.
 *
 * @function
 * @curried
 * @private
 * @category Validation
 * @sig Model -> Object -> String | undefined
 * @param {Model} keyModel - The model to check keys against
 * @returns {(String|undefined)} - The bad key if found, `undefined` otherwise
 *
 * @example
 *
 * const NonBlankStrModel = require('../NonBlankStrModel')
 *
 * _objBadKey(NonBlankStrModel, {foo:3})  //=> undefined
 *
 * _objBadKey(NonBlankStrModel, {' ':3})  //=> ' '
 *
 * // function is curried: call with fewer params to obtain a narrower function
 * const findBlankKey = _objBadKey(NonBlankStrModel)
 *
 * findBlankKey({foo:3})  //=> undefined
 *
 * findBlankKey({' ':3})  //=> ' '
 *
 */
const _objBadKey = curry(
  (keyModel, obj) => find(
    compose(
      not,
      checkVsModel(keyModel)
    ),
    keys(obj)
  )
)

module.exports = _objBadKey
