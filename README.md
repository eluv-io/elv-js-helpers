# elv-js-helpers

A collection of Javascript helper functions used by several Eluvio libraries.

**THIS LIBRARY IS CURRENTLY IN PRE-RELEASE: FUNCTION NAMES AND SIGNATURES ARE STILL IN FLUX.** 


## API Documentation
[https://eluv-io.github.io/elv-js-helpers/api.html](https://eluv-io.github.io/elv-js-helpers/api.html)

## Installation

#### Install from NPM:

```
npm install --save @eluvio/elv-js-helpers
```

## Usage

It is possible to import individual items or the entire library, depending on whether code size is a concern.

### Entire library (CommonJS)

```javascript
// namespace entire suite to a const
const H = require('@eluvio/elv-js-helpers')

// create references to particular items in order to avoid needing to use H. prefix
const { etaDurStr, etaTimeStr } = H
const {_boundLowerErrMsg} = H

// Note that the following syntax still causes entire library to be bundled into your project
const { etaDurStr, etaTimeStr } = require('@eluvio/elv-js-helpers')
```

### Entire library (JS Modules)

```javascript
// namespace entire suite to H
import H from '@eluvio/elv-js-helpers'

// create references to particular items in order to avoid needing to use H. prefix
const { etaDurStr, etaTimeStr } = H
const {_boundLowerErrMsg} = H

// Note that the following syntax still causes entire library to be bundled into your project
import { etaDurStr, etaTimeStr }  from '@eluvio/elv-js-helpers'
```

### Individual items (CommonJS)

```javascript
// require in each item directly
const etaDurStr = require('@eluvio/elv-js-helpers/Datetime/etaDurStr')
const etaTimeStr = require('@eluvio/elv-js-helpers/Datetime/etaTimeStr')
const _boundLowerErrMsg = require('@eluvio/elv-js-helpers/ModelAssertion/_boundLowerErrMsg')
```

### Individual items (JS Modules)

```javascript
// import in each item directly
import etaDurStr from '@eluvio/elv-js-helpers/Datetime/etaDurStr'
import etaTimeStr from '@eluvio/elv-js-helpers/Datetime/etaTimeStr'
import _boundLowerErrMsg from '@eluvio/elv-js-helpers/ModelAssertion/_boundLowerErrMsg'
```

### Entire library (browser)

Although not recommended, it is also possible to import the entire library directly into a browser via a `<script>` tag 
pointing to a copy of either `dist/elv-js-helpers.js` or `dist/elv-js-helpers.min.js`. This will create a variable named 
`ElvJsHelpers` in the global namespace. There is no support for importing individual items via a `<script>` tag. (It 
is expected that browser apps would be built using a bundling tool like Webpack/Rollup/Parcel)
```html
<!-- Import entire library as ElvJsHelper -->
<script src="elv-js-helpers.js"></script>
<script type="application/javascript">
    console.log('System locale is: ' + ElvJsHelpers.Datetime.sysLocale())
    console.log('_boundLowerErrMsg(0,true)= "' + ElvJsHelpers.ModelAssertion._boundLowerErrMsg(0,true) + '"')
</script>
```

## Conventions

### Source Files (`src/CATEGORY/*.js`)

 * Each function (or exported constant) has its own source file.
 * Each source file exports exactly 1 item.
 * Files have the same case-sensitive name as the function or constant it defines (with `.js` extension added)
 * Files are stored in subdirectories of `src/` according to category (1 category per subdirectory)

### Naming / Capitalization

#### Abbreviations

* Names tend to err on the side of not abbreviating, prioritizing clarity over brevity:
    * `conditionalCheck` _not_ `condlChk` _(function)_
    * `sysTimezone` _not_ `sysTZ` _(function)_
* When an item name would be cumbersome or excessively long otherwise, abbreviations and/or acronyms are used for words where the meaning remains reasonably clear and obvious:
    * `assertPropMaxGTEMin` _not_ `assertPropertyMaximumGreaterThanOrEqualToMinimum`  _(function)_
    * `defNonEmptyArrModel` _not_ `defineNonEmptyArrayModel`  _(function)_
    * `RE_UTC_TIMESTAMP` _not_ `REGEXP_UNIVERSAL_TIME_COORDINATED_TIMESTAMP` _(constant)_
* A few abbreviations stretch the "reasonably clear and obvious" condition:
    * `ADT` _not_ `AlgebraicDataType` _(category)_
    * `resultToPOJO` _not_ `resultToPlainOldJavascriptObject` _(function)_
    
#### Capitalization (general)
 
 * Compound words that are widely treated as single words do not capitalize the second word:
   * `Datetime` _not_ `DateTime` _(category)_
   * `sysTimezone` _not_ `sysTimeZone` _(function)_
   * `RE_UTC_TIMESTAMP` _not_ `RE_UTC_TIME_STAMP` _(constant)_
 * Acronyms are kept all the same case, either upper or lower depending on kind of item and position within name:
   * `ADT` _not_ `Adt` _(category)_
   * `parseUTCStr` _not_ `parseUtcStr` _(function)_
   * `utcStrToDate` _not_ `uTCStrToDate` _(function)_
   * `etaDurStr` _not_ `eTADurStr` _(function)_
 * For greater legibility, the prefix "non" is treated as a word:
   * `NonBlankStrModel` _not_ `NonblankStrModel` _(model)_
   * `wrapNonArray` _not_ `wrapNonarray` _(function)_

#### Capitalization (by item type)

* **ADTs**: PascalCase (`List`, `Ok`)
* **Categories**: PascalCase (`ModelAssertion`, `ModelFactory`)
* **Constants**: UPPER_SNAKE_CASE (`RE_UTC_TIMESTAMP`)
  * Regular expression names start with "RE_"
* **Models**: PascalCase (`NonBlankStrModel`)
  * Model names always end with "Model"
* **Functions**: camelCase (`mapWithIndex`, `resultUnwrap`)
  * Note that **ADTs** and **Models** are actually functions but are named using PascalCase because they are used more like classes.
  * **ModelFactory** names always start with "def" and end with "Model" (`defArrModel`, `defObjModel`)

#### Private Items

 * Have names beginning with underscore (`_boundLowerErrMsg`)
 * Are not truly private, they are available for use but are filtered from the documentation page unless `Show private` is checked.
 * Contain internal code shared by more than one function but considered too specialized to be useful outside the package



