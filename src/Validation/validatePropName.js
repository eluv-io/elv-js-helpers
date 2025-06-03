'use strict'
const Err = require('../ADT/Err')
const Ok = require('../ADT/Ok')

const curry = require('../Functional/curry')
const kind = require('./kind')

/**
 * Validates that property name exists in an Object.
 *
 * Returns  a
 * [Crocks Result](https://crocks.dev/docs/crocks/Result.html) instance. This returned instance will be an
 * [Ok](https://crocks.dev/docs/crocks/Result.html#ok) wrapping the field name if the property exists,
 * or an [Err](https://crocks.dev/docs/crocks/Result.html#err) wrapping an array containing an error message if property does not exist or if
 * obj is not an Object (or if fieldname is not a string or symbol).
 *
 * Function is curried, it can be called with just `obj` to return a validation function.
 *
 * @function
 * @curried
 * @category Validation
 * @sig Object -> String -> Result [String]
 * @param {Object} obj - An Object to check
 * @param {String | Symbol} propName - A property name to check
 * @returns {Result}
 * @example
 *
 * 'use strict'
 * const validatePropName = require('@eluvio/elv-js-helpers/Validation/validatePropName')
 *
 * const resultToPOJO = require('@eluvio/elv-js-helpers/Conversion/ResultToPOJO')
 *
 * const myObj = {'foo': 1, 'bar': 2}
 *
 * const goodResult = validatePropName(myObj, 'foo')
 * goodResult.inspect()                             //=> 'Ok "foo"'
 * resultToPOJO(goodResult).ok                      //=> true
 * resultToPOJO(goodResult).value                   //=> 'foo'
 *
 * const errBadFieldName = validatePropName(myObj, 'baz')
 * resultToPOJO(errBadFieldName).ok                 //=> false
 * resultToPOJO(errBadFieldName).errMsgs            //=> ['property "baz" not found']
 *
 * const errNonObject = validatePropName(null, 'foo')
 * resultToPOJO(errNonObject).ok                    //=> false
 * resultToPOJO(errNonObject).errMsgs               //=> ['Expecting object, got null']
 *
 * // function is curried, call with just 1 argument to return a more specific validation function
 * const validateNameForMyObject = validatePropName(myObj)
 *
 * validateNameForMyObject('bar').inspect()         //=> 'Ok "bar"'
 *
 * resultToPOJO(validateNameForMyObject(0)).ok      //=> false
 *
 * resultToPOJO(validateNameForMyObject('baz')).ok  //=> false
 */
const validatePropName = curry(
  (obj, propName) => kind(obj) === 'Object'
    ? Object.hasOwn(obj, propName)
      ? Ok(propName)
      : Err([`property "${propName}" not found`])
    : Err(`Expecting object, got ${kind(obj)}`)
)


module.exports = validatePropName
