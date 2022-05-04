const identity = require('crocks/combinators/identity')
const join = require('ramda/src/join')

const _objBadVal = require('./_objBadVal')

const validator = require('../validator')

// failingValueErrMsg :: ObjectModel -> Object -> String)
// Returns a function that can be used in .assert() to construct a validation error message containing the bad value
const _objBadValErrMsg = valueModel =>
  (result, value) => { // Note: objectmodel.js err msg call actually passes 3 args (result, value, name)
    const [k, v] = _objBadVal(valueModel, value)
    return `key '${k}' points to a value that is an invalid ${valueModel.name} (${
      validator(valueModel)(v).either(join('\n'), identity)
    })`
  }

module.exports = _objBadValErrMsg
