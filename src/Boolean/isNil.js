const kind = require('../Validation/kind')

const _NIL_KINDS = ['null', 'undefined']

/**
 * Returns `true` if value is `null` or `undefined`, otherwise returns `false`
 *
 * Copies functionality of the Ramda function of the same name _(Copyright © 2013-2020 Scott Sauyet and Michael Hurley)_
 *
 * @function
 * @category Boolean
 * @sig * -> Boolean
 * @param {*} value - the value to test
 * @returns {Boolean}
 * @example
 *
 * const isNil = require('@eluvio/elv-js-helpers/Boolean/isNil')
 *
 * isNil()                //=> true
 *
 * isNil(undefined)       //=> true
 *
 * isNil(null)            //=> true
 *
 * isNil(42)              //=> false
 *
 * // extra argument ignored:
 * isNil(42, undefined)   //=> false
 *
 * // extra argument ignored:
 * isNil(undefined, 42)   //=> true
 *
 */
const isNil = value => _NIL_KINDS.includes(kind(value))

module.exports = isNil
