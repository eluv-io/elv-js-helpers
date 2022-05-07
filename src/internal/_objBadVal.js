const compose = require('crocks/helpers/compose')
const curry = require('crocks/helpers/curry')

const find = require('ramda/src/find')
const last = require('ramda/src/last')
const not = require('ramda/src/not')
const toPairs = require('ramda/src/toPairs')

const checkVsModel = require('../checkVsModel')



/**
 * Iterates over object values and returns 2-element array [key, value] pair for first value found that does not
 * validate against model
 *
 * Returns undefined if all values are valid.
 *
 * @function
 * @curried
 * @private
 * @category Validation
 * @sig Model -> Object -> [k, v] | undefined
 * @param {Model} valueModel - The model to check values against
 * @returns {(Array|undefined)} - The key/value pair for the bad value, or undefined if all values valid
 *
 * @example
 *
 * const NonBlankStrModel = require('../NonBlankStrModel')
 *
 * _objBadVal(NonBlankStrModel, {foo: 'bar'})   //=> undefined
 *
 * _objBadVal(NonBlankStrModel, {foo: ' '})     //=> ['foo', ' ']
 *
 * _objBadVal(NonBlankStrModel, {foo: 42})      //=> ['foo', 42]
 *
 * // function is curried: call with fewer params to obtain a narrower function
 * const findBlankVal = _objBadVal(NonBlankStrModel)
 *
 * findBlankVal({foo: 'bar'})    //=> undefined
 *
 * findBlankVal({foo: ' '})      //=> ['foo', ' ']
 *
 */
const _objBadVal = curry(
  (valueModel, obj) => find(
    compose(
      not,
      checkVsModel(valueModel),
      last
    ),
    toPairs(obj)
  )
)

module.exports = _objBadVal
