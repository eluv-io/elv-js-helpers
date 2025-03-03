'use strict'
const isEmpty = require('./isEmpty')
const negate = require('../Functional/negate')

/**
 * Negated version of the [Ramda `isEmpty` function](https://ramdajs.com/docs/#isEmpty) _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Returns `false` if a value is the empty value for its type, `true` otherwise.
 *
 * @function
 * @curried
 * @category Boolean
 * @sig a -> -> Boolean
 * @param {*} - The value to test
 * @returns {Boolean}
 * @example
 *
 * 'use strict'
 * const isNotEmpty = require('@eluvio/elv-js-helpers/Boolean/isNotEmpty')
 *
 * isNotEmpty([42])                //=> true
 *
 * isNotEmpty([])                  //=> false
 *
 * isNotEmpty('')                  //=> false
 *
 * isNotEmpty(null)                //=> true
 *
 * isNotEmpty({})                  //=> false
 *
 * isNotEmpty({foo: 'bar'})        //=> true
 */
const isNotEmpty = negate(isEmpty)

module.exports = isNotEmpty
