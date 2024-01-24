import { Either, Left, Right, add, compose, concat, curry, left, toString } from '@mostly-adequate/support';
import moment from 'moment';

// getAge :: Date -> User -> Either(String, Number)
const getAge = curry((now, user) => {
  const birthDate = moment(user.birthDate, 'YYYY-MM-DD');
  return birthDate.isValid()
    ? Either.of(now.diff(birthDate, 'years'))
    : left('Birth date could not be parsed');
});

// fortune :: Number -> String
const fortune = compose(
  concat('If you survive, you will be '),
  toString,
  add(1)
);

// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = curry((f, g, e) => {
  let result;
  switch (e.constructor) {
    case Left:
      result = f(e.$value);
      break;
    case Right:
      result = g(e.$value);
      break;
    // No Default
  }
  return result;
});

const id = (x) => x;

const today = '2024-01-01';

// zoltar :: User -> String
const zoltar = compose(either(id, fortune), getAge(moment(today)));
console.log(zoltar({ birthDate: '2005-12-12' }));
console.log(zoltar({ birthDate: 'balloons!' }));
