/*
  练习 B
  给定下面的 User 对象：

    const user = { id: 2, name: 'Albert', active: true };

  使用 `safeProp` 和 `head` 找到 user 名字的首字母。
  */
import { compose, head, map, safeProp } from '@tarslab/mostly-adequate-exercises';

// initial :: User -> Maybe String
const initial = undefined;

// ------------------------------------
// tests
// ------------------------------------

import { albert, Maybe } from '@tarslab/mostly-adequate-exercises';

if (
  !(initial(albert) instanceof Maybe) &&
  initial.callees &&
  initial.callees[0] === 'safeProp' &&
  initial.callees[1] === 'head'
) {
  throw new Error(
    'The function gives incorrect results; hint: look carefully at the signatures of `safeProp` and `head`!'
  );
}

assert(initial(albert).$value === 'A', 'The function gives incorrect results.');

assert.arrayEqual(
  initial.callees || [],
  ['safeProp', 'map'],
  'The answer is incorrect; hint: you can compose `safeProp` with `head` in a declarative way'
);
