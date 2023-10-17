import { curry } from '@mostly-adequate/support';

const match = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter = curry((f, xs) => xs.filter(f));
const map = curry((f, xs) => xs.map(f));

console.log(match(/r/g, 'hello world'));

const hasLetterR = match(/r/g);
console.log(hasLetterR('hello world'));
console.log(hasLetterR('just j and s and t etc'));

console.log(filter(hasLetterR, ['rock and roll', 'smooth jazz']));

const removeStringsWithoutRs = filter(hasLetterR);
console.log(removeStringsWithoutRs(['rock and roll', 'smooth jazz', 'drum circle']));

const noVowels = replace(/[aeiou]/gi);
const censored = noVowels('*');
console.log(censored('Chocolate Rain'));
