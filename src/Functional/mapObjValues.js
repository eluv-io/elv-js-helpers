'use strict'
const curry = require('./curry')
const identity = require('./identity')
const mapObjKV = require('./mapObjKV')
/**
 * Creates a new object with same keys as original object but with values transformed by specified function.
 *
 * The function can have up to three inputs and will be passed current value, key, and the entire original object.
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn - The function to execute to obtain new value
 * @param {Object} obj - The object to process
 * @returns {Object}
 * @example
 *
 * 'use strict'
 * const mapObjValues = require('@eluvio/elv-js-helpers/Functional/mapObjValues')
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
 * const result = mapObjValues(
 *   nameCapitalizer,
 *   myObj
 * )
 *
 * dumpJSON(result)         //=> OUTPUT: '{\n  "firstname": "Arthur",\n  "lastname": "Dent",\n  "id": 42\n}'
 *
 */
const mapObjValues = (fn, obj) => mapObjKV(identity, fn, obj)

module.exports = curry(mapObjValues)
