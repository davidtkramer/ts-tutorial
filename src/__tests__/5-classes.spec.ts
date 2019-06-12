import { Person, Collection } from "../5-classes";

// ---------------------------------------------------------
// "this"
// ---------------------------------------------------------

describe('Person', () => {
  test('isOlderThan', () => {
    const bob = new Person('Bob', 45);
    const marge = new Person('Marge', 55);

    expect(bob.isOlderThan(marge)).toBe(false);
    expect(marge.isOlderThan(bob)).toBe(true);
  });

  test('isOlderThan used with filter', () => {
    const bob = new Person('Bob', 45);
    const bill = new Person('Bill', 32);
    const marge = new Person('Marge', 55);
    const larry = new Person('Larry', 24);
    const george = new Person('George', 67);

    const people = [bill, marge, larry, george];

    // try passing bob.isOlderThan directly into the filter
    // method without a wrapping arrow function
    const peopleYoungerThanBob = people.filter((person) => {
      return bob.isOlderThan(person);
    });

    expect(peopleYoungerThanBob).toEqual([bill, larry]);
  })
});



// ---------------------------------------------------------
// Generics
// ---------------------------------------------------------

describe('collection', () => {
  test('string collection', () => {
    const strings = new Collection<string>(['one', 'two', 'three']);
  });

  test('person collection', () => {
    const bob = new Person('Bob', 45);
    const people = new Collection<Person>([bob]);
  });
});