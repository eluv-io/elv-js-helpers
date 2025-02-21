const _assocPath = require('@eluvio/ramda-fork/src/assocPath')

const curry = require('./curry')
const defArrayModel = require('../ModelFactory/defArrayModel')
const defBasicModel = require('../ModelFactory/defBasicModel')
const NonNegativeIntModel = require('../Model/NonNegativeIntModel')
const PathElementModel = defBasicModel('PathElement', [String, NonNegativeIntModel])
const PathArrayModel = defArrayModel('PathArray', PathElementModel)
/**
 * Renamed passthrough for Ramda's `assocPath` function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns a shallow clone of object with value set at specified path. Any missing or non-object keys in path will
 * be overridden. WARNING: arrays along the path will be converted into objects with numeric strings as keys (see
 * examples)
 *
 * Unlike `getPath`, does not support negative numbers as indexes to set element counting from end of array. Ramda
 * will actually end up adding a property to the array using string of negative number as the key. This function
 * will throw an error instead.
 *
 * For safety, you should clone the original object before passing into `setPath`.
 *
 * @function
 * @curried
 * @category Functional
 * @sig Idx = String | Int | Symbol => [Idx] -> * -> Object -> Object
 * @param {Array} pathArray - the path to set, expressed as an array
 * @param {*} value - the value to store at path
 * @param {Object} object - the original object
 * @returns {Object} Shallow copy of `object` with
 * @example
 *
 * const setPath = require('@eluvio/elv-js-helpers/Functional/setPath')
 *
 * const clone = require('@eluvio/elv-js-helpers/Functional/clone')
 * const myObject = {foo: {bar: [1, 2, 3]}}
 *
 * setPath(['foo'], 42, clone(myObject))                   //=> {foo: 42}
 *
 * setPath(['bar'], 42, clone(myObject))                   //=> {bar: 42, foo: {bar: [1, 2, 3]}}
 *
 * // numeric values interpreted as array indexes
 * setPath(['foo', 'bar', 0], 42, clone(myObject))         //=> {foo: {bar: [42, 2, 3]}}
 *
 * // empty values inserted into existing arrays if needed
 * setPath(['foo', 'bar', 5], 42, clone(myObject))         //=> {foo: {bar: [1, 2, 3, , , 42]}}
 *
 * // WARNING: using a string expressing a number when an array exists at path causes other array elements to be
 * // converted to key:value pairs
 * setPath(['foo', 'bar', '0'], 42, clone(myObject))       //=> {foo: {bar: {0: 42, 1: 2, 2: 3}}}
 *
 * setPath(['foo', 'bar', 'baz'], 42, clone(myObject))     //=> {foo: {bar: {0: 1, 1: 2, 2: 3, baz: 42}}}
 *
 * // empty values inserted into new arrays if needed
 * setPath(['foo', 'bar', 'baz', 5], 42, clone(myObject))  //=> {foo: {bar: {0: 1, 1: 2, 2: 3, baz: [ , , , , , 42]}}}
 *
 * // negative numbers NOT supported as array indexes
 * setPath(['foo', 'bar', -1], 42, clone(myObject))        //=> EXCEPTION: "expecting Array[2] to be String or NonNegativeInteger, got Number -1"
 *
 */
const setPath = (pathArray,value, object) => {
  PathArrayModel(pathArray)
  return _assocPath(pathArray, value, object)
}

module.exports = curry(setPath)
