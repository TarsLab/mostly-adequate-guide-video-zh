import { inspect, prop } from '@mostly-adequate/support';

class Either {
  static of(x) {
    return new Right(x);
  }
  constructor(x) {
    this.$value = x;
  }
}

class Left extends Either {
  map(f) {
    return this;
  }
  inspect() {
    return `Left(${inspect(this.$value)})`;
  }
}

class Right extends Either {
  map(f) {
    return Either.of(f(this.$value));
  }
  inspect() {
    return `Right(${inspect(this.$value)})`;
  }
}

const left = (x) => new Left(x);

console.log(Either.of('rain').map((str) => `b${str}`));
console.log(
  left('rain').map((str) => `It's gonna ${str}, better bring your umbrella!`)
);
console.log(Either.of({ host: 'localhost', port: 80 }).map(prop('host')));
console.log(left('rolls eyes...').map(prop('host')));
