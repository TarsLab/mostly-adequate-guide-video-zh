/*
  练习 C
  重构 `fastestCar` 使之成为 pointfree 风格，使用 `compose()` 和其他函数。
 */
import { concat, compose, last, sortBy } from '@tarslab/mostly-adequate-exercises';

// fastestCar :: [Car] -> String
const fastestCar = (cars) => {
  const sorted = sortBy((car) => car.horsepower, cars);
  const fastest = last(sorted);
  return concat(fastest.name, ' is the fastest');
};

// ------------------------------------
// tests
// ------------------------------------

import { cars } from '@tarslab/mostly-adequate-exercises';

try {
  assert(
    fastestCar(cars) === 'Aston Martin One-77 is the fastest',
    'The function gives incorrect results.'
  );
} catch (err) {
  const callees = fastestCar.callees || [];

  if (callees.length > 0 && callees[0] !== 'sortBy') {
    throw new Error(
      'The answer is incorrect; hint: functions are composed from right to left!'
    );
  }

  throw err;
}

const callees = fastestCar.callees || [];

assert.arrayEqual(
  callees.slice(0, 3),
  ['sortBy', 'last', 'prop'],
  'The answer is incorrect; hint: Hindley-Milner signatures help a lot to reason about composition!'
);
