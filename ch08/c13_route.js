import { compose, map, Maybe, reverse } from '@mostly-adequate/support';

// 先 f 再 F.of
// topRoute :: String -> Maybe String
const topRoute = compose(Maybe.of, reverse);

// 先 F.of 再 map(f)
// bottomRoute :: String -> Maybe String
const bottomRoute = compose(map(reverse), Maybe.of);

console.log(topRoute('hi'));
console.log(bottomRoute('hi'));
