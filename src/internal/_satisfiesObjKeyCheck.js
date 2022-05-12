const curry = require('crocks/helpers/curry')
const kindOf = require('../kindOf')

const _objBadKey = require('./_objBadKey')

/**
 * Returns
 * * `true` if the input is an object and all the object's keys are valid instances of the specified model OR **the input is not a Javascript object**
 * * `false` if **the input IS a Javascript object** AND has a key (property name) that violates specified model
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
 * @param {Model} keyModel - the model to check keys against
 * @param {*} obj - The item to check
 * @returns {Boolean}
 *
 * @example
 *
 * _satisfiesObjKeyCheck(NonBlankStrModel, {' ': 42})   //=> false
 *
 * _satisfiesObjKeyCheck(NonBlankStrModel, {'foo': 42}) //=> true
 *
 * _satisfiesObjKeyCheck(NonBlankStrModel, 3)           //=> true
 *
 * // function is curried: call with fewer params to obtain a narrower function
 *
 * const hasNoBlankKeys = _satisfiesObjKeyCheck(NonBlankStrModel)
 *
 * hasNoBlankKeys({' ': 42})     //=> false
 *
 * hasNoBlankKeys({'foo': 42})   //=> true
 *
 * hasNoBlankKeys(3)             //=> true
 */
const _satisfiesObjKeyCheck = curry(
  (keyModel, obj) =>
    !(kindOf(obj) === 'object' && _objBadKey(keyModel, obj) !== undefined)
)

module.exports = _satisfiesObjKeyCheck
