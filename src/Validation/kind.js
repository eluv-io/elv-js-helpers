const _kindOf = require('kind-of')

const _FORMATTED_KINDS = {
  arguments: 'arguments',
  array: 'Array',
  bigint: 'BigInt',
  bigint64array: 'BigInt64Array',
  biguint64array: 'BigUint64Array',
  boolean: 'Boolean',
  buffer: 'Buffer',
  date: 'Date',
  error: 'Error',
  float32array: 'Float32Array',
  float64array: 'Float64Array',
  function: 'Function',
  generatorfunction: 'GeneratorFunction',
  int16array: 'Int16Array',
  int32array: 'Int32Array',
  int8array: 'Int8Array',
  map: 'Map',
  null: 'null',
  number: 'Number',
  object: 'Object',
  promise: 'Promise',
  regexp: 'RegExp',
  set: 'Set',
  string: 'String',
  symbol: 'Symbol',
  uint16array: 'Uint16Array',
  uint32array: 'Uint32Array',
  uint8array: 'Uint8Array',
  uint8clampedarray: 'Uint8ClampedArray',
  undefined: 'undefined',
  weakmap: 'WeakMap',
  weakref: 'WeakRef',
  weakset: 'WeakSet'
}

/**
 * Modifies the [kind-of](https://www.npmjs.com/package/kind-of) package
 * _(Copyright © 2020, Jon Schlinkert, MIT License)_ by applying PascalCase capitalization to kinds that have
 * corresponding PascalCase Javascript names
 *
 * @function
 * @category Validation
 * @sig * -> String
 * @param {*} val - The item to evaluate
 * @returns {String} Name of the item's type
 * @example
 *
 * const kind = require('@eluvio/elv-js-helpers/Validation/kind')
 *
 * kind(undefined)                //=> 'undefined'
 *
 * kind(null)                     //=> 'null'
 *
 * kind(true)                     //=> 'Boolean'
 *
 * kind(new Buffer(''))           //=> 'Buffer'
 *
 * kind(42)                       //=> 'Number'
 *
 * kind('str')                    //=> 'String'
 *
 * kind(arguments)                //=> 'arguments'
 *
 * kind({})                       //=> 'Object'
 *
 * kind(Object.create(null))      //=> 'Object'
 *
 * kind(new Date())               //=> 'Date'
 *
 * kind([1, 2, 3])                //=> 'Array'
 *
 * kind(/foo/)                    //=> 'Regexp'
 *
 * kind(new Error('error'))       //=> 'Error'
 *
 * kind(function () {})           //=> 'Function'
 *
 * kind(function * () {})         //=> 'GeneratorFunction'
 *
 * kind(Symbol('str'))            //=> 'Symbol'
 *
 * kind(new Map())                //=> 'Map'
 *
 * kind(new WeakMap())            //=> 'WeakMap'
 *
 * kind(new Set())                //=> 'Set'
 *
 * kind(new WeakSet())            //=> 'WeakSet'
 *
 * kind(new Int8Array())          //=> 'Int8Array'
 *
 * kind(new Uint8Array())         //=> 'Uint8Array'
 *
 * kind(new Uint8ClampedArray())  //=> 'Uint8ClampedArray'
 *
 * kind(new Int16Array())         //=> 'Int16Array'
 *
 * kind(new Uint16Array())        //=> 'Uint16Array'
 *
 * kind(new Int32Array())         //=> 'Int32Array'
 *
 * kind(new Uint32Array())        //=> 'Uint32Array'
 *
 * kind(new Float32Array())       //=> 'Float32Array'
 *
 * kind(new Float64Array())       //=> 'Float64Array'
 *
 */
const kind = val => {
  const lowerCaseKind = _kindOf(val)
  return _FORMATTED_KINDS[lowerCaseKind] || lowerCaseKind // fallback if unexpected kind not in _FORMATTED_KINDS
}

module.exports = kind
