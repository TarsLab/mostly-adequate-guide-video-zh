/**
 * 练习 B
 * 通过局部调用（partial apply）移除所有参数
 */
import { filter, match } from '@tarslab/mostly-adequate-exercises';

// filterQs :: [String] -> [String]
const filterQs = (xs) => filter((x) => x.match(/q/i), xs);

// ------------------------------------
// tests
// ------------------------------------

assert.arrayEqual(
  filterQs(['quick', 'camels', 'quarry', 'over', 'quails']),
  ['quick', 'quarry', 'quails'],
  'The function gives incorrect results.'
);

assert(
  filter.partially,
  'The answer is incorrect; hint: look at the arguments for `filter`.'
);

assert(
  match.partially,
  'The answer is incorrect; hint: look at the arguments for `match`.'
);
