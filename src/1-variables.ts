// ---------------------------------------------------------
// Variables
// ---------------------------------------------------------

// TypeScript has three ways to declare a variable: var,
// let, and const. We'll look at some of the differences
// between them below.



// ---------------------------------------------------------
// var
// ---------------------------------------------------------

export function greeter(shouldYell) {
  var hello = 'Hello';
  // We can redeclare variables declared with var without
  // error. This is bad.
  var hello = 'Hello';

  if (shouldYell) {
    var greeting = hello.toUpperCase() + '!';
  }

  // Variables declared with var have function scope, so
  // they are visible anywhere in the function where they
  // are defined. This is also bad.
  return greeting;
}



// ---------------------------------------------------------
// let and const
// ---------------------------------------------------------

export function letAndConstExample() {
  if (true) {
    // Variables declared with let/const have block scope,
    // so they are only visible in the block where they are
    // defined.
    let a = 'a';
    const b = 'b';
  }

  // Try uncommenting the lines below and see what happens.
  // b and c do not exist here.
  // console.log(a);
  // console.log(b);

  // Variables declared with let can be reassagined
  let c = 'c';
  c = 'C';

  // Variables declared with const cannot be reassigned.
  // Try uncommenting the second assignment below.
  const d = 'd';
  // d = 'D';

  // const only prevents reassignment. It does not prevent
  // mutation of objects.
  const array = [1, 2, 3];
  array.push(4)
}
