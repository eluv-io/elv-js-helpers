'use strict'
const curry = require('../Functional/curry')
const isObject = require('../Boolean/isObject')

const _objBadKey = require('../Validation/objBadKey')

/**
 * Returns
 * * `true` if the input is an object and all the object's keys are valid instances of the specified Model OR **the input is not a Javascript object**
 * * `false` if **the input IS a Javascript object** AND has a key (property name) that violates specified Model
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
 * @param {Model} keyModel - the Model to check keys against
 * @param {*} obj - The item to check
 * @returns {Boolean}
 * @example
 *
 * 'use strict'
 * const passesObjKeyCheck = require('@eluvio/elv-js-helpers/Boolean/passesObjKeyCheck')
 *
 * const NonBlankStrModel = require('@eluvio/elv-js-helpers/Model/NonBlankStrModel')
 *
 * passesObjKeyCheck(NonBlankStrModel, {' ': 42})   //=> false
 *
 * passesObjKeyCheck(NonBlankStrModel, {foo: 42})   //=> true
 *
 * // test input not an object, check skipped:
 * passesObjKeyCheck(NonBlankStrModel, 3)           //=> true
 *
 * // function is curried: call with fewer params to obtain a narrower function
 *
 * const hasNoBlankKeys = passesObjKeyCheck(NonBlankStrModel)
 *
 * hasNoBlankKeys({' ': 42})                        //=> false
 *
 * hasNoBlankKeys({foo: 42})                        //=> true
 *
 * // test input not an object, check skipped:
 * hasNoBlankKeys(3)                                //=> true
 */
const passesObjKeyCheck = curry(
  (keyModel, obj) =>
    !(isObject(obj) && _objBadKey(keyModel, obj) !== undefined)
)

module.exports = passesObjKeyCheck
