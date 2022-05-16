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
 * const myList = List([1,2,3])    //=> List [ 1, 2, 3 ]  (List with 3 elements)
 *
 * myList.toArray()                //=> [ 1, 2, 3 ]  (Javascript array)
 *
 * myList.head()                   //=> Just 1 (instance of the Maybe ADT)
 *
 * myList.tail()                   //=> Just List [ 2, 3 ] (instance of the Maybe ADT, wrapping a List)
 *
 * List([[1,2,3]])                 //=> List [ [ 1, 2, 3 ] ] (List with 1 element which itself is a 3-item array)
 *
 * List([42])                      //=> List [ 42 ] (List with 1 element)
 *
 * List(42)                        //=> List [ 42 ] (List with 1 element)
 *
 * const emptyList = List([])      //=> List [ ] (List with 0 elements)
 *
 * emptyList.head()                //=> Nothing (instance of the Maybe ADT)
 */
const List = require('crocks/List')

module.exports = List
