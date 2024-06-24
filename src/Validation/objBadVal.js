const compose = require('crocks/helpers/compose')

const last = require('@eluvio/ramda-fork/src/last')

const failsModelCheck = require('../Boolean/failsModelCheck')

const curry = require('../Functional/curry')
const find = require('../Functional/find')

/**
 * Iterates over object values and returns 2-element array [key, value] pair for first value found that does not
 * validate against Model
 *
 * Returns undefined if all values are valid.
 *
 * @function
 * @curried
 * @category Validation
 * @sig Model -> Object -> [k, v] | undefined
 * @param {Model} valueModel - The Model to check values against
 * @returns {(Array|undefined)} - The key/value pair for the bad value, or undefined if all values valid
 * @example
 *
 * const NonBlankStrModel = require('@eluvio/elv-js-helpers/Model/NonBlankStrModel')
 *
 * const objBadVal = require('@eluvio/elv-js-helpers/Validation/objBadVal')
 *
 * objBadVal(NonBlankStrModel, {foo: 'bar'})   //=> undefined
 *
 * objBadVal(NonBlankStrModel, {foo: ' '})     //=> ['foo', ' ']
 *
 * objBadVal(NonBlankStrModel, {foo: 42})      //=> ['foo', 42]
 *
 * // function is curried: call with fewer params to obtain a narrower function
 * const findBlankVal = objBadVal(NonBlankStrModel)
 *
 * findBlankVal({foo: 'bar'})    //=> undefined
 *
 * findBlankVal({foo: ' '})      //=> ['foo', ' ']
 *
 */
const objBadVal = curry(
  (valueModel, obj) => find(
    compose(
      failsModelCheck(valueModel),
      last
    ),
    Object.entries(obj)
  )
)

module.exports = objBadVal
