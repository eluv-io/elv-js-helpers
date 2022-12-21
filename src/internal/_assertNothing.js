// noinspection JSUnusedLocalSymbols
/* eslint-disable no-unused-vars */

const T = require('@eluvio/ramda-fork/src/T')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The returned assertion will always pass, and the error message (which will never be used) is an empty string.
 *
 * @function
 * @private
 * @category ModelAssertion
 * @sig () -> [(* -> Boolean), String]
 *
 * @returns {Array} 2-element array [Function, String]. See description for details.
 *
 * @example
 *
 * _assertNothing() //=> [x => true, '']
 *
 */
const _assertNothing = () => [T, '']

module.exports = _assertNothing
