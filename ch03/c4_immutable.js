'use strict';

const immutableState = Object.freeze({ minimum: 21 });
// 纯的
const checkAge = (age) => age >= immutableState.minimum;

console.log(checkAge(24));
