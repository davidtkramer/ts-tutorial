// ---------------------------------------------------------
// Functions Intro
// ---------------------------------------------------------

// TypeScript has two types of functions:

// Named function
export function multiplyByTwo(x) {
  return x * 2;
}

// Anonymous function (a.k.a. lambda function)
(x) => {
  return x * 3;
}

// Curly braces and return can be omitted with anonymous
// functions that contain a single expression.
(x) => x * 3;



// ---------------------------------------------------------
// Functions as Values
// ---------------------------------------------------------

// In TypeScript, functions are values. This means they can
// be assigned to variables, stored in arrays, passed as
// arguments to functions, etc.

export const square = (x) => x * x;



// ---------------------------------------------------------
// Higher-order Functions
// ---------------------------------------------------------

// We can use the fact that functions are values to create
// higher-order functions. A higher-order function is a
// fancy name for a function that accepts a function as a
// parameter or a function whose return value is a function.

export const map = (mapperFunction, array) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let mappedValue = mapperFunction(array[i]);
    result.push(mappedValue);
  }

  return result;
}

// Let's create a filter function that returns a new array
// with all elements that pass the check implemented by the
// filterFunction. Write a test first before implementing
// the body of the for loop below.

export const filter = (filterFunction, array) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {

  }

  return result;
}



// ---------------------------------------------------------
// Closures
// ---------------------------------------------------------

// Higher order functions enable an interesting language
// feature called closures. A closure is a function
// that "remembers" the environment in which it was
// declared.

export const makeBobGreeter = () => {
  const name = 'Bob';
  const greeter = () => {
    return 'Hello ' + name;
  }
  return greeter;
}

// Let's make a new function that can greet anyone.

export const makeGreeter = () => {};

// Let's make a function that can dynamically create
// adder functions

export const makeAdder = () => {};

// Could we refactor the map function from earlier to take
// advantage of closures?
