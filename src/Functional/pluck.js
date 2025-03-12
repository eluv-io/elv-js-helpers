'use strict'
const _pluck = require('@eluvio/ramda-fork/src/pluck')

const curry = require('./curry')

/**
 * Passthrough for Ramda's [`pluck`](https://ramdajs.com/docs/#pluck) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns a new list by plucking the same named property (or array element) off all objects in the list supplied.
 *
 * If an item does not have the specified property or array index, result will contain `undefined` for that element.
 *
 * Will return `[undefined]` if second argument is something other than a list or `undefined`.
 *
 * Will throw an exception if `undefined` is passed in for second argument.
 *
 * @function
 * @curried
 * @category Functional
 * @sig Number | String -> List -> [*] | EXCEPTION
 * @param {Integer | String} propOrIndex - the property or array element index to pull from each item in list
 * @param {Array} x - array of arrays or objects to pluck property or element from
 * @returns {Array} List with the specified property or array element from each element in x
 * @example
 *
 * 'use strict'
 * const pluck = require('@eluvio/elv-js-helpers/Functional/pluck')
 *
 * const arrOfObj = [{a: 1, b:2}, {b:2, c:3}]
 *
 * pluck('b', arrOfObj)             //=> [2, 2]
 *
 * pluck('a', arrOfObj)             //=> [1, undefined]
 *
 * const arrOfArr = [['a', 'b'], ['b', 'c', 'd']]
 *
 * pluck(1, arrOfArr)               //=> ['b', 'c']
 *
 * pluck(2, arrOfArr)               //=> [undefined, 'd']
 *
 * pluck(3, 3)                      //=> [undefined]
 *
 * pluck(3, undefined)              //=> EXCEPTION: 'Cannot read properties of undefined'
 *
 * // function is curried: call with just first param to obtain a more specialized function
 * const getFirstElements = pluck(0)
 *
 * getFirstElements(arrOfArr)       //=> ['a', 'b']
 *
 */
const pluck = curry(
  (propOrIndex, x) => _pluck(propOrIndex, x)
)

module.exports = pluck
