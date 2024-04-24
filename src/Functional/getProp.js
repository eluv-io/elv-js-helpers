const _prop = require('@eluvio/ramda-fork/src/prop')

const curry = require('./curry')

/**
 * Renamed passthrough for Ramda's `prop` function _(Copyright © 2013-2020 Scott Sauyet and Michael Hurley)_
 * Not to be confused with Crocks getProp(), which returns a Maybe
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Gets value of specified property or index from object, or `undefined` if not found.
 *
 * Supports negative numbers as indexes, to retrieve element counting from end of array
 *
 * @function
 * @curried
 * @category Functional
 * @sig Idx = String | Int | Symbol => Idx -> Object | Array -> a | Undefined
 * @param {String | Number | Symbol} prop - the property (or index) to retrieve
 * @param {Object | Array} item - the item to retrieve property or element from
 * @returns {*} Value or `undefined`
 * @example
 *
 * const getProp = require('@eluvio/elv-js-helpers/Functional/getProp')
 *
 * const myObject = {foo: {bar: [1, 2, 3]}}
 *
 * getProp('foo', myObject)                //=> {bar: [1, 2, 3]}
 *
 * getProp('bar', myObject)                //=> undefined
 *
 * const myArray = [0, 1, 2]
 *
 * getProp(0, myArray)      //=> 0
 *
 * getProp(-1, myArray)     //=> 2
 *
 */
const getProp = curry(
  (prop, item) => _prop(prop, item)
)

module.exports = getProp
