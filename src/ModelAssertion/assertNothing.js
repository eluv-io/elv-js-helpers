// noinspection JSUnusedLocalSymbols
/* eslint-disable no-unused-vars */

const T = require('ramda/src/T')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The returned assertion will always pass, and the error message (which will never be used) is an empty string.
 *
 * @function
 * @category ModelAssertion
 * @sig () -> [(* -> Boolean), String]
 * @returns {Array} 2-element array [Function, String]. See description for details.
 * @example
 *
 * const assertNothing = require('@eluvio/elv-js-helpers/ModelAssertion/assertNothing')
 *
 * assertNothing() //=> [x => true, '']
 *
 */
const assertNothing = () => [T, '']

module.exports = assertNothing
