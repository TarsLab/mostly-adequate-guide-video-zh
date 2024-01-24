import { Either, Maybe, Task, append, left, map, toUpperCase } from '@mostly-adequate/support';

const nested = Task.of([Either.of('pillows'), left('no sleep for you')]);
const t = map(map(map(toUpperCase)), nested);

t.fork(
  (e) => {
    console.error(e);
  },
  (value) => {
    console.log(value);
  }
);

class Compose {
  constructor(fgx) {
    this.getCompose = fgx;
  }
  static of(fgx) {
    return new Compose(fgx);
  }
  map(fn) {
    return new Compose(map(map(fn), this.getCompose));
  }
}

const tmd = Task.of(Maybe.of('Rock over London'));
const ctmd = Compose.of(tmd);
const ctmd2 = map(append(', rock on, Chicago'), ctmd);

ctmd2.getCompose.fork(
  (e) => {
    console.error(e);
  },
  (value) => {
    console.log(value);
  }
);
