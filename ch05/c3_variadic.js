import { compose, reduce } from '@mostly-adequate/support';

// 第1个例子
const toUpperCase = (x) => x.toUpperCase();
const exclaim = (x) => `${x}!`;
const shout = compose(exclaim, toUpperCase);

// 第2个例子
const head = (x) => x[0];
const reverse = reduce((acc, x) => [x, ...acc], []);

// 前面的例子中我们必须要写两个组合才行，但既然组合是符合结合律的，我们就可以只写一个，
// 而且想传给它多少个函数就传给它多少个，然后让它自己决定如何分组。
const arg = ['jumpkick', 'roundhouse', 'uppercut'];
const lastUpper = compose(toUpperCase, head, reverse);
console.log(lastUpper(arg));

const loudLastUpper = compose(exclaim, toUpperCase, head, reverse);
console.log(loudLastUpper(arg));

// loudLastUpper的第二种写法
const last = compose(head, reverse);
const loudLastUpper1 = compose(exclaim, toUpperCase, last);
console.log(loudLastUpper1(arg));

// loudLastUpper的第三种写法
const angry = compose(exclaim, toUpperCase);
const loudLastUpper2 = compose(angry, last);
console.log(loudLastUpper2(arg));

// 更多写法...
