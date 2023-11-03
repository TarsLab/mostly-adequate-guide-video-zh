import { compose, reduce } from '@mostly-adequate/support';

const head = (x) => x[0];
const reverse = reduce((acc, x) => [x, ...acc], []);
const last = compose(head, reverse);

console.log(last(['jumpkick', 'roundhouse', 'uppercut']));
