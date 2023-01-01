/**
 * Passthrough for the `List` [Crocks Algebraic Data Type](https://crocks.dev/docs/crocks/)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * Allows users of `elv-js-helpers` to create `List` objects without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * @function
 * @category ADT
 * @sig * -> List *
 * @param {*} - The value to wrap in a List
 * @returns {List}
 * @example
 *
 * const List = require('@eluvio/elv-js-helpers/ADT/List')
 *
 * const myList = List([1,2,3])
 *
 * // List with 3 elements:
 * myList.inspect()                 //=> 'List [ 1, 2, 3 ]'
 *
 * // Convert to Javascript array:
 * myList.toArray()                //=> [ 1, 2, 3 ]
 *
 * // Elements are instances of the Crocks 'Maybe' ADT
 * myList.head().inspect()         //=> 'Just 1'
 *
 * // tail() returns an instance of Crocks 'Maybe' ADT, which wraps a List if there were at least 2 elements in original List
 * myList.tail().inspect()                   //=> 'Just List [ 2, 3 ]'
 *
 * // List with 1 element, which itself is a 3-item array:
 * List([[1,2,3]]).inspect()                 //=> 'List [ [ 1, 2, 3 ] ]'
 *
 * // List with 1 element:
 * List([42]).inspect()                      //=> 'List [ 42 ]'
 *
 * // Non-array input is treated as a single-element array:
 * List(42).inspect()                        //=> 'List [ 42 ]'
 *
 * // List with 0 elements:
 * const emptyList = List([])
 * emptyList.inspect()                    //=> 'List [ ]'
 *
 * // Instance of the Crocks 'Maybe' ADT, with no value
 * emptyList.head().inspect()                //=> 'Nothing'
 */
const List = require('crocks/List')

module.exports = List
