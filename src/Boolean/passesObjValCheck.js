const curry = require('crocks/helpers/curry')
const kindOf = require('../Validation/kindOf')

const _objBadVal = require('../Validation/objBadVal')

/**
 * Returns
 * * `true` if the input is an object and all the object's values are valid instances of the specified Model OR **the input is not a Javascript object**
 * * `false` if **the input IS a Javascript object** AND has a value that violates specified Model
 *
 * Intended for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions).
 *
 * Note that `true` is returned for non-object inputs.
 *
 * If called with fewer than 2 arguments, will return a [partially applied function](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04)
 *
 * @function
 * @curried
 * @category Boolean
 * @sig Model -> * -> Boolean
 * @param {Model} valueModel - the Model to check values against
 * @param {*} obj - The item to check
 * @returns {Boolean}
 * @example
 *
 * const passesObjValCheck = require('@eluvio/elv-js-helpers/Boolean/passesObjValCheck')
 *
 * const NonBlankStrModel = require('@eluvio/elv-js-helpers/Model/NonBlankStrModel')
 *
 * passesObjValCheck(NonBlankStrModel, {foo: ' '})   //=> false
 *
 * passesObjValCheck(NonBlankStrModel, {foo: 42})    //=> true
 *
 * passesObjValCheck(NonBlankStrModel, 3)            //=> true
 *
 * // function is curried: call with fewer params to obtain a narrower function
 *
 * const hasNoBlankVals = passesObjValCheck(NonBlankStrModel)
 *
 * hasNoBlankVals({foo: ' '})    //=> false
 *
 * hasNoBlankVals({foo: 42})     //=> true
 *
 * hasNoBlankVals(3)             //=> true
 */
const passesObjValCheck = curry(
  (valueModel, obj) =>
    !(kindOf(obj) === 'object' && _objBadVal(valueModel, obj) !== undefined)
)
module.exports = passesObjValCheck
