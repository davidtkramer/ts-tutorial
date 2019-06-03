import { me, containsDuplicates } from '../3-objects'

// ---------------------------------------------------------
// Objects literals
// ---------------------------------------------------------

describe('object literals', () => {
  test('basic property access', () => {
    expect(me.name).toBe('Bob');
    expect(me.height).toBe(76);
    expect(me.greet('Bob')).toBe('Hello Bob');
    expect(me.phone.number).toBe('(555) 555-5555');
    expect(me.favoriteColors).toEqual(['blue', 'green']);
  });

  test('basic property mutation', () => {
    me.name = 'Bob'
    me.favoriteColors.push('red');

    expect(me.name).toBe('Bob');
    expect(me.favoriteColors).toEqual(['blue', 'green', 'red']);
  });

  describe('dynamic property access and mutation', () => {
    test('basic operations', () => {
      // we can access attributes dynamically on objects
      const name = 'name';
      expect(me[name]).toBe('Bob');

      // we can dynamically set properties
      me[name] = 'Bill';

      // we can also access attributes with string literals
      expect(me['name']).toBe('Bill');

      // accessing a property that does not exist returns
      // undefined
      expect(me['address']).toBeUndefined();
    });

    test('getProperty', () => {
      // implement test
    });

    test('setProperty', () => {
      // implement test
    });

    test('containsDuplicates', () => {
      // implement test
    });
  });

  describe('object destructuring', () => {
    test('basic destructuring', () => {
      const { name, height } = me;
      expect(name).toBe('Bill');
      expect(height).toBe(76);
    });

    test('getPhoneNumber', () => {
      // implement test
    });
  });
});