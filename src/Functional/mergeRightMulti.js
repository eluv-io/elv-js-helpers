'use strict'

const mergeRight = require('./mergeRight')
const reduce = require('./reduce')

/**
 * Merge together objects in an array, returning a new object.
 *
 * Later elements take precedence over earlier elements.
 *
 * Uses [mergeRight](#mergeRight) to combine each object in array with the result of combining all previous objects.
 *
 * In case of a top-level key conflicts, the value from the element being merged will replace the value obtained from merging all previous elements.
 *
 * Original object's constructor used to process merged data in order to
 * preserve ObjectModel constraints on non-primitive models
 *
 * @function
 * @category Functional
 * @sig [Object] -> Object
 * @param {Object[]} objectArray - Array of objects to merge
 * @returns Object - New merged object
 * @see mergeRight
 * @example
 *
 * 'use strict'
 * const mergeRightMulti = require('@eluvio/elv-js-helpers/Functional/mergeRightMulti')
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
 * const evenMoreData = {
 *   age: 35,
 *   preferences: {
 *     movies: "horror"
 *   }
 * }
 *
 * mergeRightMulti([defaults, moreData, evenMoreData])     //=> {age: 35, children: ["Charlie"], name: "Anonymous", preferences: {movies: "horror"}}
 *
 * mergeRightMulti([defaults])                             //=> {children: ["DefaultChild1", "DefaultChild2"], name: "Anonymous", preferences: {drink: "water", music: "rock"}}
 *
 * mergeRightMulti([])                                     //=> {}
 *
 */
const mergeRightMulti = objectArray => reduce(
  mergeRight,
  {},
  objectArray
)

module.exports = mergeRightMulti
