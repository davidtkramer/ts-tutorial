// ---------------------------------------------------------
// Values
// ---------------------------------------------------------

// Let's take a quick look at four types of values in
// TypeScript: numbers, strings, booleans, and undefined
// values

// ---------------------------------------------------------
// Numbers
// ---------------------------------------------------------

console.log(5);
console.log(5 + 5);
console.log(5 * (4 / 2));

// ---------------------------------------------------------
// Strings
// ---------------------------------------------------------

// Single quote strings
console.log('single');

// Double quote strings
console.log("double");

// Backtick strings allow us to interpolate other values
// and expressions
console.log(`${2} plus ${3} equals ${2 + 3}`);

// ---------------------------------------------------------
// Booleans
// ---------------------------------------------------------

console.log('dog' != 'cat');
console.log('dog' == 'cat');
console.log(1 > 0);
console.log(0 < 1);
console.log(true || false);
console.log(true && false);

// ---------------------------------------------------------
// Empty Values
// ---------------------------------------------------------

// JavaScript and TypeScript have two special values that
// indicate the absence of a "real" value: null and
// undefined

console.log(null);
console.log(undefined);