'use strict'
const assertAfterCheck = require('./assertAfterCheck')
const curry = require('../Functional/curry')
const format = require('../Conversion/format')
const isObject = require('../Boolean/isObject')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if the input satisfies the specified property relationship OR **the input is not an object**
 * * `false` if the input **is an object** AND violates the specified property relationship
 *
 * This means that the assertion will PASS if the input is not a valid instance of the Model to be bounded. The purpose
 * of this is to prevent redundant errors, e.g. Value is not an Object, 'foo' must be greater than 'bar'.
 *
 * The second element is either an error string or a function to generate an error message. If it is a function, it will
 * get called by ObjectModel when it validates a Model and fails, passing in the assertion result (generally `false`),
 * the failing value, and any attribute name(s) that were traversed to access the value.
 *
 * @function
 * @curried
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> ((b, a) -> Boolean) -> String -> String -> String -> [(* -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Function} checkFn - A 2-input function taking value of object's **propertyName2** FIRST, then object's **propertyName1** SECOND (this is to allow more intuitive use with the way isGT / isGTE etc are curried)
 * @param {String} reqDesc - Description of required relation, e.g. 'must be greater than' - this will be used in error messages e.g. 'propertyName1 must be greater than propertyName2'
 * @param {String} propertyName1 - Name of attribute to check against `propertyName2`
 * @param {String} propertyName2 - Name of attribute to check against `propertyName1`
 * @returns {Array} 2-element array [Function, Function | String]. See description for details.
 * @example
 *
 * 'use strict'
 * const assertPropRel = require('@eluvio/elv-js-helpers/ModelAssertion/assertPropRel')
 *
 * const defObjectModel = require('@eluvio/elv-js-helpers/ModelFactory/defObjectModel')
 * const isGTE = require('@eluvio/elv-js-helpers/Boolean/isGTE')
 *
 * const NumLimitsModel = defObjectModel(
 *   'NumberLimits',
 *   {
 *     min: Number,
 *     max: Number
 *   }
 * ).extend().assert(
 *   ...assertPropRel(
 *     isGTE,
 *     'must be greater than or equal to',
 *     'max',
 *     'min'
 *   )
 * )
 *
 * NumLimitsModel({min:1, max:2})  //=> {min:1, max:2}
 *
 * NumLimitsModel({min:2, max:1})  //=> EXCEPTION: 'max (1) must be greater than or equal to min (2)'
 *
 */
const assertPropRel = curry(
  (checkFn, reqDesc, propertyName1, propertyName2) =>
    assertAfterCheck(
      isObject,
      x => checkFn(x[propertyName2], x[propertyName1]),
      (result, x) => `${propertyName1} (${format(x[propertyName1])}) ${reqDesc} ${propertyName2} (${format(x[propertyName2])})`
    )
)

module.exports = assertPropRel
