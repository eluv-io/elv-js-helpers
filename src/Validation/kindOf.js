/**
 * Passthrough for the [kind-of](https://www.npmjs.com/package/kind-of) package
 * _(Copyright © 2020, Jon Schlinkert, MIT License)_
 *
 * Provided for convenience and to encourage standardization.
 *
 * @function
 * @category Validation
 * @sig * -> String
 * @param {*} - The item to evaluate
 * @returns {String} Name of the item's type
 * @example
 *
 * const kindOf = require('@eluvio/elv-js-helpers/Validation/kindOf')
 *
 * kindOf(undefined)                //=> 'undefined'
 *
 * kindOf(null)                     //=> 'null'
 *
 * kindOf(true)                     //=> 'Boolean'
 *
 * kindOf(new Buffer(''))           //=> 'buffer'
 *
 * kindOf(42)                       //=> 'number'
 *
 * kindOf('str')                    //=> 'string'
 *
 * kindOf(arguments)                //=> 'arguments'
 *
 * kindOf({})                       //=> 'object'
 *
 * kindOf(Object.create(null))      //=> 'object'
 *
 * kindOf(new Test())               //=> 'object'
 *
 * kindOf(new Date())               //=> 'date'
 *
 * kindOf([1, 2, 3])                //=> 'array'
 *
 * kindOf(/foo/)                    //=> 'regexp'
 *
 * kindOf(new Error('error'))       //=> 'error'
 *
 * kindOf(function () {})           //=> 'function'
 *
 * kindOf(function * () {})         //=> 'generatorfunction'
 *
 * kindOf(Symbol('str'))            //=> 'symbol'
 *
 * kindOf(new Map())                //=> 'map'
 *
 * kindOf(new WeakMap())            //=> 'weakmap'
 *
 * kindOf(new Set())                //=> 'set'
 *
 * kindOf(new WeakSet())            //=> 'weakset'
 *
 * kindOf(new Int8Array())          //=> 'int8array'
 *
 * kindOf(new Uint8Array())         //=> 'uint8array'
 *
 * kindOf(new Uint8ClampedArray())  //=> 'uint8clampedarray'
 *
 * kindOf(new Int16Array())         //=> 'int16array'
 *
 * kindOf(new Uint16Array())        //=> 'uint16array'
 *
 * kindOf(new Int32Array())         //=> 'int32array'
 *
 * kindOf(new Uint32Array())        //=> 'uint32array'
 *
 * kindOf(new Float32Array())       //=> 'float32array'
 *
 * kindOf(new Float64Array())       //=> 'float64array'
 *
 */
const kindOf = require('kind-of')

module.exports = kindOf
