// noinspection JSValidateTypes

const {ObjectModel} = require('objectmodel')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 *  * An integer
 *  * Greater than a specified lower bound (if specified) or equal to the lower bound (if lower inclusivity is specified)
 *  * Less than a specified upper bound (if specified) or equal to the upper bound (if upper inclusivity is specified)
 *
 * Note that it is possible to specify no bounds at all, in which case the returned model will only check that input is
 * an integer.
 *
 * @function
 * @since v0.0.1
 * @category ModelFactory
 * @sig String -> Object -> (* -> Object | THROW)
 * @param {String} name - the name of the generated model
 * @param {Object} def - The definition (field structure) of the model to generate
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * const CartonEggCountModel = defBoundedIntModel('CartonEggCount', 0, 12, true, true)
 *
 * CartonEggCountModel(-1)     //=> EXCEPTION: 'Value must be >= 0 (got: -1)'
 *
 * CartonEggCountModel(0)      //=> 0 // Proxied by ObjectModel
 *
 * CartonEggCountModel(4.2)    //=> EXCEPTION: 'Value must be an integer (got: 4.2)'
 *
 * CartonEggCountModel(6)      //=> 6 // Proxied by ObjectModel
 *
 * CartonEggCountModel(42)     //=> EXCEPTION: 'Value must be <= 12 (got: 42)'
 *
 * CartonEggCountModel('foo')  //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const defObjModel = (name, def)=> ObjectModel(def).as(name)

module.exports = defObjModel
