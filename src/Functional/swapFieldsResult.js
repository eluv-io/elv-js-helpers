'use strict'

const curry = require('./curry')
const Err = require('../ADT/Err')
const Ok = require('../ADT/Ok')
const swapFields = require('./swapFields')

/**
 * Swaps values in two properties of an object.
 *
 * Returns a [`Result`](https://crocks.dev/docs/crocks/Result.html) [Crocks Algebraic Data Type](https://crocks.dev/docs/crocks/)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_ wrapping a new object. Note that new object is a shallow copy of the original.
 * If original object was an ObjectModel instance, will return wrapped plain javascript object with
 * model constraints removed.
 *
 * If either fieldname is not found, or if obj is not an object, will return a `Result` of type `Err`.
 *
 * @function
 * @curried
 * @category ADT
 * @sig string -> string -> Result -> Result
 * @param {string} fieldName1 - The name of one field to swap
 * @param {string} fieldName2 - The name of the other field to swap
 * @param {Result} obj - Object
 * @returns {Result}
 * @see swapFields
 * @example
 *
 * 'use strict'
 * const swapFieldsResult = require('@eluvio/elv-js-helpers/Functional/swapFieldsResult')
 *
 * const resultToPOJO = require('@eluvio/elv-js-helpers/Conversion/resultToPOJO')
 *
 * const obj = {foo: 1, bar: 2, baz: 3}
 * const swappedObjResult = swapFieldsResult('foo', 'bar', obj)
 *
 * resultToPOJO(swappedObjResult).ok           //=> true
 * swappedObjResult.inspect()                  //=> 'Ok { foo: 2, bar: 1, baz: 3 }'
 *
 * const errResult = swapFieldsResult('foo', 'bar', null)
 *
 * resultToPOJO(errResult).ok                 //=> false
 * errResult.inspect()                        //=> 'Err [ "swapFields: expecting obj to be Object, got null" ]'
 *
 */
const swapFieldsResult = curry(
  (fieldName1, fieldName2, obj) => {
    try {
      return Ok(swapFields(fieldName1, fieldName2, obj))
    } catch (e) {
      return Err(e.message)
    }
  }
)

module.exports = swapFieldsResult
