// unit test for kind.js

const chai = require('chai')
chai.should()

const kind = require('../../../../src/Validation/kind')

describe('kind', () => {
  it('should work as expected', () => {
    kind(undefined).should.equal('undefined')
    kind(null).should.equal('null')
    kind(true).should.equal('Boolean')
    kind(new Buffer('')).should.equal('Buffer')
    kind(42).should.equal('Number')
    kind('str').should.equal('String')
    kind(arguments).should.equal('arguments')
    kind({}).should.equal('Object')
    kind(Object.create(null)).should.equal('Object')
    kind(new Date()).should.equal('Date')
    kind([1, 2, 3]).should.equal('Array')
    kind(/foo/).should.equal('RegExp')
    kind(new Error('error')).should.equal('Error')
    kind(function () {
    }).should.equal('Function')
    kind(function* () {
    }).should.equal('GeneratorFunction')
    kind(Symbol('str')).should.equal('Symbol')
    kind(new Map()).should.equal('Map')
    kind(new WeakMap()).should.equal('WeakMap')
    kind(new Set()).should.equal('Set')
    kind(new WeakSet()).should.equal('WeakSet')
    kind(new Int8Array()).should.equal('Int8Array')
    kind(new Uint8Array()).should.equal('Uint8Array')
    kind(new Uint8ClampedArray()).should.equal('Uint8ClampedArray')
    kind(new Int16Array()).should.equal('Int16Array')
    kind(new Uint16Array()).should.equal('Uint16Array')
    kind(new Int32Array()).should.equal('Int32Array')
    kind(new Uint32Array()).should.equal('Uint32Array')
    kind(new Float32Array()).should.equal('Float32Array')
    kind(new Float64Array()).should.equal('Float64Array')
  })
})
