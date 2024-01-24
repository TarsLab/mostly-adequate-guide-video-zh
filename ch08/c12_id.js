import { append, map, compose } from '@mostly-adequate/support';

class Container {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Container(x);
  }
}

Container.prototype.map = function (f) {
  return Container.of(f(this.$value));
};

const id = (x) => x;
const idLaw1 = map(id);
const idLaw2 = id;

console.log(idLaw1(Container.of(2)));
console.log(idLaw2(Container.of(2)));

const compLaw1 = compose(map(append(' world')), map(append(' cruel')));
const compLaw2 = map(compose(append(' world'), append(' cruel')));

console.log(compLaw1(Container.of('Goodbye')));
console.log(compLaw2(Container.of('Goodbye')));
