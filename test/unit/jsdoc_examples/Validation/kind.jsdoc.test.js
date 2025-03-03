// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const kind = TH.requireSrcFile('Validation/kind')

describe('kind JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    kind(undefined).should.eql('undefined')
    kind(null).should.eql('null')
    kind(true).should.eql('Boolean')
    kind(Buffer.from(' ')).should.eql('Buffer')
    kind(42).should.eql('Number')
    kind('str').should.eql('String')
    kind(arguments).should.eql('arguments')
    kind({}).should.eql('Object')
    kind(Object.create(null)).should.eql('Object')
    kind(new Date()).should.eql('Date')
    kind([1, 2, 3]).should.eql('Array')
    kind(/foo/).should.eql('RegExp')
    kind(new Error('error')).should.eql('Error')
    kind(function () {}).should.eql('Function')
    kind(function* () {}).should.eql('GeneratorFunction')
    kind(Symbol('str')).should.eql('Symbol')
    kind(new Map()).should.eql('Map')
    kind(new WeakMap()).should.eql('WeakMap')
    kind(new Set()).should.eql('Set')
    kind(new WeakSet()).should.eql('WeakSet')
    kind(new Int8Array()).should.eql('Int8Array')
    kind(new Uint8Array()).should.eql('Uint8Array')
    kind(new Uint8ClampedArray()).should.eql('Uint8ClampedArray')
    kind(new Int16Array()).should.eql('Int16Array')
    kind(new Uint16Array()).should.eql('Uint16Array')
    kind(new Int32Array()).should.eql('Int32Array')
    kind(new Uint32Array()).should.eql('Uint32Array')
    kind(new Float32Array()).should.eql('Float32Array')
    kind(new Float64Array()).should.eql('Float64Array')
  })
})
