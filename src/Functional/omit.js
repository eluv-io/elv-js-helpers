/**
 * Passthrough for the `omit()` [Crocks](https://crocks.dev/docs/functions/helpers.html#omit) function
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Takes an array of strings and an object and returns a shallow copy of object with matching keys removed, as well
 * as any keys pointing to `undefined`.
 *
 * @function
 * @curried
 * @category Functional
 * @sig [ String ] -> Object -> Object
 * @param {Array<string>} - A list of keys to omit
 * @param {Object} - An object to process
 * @returns {Object} A shallow copy of object with specified keys removed (as well as any keys pointing to `undefined`)
 * @example
 *
 * const omit = require('@eluvio/elv-js-helpers/Functional/omit')
 *
 * const myObject = {foo: "f", bar: "b"}
 *
 * omit(['foo'], myObject) //=> {bar: 'b'}
 */
const omit = require('crocks/helpers/omit')

module.exports = omit
