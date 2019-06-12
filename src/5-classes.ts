// ---------------------------------------------------------
// "this"
// ---------------------------------------------------------

// the "this" keyword in JavaScript/TypeScript behaves
// differently than most other object-oriented languages.

// The value assigned to "this" in a function is dependent
// on how the function is invoked.

export class Person {
  name: string;

  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isOlderThan(person: Person): boolean {
    return this.age > person.age;
  }
}


// ---------------------------------------------------------
// Generics
// ---------------------------------------------------------


export class Collection<T>{
  items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  add(item: T) {
    this.items.push(item);
  }

  remove(itemToRemove: T) {
    this.items.filter((currentItem) => currentItem == itemToRemove);
  }

  contains(item: T) {
    this.items.some((item) => item == item);
  }

  pluck<K extends keyof T>(key: K): T[K][]  {
    return this.items.map((item) => item[key]);
  }
}

// React component classes are typed using generics

// Fake implementation of React.Component
export class Component<P, S> {
  props: P;

  state: S;
}


// Let's implement a component that extends from our
// Component class

interface Props {
  subject: string;
  description: string;
}

interface State {
  isVisible: boolean;
}

export class MyComponent extends Component<Props, State> {
  render() {
    // try typing this.props. or this.state. and notice the
    // intellisense enabled by the generic types
  }
}