import { compose, replace, toLowerCase } from '@mostly-adequate/support';

// 非 pointfree，因为提到了数据：word
// const snakeCase = (word) => word.toLowerCase().replace(/\s+/ig, '_');

// pointfree
const snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);

console.log(snakeCase('Hello World'));
