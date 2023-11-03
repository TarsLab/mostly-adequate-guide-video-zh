/*
  练习 A
  我们有这样结构的Car对象:
  {
    name: 'Aston Martin One-77',
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
  }
  使用 `compose()` 重写下面这个函数`isLastInStock`
 */
import { compose, last, prop } from '@tarslab/mostly-adequate-exercises';

// isLastInStock :: [Car] -> Boolean
const isLastInStock = (cars) => {
  const lastCar = last(cars);
  return prop('in_stock', lastCar);
};

// ------------------------------------
// tests
// ------------------------------------

import { cars } from '@tarslab/mostly-adequate-exercises';

const fixture01 = cars.slice(0, 3);
const fixture02 = cars.slice(3);

try {
  assert(isLastInStock(fixture01), 'The function gives incorrect results.');

  assert(!isLastInStock(fixture02), 'The function gives incorrect results.');
} catch (err) {
  const callees = isLastInStock.callees || [];

  if (callees[0] === 'prop' && callees[1] === 'last') {
    throw new Error(
      'The answer is incorrect; hint: functions are composed from right to left!'
    );
  }

  throw err;
}

assert.arrayEqual(
  isLastInStock.callees || [],
  ['last', 'prop'],
  'The answer is incorrect; hint: prop is currified!'
);
