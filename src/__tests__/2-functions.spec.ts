import {
  multiplyByTwo, square, map, filter, makeBobGreeter,
  makeGreeter,
} from '../2-functions';

// ---------------------------------------------------------
// Functions Intro
// ---------------------------------------------------------

describe('named and anonymous functions', () => {
  test('multiplyByTwo', () => {
    const result = multiplyByTwo(2);
    expect(result).toBe(4);
  });
});



// ---------------------------------------------------------
// Functions as Values
// ---------------------------------------------------------

describe('functions as values', () => {
  test('squares the given number', () => {
    expect(square(2)).toBe(4);
  });
});



// ---------------------------------------------------------
// Higher-order Functions
// ---------------------------------------------------------

describe('higher order functions', () => {
  test('adds ten to each element of the array', () => {
    const array = [1, 2, 3, 4];
    const addTen = (x) => x + 10;

    const tenAdded = map(addTen, array);
    expect(tenAdded).toEqual([11, 12, 13, 14]);
  });

  test('squares each element of the array', () => {
    const array = [1, 2, 3, 4];
    const square = (x) => x * x;

    const squared = map(square, array);
    expect(squared).toEqual([1, 4, 9, 16]);
  });


  test('', () => {
    // try making your own mapper function and implement a test for it
  })

  test('filters elements using the provided filter function', () => {
    // implement test
  });
});



// ---------------------------------------------------------
// Closures
// ---------------------------------------------------------

describe('closures', () => {
  test('greets bob', () => {
    const greeter = makeBobGreeter();
    const greeting = greeter();
    expect(greeting).toBe('Hello Bob');
  });

  test('greets anyone', () => {
    // implement test
  });

  test('makeAdder', () => {
    // implement test
  });
});
