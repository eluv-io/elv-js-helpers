const _path = require('@eluvio/ramda-fork/src/path')

const curry = require('./curry')

/**
 * Renamed passthrough for Ramda's `path` function _(Copyright © 2013-2020 Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Gets value at specified path from object, or `undefined` if not found.
 *
 * Supports negative numbers as indexes, to retrieve element counting from end of array
 *
 * @function
 * @curried
 * @category Functional
 * @sig Idx = String | Int | Symbol => [Idx] -> {a} -> a | Undefined
 * @param {Array} pathArray - the path to retrieve, expressed as an array
 * @param {Object} object - the object to retrieve path from
 * @returns {*} Value or `undefined`
 * @example
 *
 * const getPath = require('@eluvio/elv-js-helpers/Functional/getPath')
 *
 * const myObject = {foo: {bar: [1, 2, 3]}}
 *
 * getPath(['foo'], myObject)                //=> {bar: [1, 2, 3]}
 *
 * getPath(['bar'], myObject)                //=> undefined
 *
 * getPath(['foo', 'bar', 0], myObject)      //=> 1
 *
 * getPath(['foo', 'bar', -1], myObject)     //=> 3
 *
 */
const getPath = curry(
  (pathArray, object) => _path(pathArray, object)
)

module.exports = getPath
