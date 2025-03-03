'use strict'
const { v4: uuidv4 } = require('uuid')

/**
 * Passthrough for the `v4()` function from [uuid](https://github.com/uuidjs/uuid)
 * _(Copyright © 2010-2020 Robert Kieffer and other contributors, MIT license) to generate a random UUID.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [uuid](https://www.npmjs.com/package/uuid)
 * package as a dependency.
 *
 * The UUID generated will have lower case letters for hex digits.
 *
 * @function
 * @category Functional
 * @sig () -> a
 * @returns {string} The uuid
 * @example
 *
 * 'use strict'
 * const uuid = require('@eluvio/elv-js-helpers/Misc/uuid')
 *
 * const RE_UUID_LOWER_CASE = require('@eluvio/elv-js-helpers/Validation/RE_UUID_LOWER_CASE')
 *
 * const u = uuid()
 * u.length                    //=> 36
 * RE_UUID_LOWER_CASE.test(u)  //=> true
 */
const uuid = () => uuidv4()

module.exports = uuid
