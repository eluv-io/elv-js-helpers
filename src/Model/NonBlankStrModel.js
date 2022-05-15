const assertAfterCheck = require('../ModelAssertion/assertAfterCheck')
const passesModelCheck = require('../Boolean/passesModelCheck')
const StringModel = require('./StringModel')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is:
 *
 *  * A [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 *  * Is not zero length
 *  * Does not consist solely of whitespace
 *
 * If input passes validations, will return the input (proxied by ObjectModel)
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> String | THROW
 * @param {*} - The input to validate
 * @returns {String} The validated input, proxied by ObjectModel
 * @example
 *
 * const NonBlankStrModel = require('@eluvio/elv-js-helpers/Model/NonBlankStrModel')
 *
 * NonBlankStrModel('foo') //=> 'foo' // Proxied by ObjectModel
 *
 * NonBlankStrModel('  ')  //=> EXCEPTION: 'Value must not be a blank string (got:    )'
 *
 * NonBlankStrModel(42)    //=> EXCEPTION: 'expecting String, got Number 42'
 *
 */
const NonBlankStrModel = StringModel
  .extend()
  .assert(
    ...assertAfterCheck(
      passesModelCheck(StringModel),
      s => s.trim().length > 0,
      'must not be a blank string'
    )
  )
  .as('NonBlankString')

module.exports = NonBlankStrModel
