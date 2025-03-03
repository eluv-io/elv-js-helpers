'use strict'
const assertAfterCheck = require('../ModelAssertion/assertAfterCheck')
const isBase58String = require('../Boolean/isBase58String')
const passesModelCheck = require('../Boolean/passesModelCheck')
const NonBlankStrModel = require('./NonBlankStrModel')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is a non-blank
 * [Base58-encoded](https://en.wikipedia.org/wiki/Binary-to-text_encoding#Base58) string.
 *
 * If input passes validations, will return the input
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> String | THROW
 * @param {*} - The input to validate
 * @returns {String} The validated input
 * @example
 *
 * 'use strict'
 * const Base58StrModel = require('@eluvio/elv-js-helpers/Model/Base58StrModel')
 *
 * Base58StrModel('foo') //=> 'foo'
 *
 * Base58StrModel('FOO') //=> EXCEPTION: 'Value is not a valid Base58 string (got: "FOO")'
 *
 * Base58StrModel('  ')  //=> EXCEPTION: 'Value must not be a blank string (got: "  ")'
 *
 * Base58StrModel(42)    //=> EXCEPTION: 'expecting String, got Number 42'
 *
 */
const Base58StrModel = NonBlankStrModel
  .extend()
  .assert(
    ...assertAfterCheck(
      passesModelCheck(NonBlankStrModel),
      isBase58String,
      'is not a valid Base58 string'
    )
  )
  .as('Base58String')

module.exports = Base58StrModel
