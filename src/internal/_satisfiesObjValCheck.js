const curry = require('crocks/helpers/curry')
const kindOf = require('kind-of')

const _objBadVal = require('./_objBadVal')

/**
 * Returns
 * * `true` if the input is an object and all the object's values are valid instances of the specified model OR **the input is not a Javascript object**
 * * `false` if **the input IS a Javascript object** AND has a value that violates specified model
 *
 * Intended for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions).
 *
 * Note that `true` is returned for non-object inputs.
 *
 * If called with fewer than 2 arguments, will return a [partially applied function](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04)
 *
 * @function
 * @curried
 * @private
 * @category Logic
 * @sig Model -> * -> Boolean
 * @param {Model} valueModel - the model to check values against
 * @param {Any} obj - The item to check
 * @returns {Boolean}
 *
 * @example
 *
 * _satisfiesObjValCheck(NonBlankStrModel, {foo: ' '})   //=> false
 *
 * _satisfiesObjValCheck(NonBlankStrModel, {foo: 42})    //=> true
 *
 * _satisfiesObjValCheck(NonBlankStrModel, 3)            //=> true
 *
 * // function is curried: call with fewer params to obtain a narrower function
 *
 * const hasNoBlankVals = _satisfiesObjValCheck(NonBlankStrModel)
 *
 * hasNoBlankVals({foo: ' '})    //=> false
 *
 * hasNoBlankVals({foo: 42})     //=> true
 *
 * hasNoBlankVals(3)             //=> true
 */
const _satisfiesObjValCheck = curry(
  (valueModel, obj) =>
    !(kindOf(obj) === 'object' && _objBadVal(valueModel, obj) !== undefined)
)
module.exports = _satisfiesObjValCheck
