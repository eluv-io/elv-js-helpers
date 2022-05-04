const assertMatchesRegex = require('./assertMatchesRegex')
const StringModel = require('./StringModel')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 *  * Matches the specified regex
 *
 * @function
 * @since v0.0.1
 * @category ModelFactory
 * @sig String -> RexExp -> (* -> String | THROW)
 * @param {String} name - the name of the generated model
 * @param {RegExp} regex - The regex that must be matched
 * @returns {Function} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * const UUIDStringModel = defRegexMatchedStrModel('UUIDString', /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
 *
 * UUIDStringModel('12345678-90ab-cdef-0123-4567890abcde')      //=> '12345678-90ab-cdef-0123-4567890abcde' // Proxied by ObjectModel
 *
 * UUIDStringModel('foo')  //=> EXCEPTION: 'Value is not in valid format or contains illegal characters (must match regular expression: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/) (got: foo)'
 *
 * UUIDStringModel(42)    //=> EXCEPTION: 'Expecting String, got Number 42'
 *
 *
 */
const defRegexMatchedStrModel = (name, regex) =>
  StringModel
    .extend()
    .assert(
      ...assertMatchesRegex(
        StringModel,
        regex
      )
    )
    .as(name)

module.exports = defRegexMatchedStrModel
