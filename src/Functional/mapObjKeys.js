'use strict'
const curry = require('./curry')
const identity = require('./identity')
const mapObjKV = require('./mapObjKV')
/**
 * Creates a new object with keys transformed by a function but values kept the same.
 *
 * The function can have up to three inputs and will be passed current key, value, and the entire original object.
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((String, *, Object) -> *) -> Object -> Object
 * @param {Function} fn - The function to execute to obtain new key
 * @param {Object} obj - The object to process
 * @returns {Object}
 * @example
 *
 * 'use strict'
 * const mapObjKeys = require('@eluvio/elv-js-helpers/Functional/mapObjKeys')
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
 * const keyPrefixer = key =>  `new_${key}`
 *
 * const result = mapObjKeys(
 *   keyPrefixer,
 *   myObj
 * )
 *
 * dumpJSON(result)         //=> OUTPUT: '{\n  "new_firstname": "arthur",\n  "new_lastname": "dent",\n  "new_id": 42\n}'
 *
 */
const mapObjKeys = (fn, obj) => mapObjKV(fn, identity, obj)

module.exports = curry(mapObjKeys)
