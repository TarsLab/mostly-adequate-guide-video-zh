import { compose, map, reverse, toUpperCase } from '@mostly-adequate/support';

const exclaim = (x) => `${x}!`;
const angry = compose(exclaim, toUpperCase);

// 错误做法：我们传给了 angry 一个数组，根本不知道最后传给 map 的是什么东西。
// const latin = compose(map, angry, reverse);

// 正确做法：每个函数都接受一个实际参数。
const latin = compose(map(angry), reverse);

console.log(latin(['frog', 'eyes']));
