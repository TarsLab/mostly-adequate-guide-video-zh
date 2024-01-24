/*
  练习 D

  给定下面的帮助函数：

  // validateUser :: (User -> Either String ()) -> User -> Either String User
  const validateUser = curry((validate, user) => validate(user).map(_ => user));

  // save :: User -> IO User
  const save = user => new IO(() => ({ ...user, saved: true }));

  // showWelcome :: User -> String
  const showWelcome = namedAs('showWelcome', compose(concat('Welcome '), prop('name')));

  编写一个 `validateName` 函数，检查用户的名字是否超过3个字符，或者返回一个错误消息。
  然后使用 `either`，`showWelcome` 和 `save` 来编写一个 `register` 函数，当验证通过时注册并欢迎用户。

  记住，either的两个参数必须返回相同的类型。
  */
import { Either, IO, compose, either, left, map, save, showWelcome, validateUser } from '@tarslab/mostly-adequate-exercises';

// validateName :: User -> Either String ()
const validateName = ({ name }) =>
  name.length > 3 ? Either.of(null) : left('Your name need to be > 3');

const saveAndWelcome = compose(map(showWelcome), save);

// register :: User -> IO String
const register = compose(
  either(IO.of, saveAndWelcome),
  validateUser(validateName)
);

// ------------------------------------
// tests
// ------------------------------------

import { albert, gary, yi } from '@tarslab/mostly-adequate-exercises';

const validateGary = validateName(gary);
assert(
  validateGary instanceof Either && validateGary.isRight,
  'The function `validateName` gives incorrect results.'
);

const validateYi = validateName(yi);
assert(
  validateYi instanceof Either &&
    validateYi.isLeft &&
    typeof validateYi.$value === 'string',
  'The function `validateName` gives incorrect results!'
);

const registerAlbert = register(albert);
assert(
  registerAlbert instanceof IO,
  "The right outcome to `register` is incorrect; hint: `save` returns an `IO` and you'll need `map` to manipulate the inner value!"
);

const msgAlbert = registerAlbert.unsafePerformIO();
assert(
  typeof msgAlbert === 'string',
  'The right outcome to `register` is incorrect; hint: look carefully at your signatures, `register` should return an `IO(String)` in every scenarios!'
);

const callees = register.callees || [];

assert(
  callees[callees.length - 1] === 'either',
  'The function `register` seems incorrect; hint: you can use `either` to branch an `Either` to different outcomes!'
);

assert(
  msgAlbert === showWelcome(albert),
  'The function `register` returns a correct type, but the inner value is incorrect! Did you use `showWelcome`?'
);

const registerYi = register(yi);
assert(
  registerYi instanceof IO,
  'The left outcome to `register` is incorrect; hint: look carefully at your signatures, `register` should return an `IO` in every scenarios!'
);

const msgYi = registerYi.unsafePerformIO();
assert(
  typeof msgYi === 'string',
  'The left outcome to `register` is incorrect; hint: look carefully at your signatures, `register` should return an `IO(String)` in every scenarios!'
);
