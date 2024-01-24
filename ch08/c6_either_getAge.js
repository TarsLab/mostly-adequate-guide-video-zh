import { Either, add, compose, concat, curry, left, map, toString } from '@mostly-adequate/support';
import moment from 'moment';

// getAge :: Date -> User -> Either(String, Number)
const getAge = curry((now, user) => {
  const birthDate = moment(user.birthDate, 'YYYY-MM-DD');
  return birthDate.isValid()
    ? Either.of(now.diff(birthDate, 'years'))
    : left('Birth date could not be parsed');
});

const today = '2024-01-01';
console.log(getAge(moment(today), { birthDate: '2005-12-12' }));
console.log(getAge(moment(today), { birthDate: 'July 4, 2001' }));

// fortune :: Number -> String
const fortune = compose(
  concat('If you survive, you will be '),
  toString,
  add(1)
);

// zoltar :: User -> Either(String, _)
const zoltar = compose(map(fortune), getAge(moment(today)));

console.log(zoltar({ birthDate: '2005-12-12' }));
console.log(zoltar({ birthDate: 'balloons!' }));
