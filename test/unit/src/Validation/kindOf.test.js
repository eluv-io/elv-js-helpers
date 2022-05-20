// unit test for kindOf.js

const chai = require('chai')
chai.should()

const kindOf = require('../../../../src/Validation/kindOf')

describe('kindOf', () => {
  it('should work as expected', () => {
    kindOf(undefined).should.equal('undefined')
    kindOf(null).should.equal('null')
    kindOf(true).should.equal('boolean')
    kindOf(new Buffer('')).should.equal('buffer')
    kindOf(42).should.equal('number')
    kindOf('str').should.equal('string')
    kindOf(arguments).should.equal('arguments')
    kindOf({}).should.equal('object')
    kindOf(Object.create(null)).should.equal('object')
    kindOf(new Date()).should.equal('date')
    kindOf([1, 2, 3]).should.equal('array')
    kindOf(/foo/).should.equal('regexp')
    kindOf(new Error('error')).should.equal('error')
    kindOf(function () {
    }).should.equal('function')
    kindOf(function* () {
    }).should.equal('generatorfunction')
    kindOf(Symbol('str')).should.equal('symbol')
    kindOf(new Map()).should.equal('map')
    kindOf(new WeakMap()).should.equal('weakmap')
    kindOf(new Set()).should.equal('set')
    kindOf(new WeakSet()).should.equal('weakset')
    kindOf(new Int8Array()).should.equal('int8array')
    kindOf(new Uint8Array()).should.equal('uint8array')
    kindOf(new Uint8ClampedArray()).should.equal('uint8clampedarray')
    kindOf(new Int16Array()).should.equal('int16array')
    kindOf(new Uint16Array()).should.equal('uint16array')
    kindOf(new Int32Array()).should.equal('int32array')
    kindOf(new Uint32Array()).should.equal('uint32array')
    kindOf(new Float32Array()).should.equal('float32array')
    kindOf(new Float64Array()).should.equal('float64array')
  })
})
