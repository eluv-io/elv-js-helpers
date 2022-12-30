const identity = require('crocks/combinators/identity')
const join = require('@eluvio/ramda-fork/src/join')
const _objBadVal = require('../Validation/objBadVal')
const validateWithModel = require('../Validation/validateWithModel')

/**
 * Returns a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message for a value that failed to validate against specified Model
 *
 * @function
 * @private
 * @category ModelAssertion
 * @sig Model -> ((Boolean, String) -> String)
 * @param {Model} valueModel - The Model to check values against
 * @returns {Function} Constructs an error message for failed value
 * @example
 *
 * const passesModelCheck = require('@eluvio/elv-js-helpers/Boolean/passesModelCheck')
 *
 * const _objBadValErrMsg = require('@eluvio/elv-js-helpers/ModelAssertion/_objBadValErrMsg')
 *
 * const NonBlankStrModel = require('@eluvio/elv-js-helpers/Model/NonBlankStrModel')
 *
 * const defBasicModel = require('@eluvio/elv-js-helpers/ModelFactory/defBasicModel')
 *
 * const NoBlankValuesObjModel = defBasicModel('NoBlankValuesObj', Object).extend()
 *   .assert(
 *     passesModelCheck(NonBlankStrModel),
 *     _objBadValErrMsg(NonBlankStrModel)
 *   )
 *
 * NoBlankValuesObjModel({foo: '  '}) //=>  EXCEPTION: 'key "foo" points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: "  "))'
 *
 */
const _objBadValErrMsg = valueModel =>
  (result, value) => { // Note: objectmodel.js err msg call actually passes 3 args (result, value, name)
    const [k, v] = _objBadVal(valueModel, value)
    return `key "${k}" points to a value that is an invalid ${valueModel.name} (${
      validateWithModel(valueModel)(v).either(join('\n'), identity)
    })`
  }

module.exports = _objBadValErrMsg
