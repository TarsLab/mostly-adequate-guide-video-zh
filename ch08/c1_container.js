class Container {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Container(x);
  }
}

console.log(Container.of(3));
console.log(Container.of('hotdogs'));
console.log(Container.of(Container.of({ name: 'yoda' })));
