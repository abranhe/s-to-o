/**
 * Convert an string into an object.
 * 
 * @param {string} input the string object
 * @returns {object} the object similar to JSON.parse
 * 
 * @example
 * ```
 * import sTo = require('s-to-o');
 * 
 * sTo('a: a, b: b, c: 3, d: 7')
 * // => { a: 'a', b: 'b', c: 3, d: 7 }
 * ```
 */
declare function sTo(input: string): object

export = sTo;