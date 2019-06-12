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

export const sumArrayOne = (numbers: number[]) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

export const sumArrayTwo = (numbers: number[]) => {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
};

export const sumArrayThree = (numbers: number[]) => {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  return sum;
};



// ---------------------------------------------------------
// Map
// ---------------------------------------------------------

export const multiplyByTwo = (numbers: number[]) => {
  return numbers.map(x => x * 2);
};



// ---------------------------------------------------------
// Filter
// ---------------------------------------------------------

export const filterByEven = (numbers: number[]) => {
  return numbers.filter(number => number % 2 == 0);
};



// ---------------------------------------------------------
// Reduce
// ---------------------------------------------------------

export const sumArrayFour = (numbers: number[]) => {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
};


// ---------------------------------------------------------
// Putting it all together
// ---------------------------------------------------------

// The function below sums the squares of the even numbers in
// an array. Refactor it to use map, filter, and reduce.

// 1. filter out odd numbers
// 2. map each number to its square
// 3. reduce the array to a sum

export const sumEvenSquares = (numbers: number[]) => {
  let sum = 0;

  for (let number of numbers) {
    if (number % 2 == 0) {
      sum += number ** 2;
    }
  }

  return sum;
};

// Implement a function that calculates the average duration
// of the meetings in a room using map, filter, and reduce.
// See sample activity data in the spec file.

export interface Activity {
  subject: string;
  duration: number;
  room: string;
}

export const averageDurationOfActivitiesInRoom = (
  activities: Activity[],
  room: string
) => {
  return 45;
}