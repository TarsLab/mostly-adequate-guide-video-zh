/**
 * 练习 C
 * 给定以下函数：
 *
 *   const keepHighest = (x, y) => (x >= y ? x : y);
 *
 * 使用帮助函数 `keepHighest` 重构 `max`， 重构后的`max`不再引用任何参数。
 */
import { keepHighest, reduce } from '@tarslab/mostly-adequate-exercises';

// max :: [Number] -> Number
const max = reduce(keepHighest, -Infinity);

// ------------------------------------
// tests
// ------------------------------------

assert(
  max([323, 523, 554, 123, 5234]) === 5234,
  'The function gives incorrect results.'
);

assert(
  reduce.partially,
  'The answer is incorrect; hint: look at the arguments for `reduce`!'
);

assert(
  keepHighest.calledBy && keepHighest.calledBy.name === '$reduceIterator',
  "The answer is incorrect; hint: look closely to `reduce's` iterator and `keepHighest`!"
);
