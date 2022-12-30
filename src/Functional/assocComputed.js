const curry = require('./curry')

const assoc = require('@eluvio/ramda-fork/src/assoc')

/**
 * Returns a shallow copy of object with a specified property set to computeFn(obj)
 *
 * Note that if `obj` is an [ObjectModel](http://objectmodel.js.org/) instance the return value will be a plain
 * Javascript object without model constraints.
 *
 * @function
 * @curried
 * @category Functional
 * @sig String -> Function -> Object -> Object
 * @param {String} prop - The name of the property to set
 * @param {Function} computeFn - The function to use to compute value of `prop`
 * @param {Object} obj - The object to copy and use as input to `computeFn`
 * @returns {Object}
 * @example
 *
 * const assocComputed = require('@eluvio/elv-js-helpers/Functional/assocComputed')
 *
 * assocComputed('bar', x => x.foo * 2, {foo: 2}) //=> {foo: 2, bar: 4}
 *
 * // function is curried: call with fewer than 3 args to obtain a narrower function
 * const addTax = assocComputed('tax', x => x.price * 0.05)
 *
 * addTax({product: 'towel', price: 1})     //=> {product: 'towel', price: 1, tax: 0.05}
 *
 */
const assocComputed = curry(
  (prop, computeFn, obj) => assoc(
    prop,
    computeFn(obj),
    obj
  )
)

module.exports = assocComputed
