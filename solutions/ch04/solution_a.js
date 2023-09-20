/**
 * 练习 A
 * 通过局部调用（partial apply）移除所有参数
 */
import { split } from '@tarslab/mostly-adequate-exercises';

// words :: String -> [String]
const words = split(' ');

// ------------------------------------
// tests
// ------------------------------------

assert.arrayEqual(
  words('Jingle bells Batman smells'),
  ['Jingle', 'bells', 'Batman', 'smells'],
  'The function gives incorrect results.'
);

assert(split.partially, 'The answer is incorrect; hint: split is currified!');
