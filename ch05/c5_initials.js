import { compose, head, intercalate, map, split, toUpperCase } from '@mostly-adequate/support';

// 非 pointfree，因为提到了数据：name
// const initials = (name) => name.split(' ').map(compose(toUpperCase, head)).join('. ');

// pointfree
const initials = compose(
  intercalate('. '),
  map(compose(toUpperCase, head)),
  split(' ')
);

console.log(initials('hunter stockton thompson'));
