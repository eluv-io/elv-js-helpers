'use strict'

const immer = require('immer')

module.exports = immer

// * Passthrough for the [`immer`](https://www.npmjs.com/package/immer) package
// * _(Copyright (c) 2017 Michel Weststrate, MIT license)_
// *
// * Allows users of `elv-js-helpers` to use the package without adding the `immer`
// * package as a dependency.
// *
// * Defines the following exports:
// *
// * * produce
// * * Immer,
// * * applyPatches,
// * * castDraft,
// * * castImmutable,
// * * createDraft,
// * * current,
// * * enableMapSet,
// * * enablePatches,
// * * finishDraft,
// * * freeze,
// * * immerable,
// * * isDraft,
// * * isDraftable,
// * * nothing,
// * * original,
// * * produce,
// * * produceWithPatches,
// * * setAutoFreeze,
// * * setUseStrictShallowCopy
// *
// NOTE: YOU MUST USE JAVASCRIPT STRICT MODE TO THROW ERRORS WHEN CODE TRIES TO CHANGE AN IMMUTABLE OBJECT, ELSE
// ASSIGNMENT WILL FAIL SILENTLY!