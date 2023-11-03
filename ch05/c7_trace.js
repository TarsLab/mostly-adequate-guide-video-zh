import { compose, curry, intercalate, map, replace, split, toLowerCase } from '@mostly-adequate/support';

const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

const dasherize = compose(
  intercalate('-'),
  map(toLowerCase),
  trace('after split'),
  split(' '),
  replace(/s{2,}/gi, ' ')
);

console.log(dasherize('The world is a vampire'));
