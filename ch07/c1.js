import { curry, head, toLowerCase, toUpperCase } from '@mostly-adequate/support';

const tail = (xs) => xs.slice(1);

// capitalize :: String -> String
const capitalize = (s) => toUpperCase(head(s)) + toLowerCase(tail(s));
console.log(capitalize('smurf'));

// strLength :: String -> Number
const strLength = (s) => s.length;
console.log(strLength('hello'));

// join :: String -> [String] -> String
const join = curry((what, xs) => xs.join(what));
console.log(join('-', ['mostly', 'adequate', 'guide']));

// match :: Regex -> (String -> [String])
const match = curry((reg, s) => s.match(reg));
console.log(match(/l/g, 'hello world'));

// onHoliday :: String -> [String]
const onHoliday = match(/holiday/ig);
console.log(onHoliday('Summer Holiday'));

// replace :: Regex -> String -> String -> String
const replace = curry((reg, sub, s) => s.replace(reg, sub));
console.log(replace(/o/g, 'O', 'hello world'));
