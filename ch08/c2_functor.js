import { append, prop } from '@mostly-adequate/support';

class Container {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Container(x);
  }
}

// (a -> b) -> Container a -> Container b
Container.prototype.map = function (f) {
  return Container.of(f(this.$value));
};

console.log(Container.of(2).map((two) => two + 2));

console.log(Container.of('flamethrowers').map((s) => s.toUpperCase()));

console.log(Container.of('bombs').map(append(' away')).map(prop('length')));
