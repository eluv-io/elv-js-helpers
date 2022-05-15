const assertAfterCheck = require('./assertAfterCheck')

const isObject = require('../Boolean/isObject')

const format = require('../Conversion/format')

const curry = require('../Functional/curry')

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
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> ((a, b) -> Boolean) -> String -> String -> String -> [(* -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Function} checkFn -
 * @param {String} reqDesc - description of required relation, e.g. 'must be greater than'
 * @param {String} propertyName1 -
 * @param {String} propertyName2 -
 * @returns {Array} 2-element array [Function, Function | String]. See description for details.
 * @example
 *
 * const assertPropRel = require('@eluvio/elv-js-helpers/ModelAssertion/assertPropRel')
 *
 * TODO add example
 *
 */
const assertPropRel = curry(
  (checkFn, reqDesc, propertyName1, propertyName2) =>
    assertAfterCheck(
      isObject,
      x => checkFn(x[propertyName1], x[propertyName2]),
      x => `${propertyName1} (${format(x[propertyName1])}) ${reqDesc} ${propertyName2} (${format(x[propertyName2])})`
    )
)

module.exports = assertPropRel
