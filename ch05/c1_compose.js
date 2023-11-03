import { compose } from '@mostly-adequate/support';

// 组合例子
const toUpperCase = (x) => x.toUpperCase();
const exclaim = (x) => `${x}!`;
const shout = compose(exclaim, toUpperCase);
console.log(shout('send in the clowns'));

// 如果不用comose组合，直接调用
const shout2 = (x) => exclaim(toUpperCase(x));
console.log(shout2('send in the clowns'));
