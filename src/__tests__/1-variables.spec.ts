import { greeter, letAndConstExample } from '../1-variables';

// ---------------------------------------------------------
// var
// ---------------------------------------------------------

describe('var', () => {
  test('with shouldYell = true returns a loud greeting', () => {
    const greeting = greeter(true);
    expect(greeting).toBe('HELLO!');
  });

  test('with shouldYell = false returns a normal greeting', () => {
    // let's implement a test where shouldYell is false and see what happens
  });
});

// ---------------------------------------------------------
// let and const
// ---------------------------------------------------------

test('let and const example', () => {
  letAndConstExample();
});
