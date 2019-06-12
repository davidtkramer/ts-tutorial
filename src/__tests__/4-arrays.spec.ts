import {
  sumArrayOne, sumArrayTwo, sumArrayThree, sumArrayFour,
  multiplyByTwo, filterByEven, sumEvenSquares,
  Activity, averageDurationOfActivitiesInRoom
} from '../4-arrays';

// ---------------------------------------------------------
// Iteration
// ---------------------------------------------------------

describe('basic iteration', () => {
  const array = [1, 2, 3, 4];

  test('given a number array returns the sum of all elements', () => {
    expect(sumArrayOne(array)).toBe(10);
    expect(sumArrayTwo(array)).toBe(10);
    expect(sumArrayThree(array)).toBe(10);
  });
});



// ---------------------------------------------------------
// Map
// ---------------------------------------------------------

describe('map', () => {
  test('multiplies each element by two', () => {
    expect(multiplyByTwo([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
  });
});



// ---------------------------------------------------------
// Filter
// ---------------------------------------------------------

describe('filter', () => {
  test('given a number array returns an arry of the even numbers', () => {
    expect(filterByEven([1, 2, 3, 4])).toEqual([2, 4]);
  });
});



// ---------------------------------------------------------
// Reduce
// ---------------------------------------------------------

describe('reduce', () => {
  test('given a number array returns the sum of all elements', () => {
    expect(sumArrayFour([1, 2, 3, 4])).toBe(10);
  });
});



// ---------------------------------------------------------
// Putting it all together
// ---------------------------------------------------------

test('sumEvenSquares', () => {
  // (2 * 2) + (4 * 4) = 20
  expect(sumEvenSquares([1, 2, 3, 4])).toBe(20);
});

test('averageDurationOfMeetingsInRoom', () => {
  const activities: Activity[] = [
    {
      subject: 'Board Meeting',
      duration: 120,
      room: 'Mission Control'
    },
    {
      subject: 'Sprint Planning',
      duration: 30,
      room: 'Angry Unicorn'
    },
    {
      subject: 'DevOps Meeting',
      duration: 120,
      room: 'The Hangar'
    },
    {
      subject: 'Daily Standup',
      duration: 60,
      room: 'Angry Unicorn'
    }
  ];

  expect(averageDurationOfActivitiesInRoom(activities, 'Angry Unicorn'))
    .toBe(45);
});