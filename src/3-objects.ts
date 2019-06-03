// ---------------------------------------------------------
// Object literals
// ---------------------------------------------------------

export const me = {
  name: 'Bob',
  height: 76,
  greet: (name) => 'Hello ' + name,
  phone: {
    number: '(555) 555-5555',
    country: 'US'
  },
  favoriteColors: ['blue', 'green']
};


// write a function that takes an object and a name of
// a property and returns that property
export const getProperty = (object, propName) => {

};

// write a function that takes an object, property name,
// and a value and sets the value
export const setProperty = (object, propName, value) => {

};

// Since we can access properties on objects dynamically,
// we can use them like Java's HashMaps. Implement the
// body of the for loop below.
export const containsDuplicates = (array) => {
  let numbersSeen = {};
  let hasDuplicates = false;

  for (let i = 0; i < array.length; i++) {}

  return hasDuplicates;
};

// write a function that uses destructuring to return the
// phone number string from the me object
export const getPhoneNumber = (me) => {}
