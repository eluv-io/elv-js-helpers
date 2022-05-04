
const _objBadKey = require('./_objBadKey')

// failingKeyErrMsg :: ObjectModel -> Object -> String)
// Returns a function that can be used in .assert() to construct a validation error message containing the bad key
const _objBadKeyErrMsg = keyModel =>
  // eslint-disable-next-line no-unused-vars
  (result, value) => `invalid property name '${_objBadKey(keyModel, value)}' (is not a valid ${keyModel.name})`


module.exports = _objBadKeyErrMsg
