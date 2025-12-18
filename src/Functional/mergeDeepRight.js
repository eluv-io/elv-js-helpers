'use strict'
const _mergeDeepRight = require('@eluvio/ramda-fork/src/mergeDeepRight')

const curry = require('./curry')

/**
 * Modified passthrough for Ramda's [`mergeRight`](https://ramdajs.com/docs/#mergeDeepRight) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Creates a new object that merges together two objects.
 *
 * If a key exists in both objects, and both values are themselves objects, the values are recursively deep merged right.
 *
 * If a key exists in both objects, and either value is not an object, the value from the first object will be replaced by
 * the value from the second object. Note that arrays are not considered objects, if both values are arrays they will not be merged.
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
 * @returns Object - New merged object
 * @example
 *
 * 'use strict'
 * const mergeDeepRight = require('@eluvio/elv-js-helpers/Functional/mergeDeepRight')
 *
 * const defaults = {
 *   children: ["DefaultChild1", "DefaultChild2"],
 *   name: "Anonymous",
 *   preferences: {
 *     drink: "water",
 *     music: "rock"
 *   }
 * }
 *
 * const moreData = {
 *   age: 35,
 *   children: ["Charlie"],
 *   preferences: {
 *     drink: "beer",
 *     movies: "comedy"
 *   }
 * }
 *
 * mergeDeepRight(defaults, moreData)                //=> {age: 35, children: ["Charlie"], name: "Anonymous", preferences: {drink: "beer", movies: "comedy", music: "rock"}}
 *
 * // function is curried: can call with fewer params to obtain a more specific function:
 *
 * const ensureNameAndChildren = mergeDeepRight(defaults)
 *
 * ensureNameAndChildren({})      //=> {children: ["DefaultChild1", "DefaultChild2"], name: "Anonymous", preferences: {drink: "water", music: "rock"}}
 *
 */
const mergeDeepRight = curry(
  (originalObj, updates) => originalObj.constructor(_mergeDeepRight(originalObj, updates))
)

module.exports = mergeDeepRight
