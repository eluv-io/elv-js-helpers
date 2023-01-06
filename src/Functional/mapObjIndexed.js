/**
 * Passthrough for the [Ramda](https://ramdajs.com/docs/#mapObjIndexed) function of the same name _(Copyright © 2013-2020 Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Executes a function for each key/value pair in an object, then returns a new object with the results.
 *
 * The function can have up to three inputs and will be passed value, key, and the entire object.
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} - The function to execute
 * @param {Object} - The object to process
 * @returns {Object}
 * @example
 *
 * const mapObjIndexed = require('@eluvio/elv-js-helpers/Functional/mapObjIndexed')
 *
 * const dumpJSON = require('@eluvio/elv-js-helpers/Misc/dumpJSON')
 *
 * const myObj = {
 *   firstname: "arthur",
 *   lastname: "dent",
 *   id: 42
 * }
 *
 * // note that function can have fewer than 3 inputs if you don't need to use all of the parameters:
 * const nameCapitalizer = (val, key) =>  key.endsWith('name')
 *   ? val.charAt(0).toUpperCase() + val.slice(1)
 *   : val
 *
 * const result = mapObjIndexed(
 *   nameCapitalizer,
 *   myObj
 * )
 *
 * dumpJSON(result)         //=> OUTPUT: '{\n  "firstname": "Arthur",\n  "lastname": "Dent",\n  "id": 42\n}'
 *
 *
 */
const mapObjIndexed = require('@eluvio/ramda-fork/src/mapObjIndexed')

module.exports = mapObjIndexed
