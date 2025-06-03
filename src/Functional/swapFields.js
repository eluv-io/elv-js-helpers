'use strict'
// Version of swapFieldsResult without wrapping, works on 'normal' values rather than Result

const curry = require('./curry')
const defObjectModel = require('../ModelFactory/defObjectModel')
const getProp = require('./getProp')
const resultToPOJO = require('../Conversion/resultToPOJO')
const throwError = require('../Misc/throwError')
const throwIfUndefined = require('../Validation/throwIfUndefined')
const validateWithModel = require('../Validation/validateWithModel')

const _SWAP_FIELDS_ARGS_MODEL = defObjectModel(
  'swapFields',
  {
    fieldName1: [String, Symbol],
    fieldName2: [String, Symbol],
    obj: Object
  }
)


/**
 * Swaps values in two properties of an object.
 *
 * Throws an exception if either fieldname is not found, or if obj is not an object
 *
 * @function
 * @curried
 * @category Functional
 * @sig string -> string -> object -> object | EXCEPTION
 * @param {string} fieldName1 - The name of one field to swap
 * @param {string} fieldName2 - The name of the other field to swap
 * @param {object} obj - Object
 * @returns {object}
 * @see swapFieldsResult
 * @example
 *
 * 'use strict'
 * const swapFields = require('@eluvio/elv-js-helpers/Functional/swapFields')
 *
 * const obj = {foo: 1, bar: 2, baz: 3}
 *
 * swapFields('foo', 'bar', obj)    //=> {foo: 2,bar: 1,baz: 3}
 *
 * swapFields('foo', 'qaz', obj)  //=> EXCEPTION: "Property 'qaz' not found"
 *
 * swapFields('foo', 'bar', null)  //=> EXCEPTION: "expecting obj to be Object, got null"
 *
 *
 */

const swapFields = curry(
  (fieldName1, fieldName2, obj) => {
    const validation = resultToPOJO(
      validateWithModel(
        _SWAP_FIELDS_ARGS_MODEL,
        {fieldName1, fieldName2, obj}
      )
    )
    if (!validation.ok) {
      throwError(validation.errMsgs.join('\n'))
    }
    const value1 = throwIfUndefined(
      `Property '${fieldName1}' not found`,
      getProp(fieldName1, obj)
    )
    const value2 = throwIfUndefined(
      `Property '${fieldName2}' not found`,
      getProp(fieldName2, obj)
    )
    return Object.assign(
      obj,
      {
        [fieldName1]: value2,
        [fieldName2]: value1
      }
    )
  }
)

module.exports = swapFields
