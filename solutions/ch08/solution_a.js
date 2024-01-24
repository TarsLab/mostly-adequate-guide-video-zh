/*
  练习 A
  使用 `add` 和 `map` 创建一个 functor，使得 functor 里的值增加 1
 */
import { Identity, add, map } from '@tarslab/mostly-adequate-exercises';

// incrF :: Functor f => f Int -> f Int
const incrF = map(add(1));

// ------------------------------------
// tests
// ------------------------------------

assert(incrF(Identity.of(2)).$value === 3, 'The function gives incorrect results.');

assert(add.partially, 'The answer is incorrect; hint: add is currified!');

assert(map.partially, 'The answer is incorrect; hint: map is currified!');
