* Add examples for Async
* Add method assertAfterChecks([]) to remove need to duplicate previous checks when chaining multiple assertions
* (or add another way to compose model assertions that will short-circuit later ones)
 * Check for leftover old test filenames
 * Test out import/require in various environments
 * Final pass through function names - abbrev AddPreProcessFn2?
 * Change convention for Err to use Err([new Error('msg')]) to make stack traces available when debugging
 * Disallow infinity for number models
 * node version >= 16 check
 * allow assertPropRel to take a function for reqDesc
 * getBadPair, change sig of errFn passed in to assertOrdered to receive 2 bad values instead of entire array
 * get rid of swapFields?
 * better error message for models with union data type fields (collect why each fails?) 
 * defObjModel/defSealedObjModel - short-circuit validations if non-object passed in
