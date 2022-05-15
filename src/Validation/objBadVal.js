const compose = require('crocks/helpers/compose')
const curry = require('crocks/helpers/curry')

const find = require('ramda/src/find')
const last = require('ramda/src/last')
const not = require('ramda/src/not')
const toPairs = require('ramda/src/toPairs')

const passesModelCheck = require('../Boolean/passesModelCheck')



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
      not,
      passesModelCheck(valueModel),
      last
    ),
    toPairs(obj)
  )
)

module.exports = objBadVal