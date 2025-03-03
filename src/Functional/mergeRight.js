'use strict'
/**
 * Modified passthrough for Ramda's [`mergeRight`](https://ramdajs.com/docs/#mergeRight) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Creates a new object with the top-level properties of the first object merged with the top-level properties from the second object.
 * If a top-level key exists in both objects, the value from the first object will be replaced by the value from the second object.
 *
 * Original object's constructor used to process merged data in order to
 * preserve ObjectModel constraints on non-primitive models
 *
 * @function
 * @curried
 * @category Functional
 * @sig Object -> Object -> Object
 * @param Object - First object to merge (lower precedence)
 * @param Object - Second object to merge (higher precedence)
 * @returns Object - New object with merged top-level properties
 * @example
 *
 * 'use strict'
 * const mergeRight = require('@eluvio/elv-js-helpers/Functional/mergeRight')
 *
 * const defaults = {
 *   children: ["DefaultChild1", "DefaultChild2"],
 *   name: "Anonymous",
 * }
 *
 * const moreData = {
 *   age: 35,
 *   children: ["Charlie"]
 * }
 *
 * mergeRight(defaults, moreData)                //=> {age: 35, children: ["Charlie"], name: "Anonymous"}
 *
 * // function is curried: can call with fewer params to obtain a more specific function:
 *
 * const ensureNameAndChildren = mergeRight(defaults)
 *
 * ensureNameAndChildren({})      //=> {children: ["DefaultChild1", "DefaultChild2"], name: "Anonymous"}
 *
 */

const _mergeRight = require('@eluvio/ramda-fork/src/mergeRight')

const curry = require('./curry')

const mergeRight = curry(
  (originalObj, updates) => originalObj.constructor(_mergeRight(originalObj, updates))
)

module.exports = mergeRight
