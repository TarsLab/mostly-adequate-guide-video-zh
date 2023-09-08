# Mostly Adequate Guide to Functional Programming - Exercises Support

## Overview

This package contains all functions and data-structure referenced in the
appendixes of the [Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide).

These functions have an educational purpose and aren't intended to be used in
any production environment. They are however, a good learning material for anyone
interested in functional programming.

## How to install

The package is available on `npm` and can be installed via the following incantation:

```bash
npm install @tarslab/mostly-adequate-exercises
```

## How to use

There's no particular structure to the module, everything is flat and exported
from the root (the curious reader may have a quick glance at the `index.js` to
get convinced about this). 

Also, all top-level functions are curried so you don't have to worry about calling
`curry` on any of them.

For example:

```js
const { Maybe, liftA2, append, concat, reverse } = require('@tarslab/mostly-adequate-exercises');

const a = Maybe.of("yltsoM").map(reverse);
const b = Maybe.of("Adequate").map(concat(" "));

liftA2(append)(b)(a);
// Just("Mostly Adequate")
```

## 中文说明

这个项目来自[MostlyAdequate/mostly-adequate-guide](https://github.com/MostlyAdequate/mostly-adequate-guide)的部分源码。

拷贝原项目的`exercises/support.js`, 重新命名为`index.js`。相对于`@mostly-adequate/support`这个包，增加了练习题的测试辅助和一些测试用例，在做练习题时候，运行代码可以得到更友好的提示。
