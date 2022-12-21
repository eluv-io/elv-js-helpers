const identity = require('crocks/combinators/identity')
const join = require('@eluvio/ramda-fork/src/join')

const _objBadVal = require('./_objBadVal')

const validator = require('../validator')

/**
 * Returns a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message for a value that failed to validate against specified model
 *
 * @function
 * @private
 * @category ModelAssertion
 * @sig Model -> ((Boolean, String) -> String)
 * @param {Model} valueModel - The model to check values against
 * @returns {Function} Constructs an error message for failed value
 *
 * @example
 *
 * const {BasicModel} = require('objectmodel')
 *
 * const NoBlankValuesObjModel = BasicModel(Object).extend()
 *   .assert(
 *     checkVsModel(NonBlankStrModel),
 *     _objBadValErrMsg(NonBlankStrModel)
 *   )
 *   .as('NoBlankValuesObj')
 *
 * NoBlankValuesObjModel({foo: '  '}) //=>  EXCEPTION: 'key 'foo' points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got:   ))'
 *
 */
const _objBadValErrMsg = valueModel =>
  (result, value) => { // Note: objectmodel.js err msg call actually passes 3 args (result, value, name)
    const [k, v] = _objBadVal(valueModel, value)
    return `key '${k}' points to a value that is an invalid ${valueModel.name} (${
      validator(valueModel)(v).either(join('\n'), identity)
    })`
  }

module.exports = _objBadValErrMsg
