// ---------------------------------------------------------
// Arrays Intro
// ---------------------------------------------------------

// TypeScript has an array literal syntax that makes it easy
// to declare and instantiate an array at the same time

const myArray = [1, 2, 3, 4];

// Arrays in TypeScript can hold a mixture of values

const mixedArray = [1, '2', { foo: 'bar'}, x => x * 2];

// ---------------------------------------------------------
// Iteration
// ---------------------------------------------------------

export const containsNumberLoop = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == number) {
      return true;
    }
  }

  return false;
}

export const containsNumberForEach = (array) => {

};

// ---------------------------------------------------------
// Map
// ---------------------------------------------------------

export const multiplyByTwo = (array) => {
  return array.map(x => x * 2);
};


// ---------------------------------------------------------
// Filter
// ---------------------------------------------------------

export const filterByEven = (array) => {
  return array.filter(x => x % 2 == 0);
};


// ---------------------------------------------------------
// Reduce
// ---------------------------------------------------------

export const sum = (array) => {

};