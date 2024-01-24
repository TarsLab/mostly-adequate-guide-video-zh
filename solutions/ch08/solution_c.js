/*
  练习 C
  给定下面的帮助函数：

    // showWelcome :: User -> String
    const showWelcome = compose(concat('Welcome '), prop('name'));

    // checkActive :: User -> Either String User
    const checkActive = function checkActive(user) {
      return user.active
        ? Either.of(user)
        : left('Your account is not active');
    };

  写一个函数，使用 `checkActive` 和 `showWelcome` 授予访问权限或返回错误。
  */
import { checkActive, compose, map, showWelcome } from '@tarslab/mostly-adequate-exercises';

// eitherWelcome :: User -> Either String String
const eitherWelcome = compose(map(showWelcome), checkActive);

// ------------------------------------
// tests
// ------------------------------------

import { Either, gary, theresa } from '@tarslab/mostly-adequate-exercises';

if (
  !(eitherWelcome(gary) instanceof Either) &&
  eitherWelcome.callees &&
  eitherWelcome.callees[0] === 'checkActive' &&
  eitherWelcome.callees[1] === 'showWelcome'
) {
  throw new Error(
    'The function gives incorrect results; hint: look carefully at the signatures of `checkActive` and `showWelcome`!'
  );
}

assert(eitherWelcome(gary).$value === 'Your account is not active', 'The function gives incorrect results.');

assert(eitherWelcome(theresa).$value === 'Welcome Theresa', 'The function gives incorrect results.');

assert.arrayEqual(
  eitherWelcome.callees || [],
  ['checkActive', 'map'],
  'The answer is incorrect; hint: you can compose `checkActive` with `showWelcome` in a declarative way!'
);
