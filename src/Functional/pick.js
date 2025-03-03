'use strict'
/**
 * Passthrough for the `pick()` [Crocks](https://crocks.dev/) helper function
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * Not to be confused with the `pick` function from [Ramda](https://ramdajs.com/docs/#), although functionality is similar.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Accepts a list of keys and an object then returns a partial shallow copy of the object with only the specified keys.
 *
 * @function
 * @curried
 * @category Functional
 * @sig [String] -> Object -> Object
 * @param {String[]} - A list of keys to include
 * @param {Object} - The object to copy from
 * @returns {Object} A shallow copy of the original object with only the specified keys
 * @example
 *
 * 'use strict'
 * const pick = require('@eluvio/elv-js-helpers/Functional/pick')
 *
 * const person = {
 *   firstName: 'Arthur',
 *   middleName: 'Philip',
 *   lastName:  'Dent',
 *   species: 'Human'
 * }
 *
 * pick(['firstName', 'lastName'], person)    //=>  {firstName: 'Arthur', lastName:  'Dent'}
 *
 * // function is curried, call with just first param to return a narrower function:
 * const speciesPicker = pick(['species'])
 *
 * speciesPicker(person)                      //=>  {species: 'Human'}
 *
 */
const pick = require('crocks/helpers/pick')

module.exports = pick
