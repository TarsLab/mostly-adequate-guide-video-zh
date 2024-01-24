import { add, compose, curry, inspect, match, prop } from '@mostly-adequate/support';

class Maybe {
  static of(x) {
    return new Maybe(x);
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  constructor(x) {
    this.$value = x;
  }

  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }

  inspect() {
    return this.isNothing ? 'Nothing' : `Just(${inspect(this.$value)})`;
  }
}

console.log(Maybe.of('Malkovich Malkovich').map(match(/a/gi)));
console.log(Maybe.of(null).map(match(/a/gi)));
console.log(Maybe.of({ name: 'Boris' }).map(prop('age')).map(add(10)));
console.log(Maybe.of({ name: 'Dinah', age: 14 }).map(prop('age')).map(add(10)));

// map :: Functor f => (a -> b) -> f a -> f b
const map = curry((f, anyFunctor) => anyFunctor.map(f));

// safeHead :: [a] -> Maybe(a)
const safeHead = (xs) => Maybe.of(xs[0]);

// streetName :: Object -> Maybe String
const streetName = compose(map(prop('street')), safeHead, prop('addresses'));

console.log(streetName({ addresses: [] }));
console.log(streetName({ addresses: [{ street: 'Shady Ln.', number: 4201 }] }));

// withdraw :: Number -> Account -> Maybe(Account)
const withdraw = curry((amount, { balance }) =>
  Maybe.of(balance >= amount ? { balance: balance - amount } : null));

// updateLedger :: Account -> Account
const updateLedger = (account) => account;

// remainingBalance :: Account -> String
const remainingBalance = ({ balance }) => `Your balance is $${balance}`;

// finishTransaction :: Account -> String
const finishTransaction = compose(remainingBalance, updateLedger);

// getTwenty :: Account -> Maybe(String)
const getTwenty = compose(map(finishTransaction), withdraw(20));

console.log(getTwenty({ balance: 200.00 }));
console.log(getTwenty({ balance: 10.00 }));
