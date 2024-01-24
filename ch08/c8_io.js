const CDN = (s) => `https://cdnjs.cloudflare.com/ajax/libs/${s}`;
const ramda = CDN('ramda/0.21.0/ramda.min');

requirejs.config({ paths: { ramda } });
require(['ramda'], ({ compose, curry, find, head, inspect, last, map, prop, split }) => {

  // getFromStorage :: String -> (_ -> String)
  const getFromStorage = (key) => () => window.localStorage[key];

  class IO {
    static of(x) {
      return new IO(() => x);
    }

    constructor(fn) {
      this.unsafePerformIO = fn;
    }

    map(fn) {
      return new IO(compose(fn, this.unsafePerformIO));
    }

    inspect() {
      return `IO(${inspect(this.unsafePerformIO)})`;
    }
  }

  // ioWindow :: IO Window
  const ioWindow = new IO(() => window);

  console.log(ioWindow.map((win) => win.innerWidth).unsafePerformIO());
  console.log(ioWindow.map(prop('location')).unsafePerformIO());
  console.log(ioWindow.map(prop('location')).map(prop('href')).map(split('/')).unsafePerformIO());

  // $ :: String -> IO [DOM]
  const $ = (selector) => new IO(() => document.querySelectorAll(selector));

  console.log(
    $('#myDiv')
      .map(head)
      .map((div) => div.innerHTML)
      .unsafePerformIO()
  );

  class Maybe {
    static of(x) {
      return new Maybe(x);
    }

    get isNothing() {
      return this.$value === null || this.$value === undefined;
    }

    constructor(x) {
      this.$value = x;
    }

    map(fn) {
      return this.isNothing ? this : Maybe.of(fn(this.$value));
    }

    inspect() {
      return this.isNothing ? 'Nothing' : `Just(${inspect(this.$value)})`;
    }
  }

  const eq = curry((a, b) => a === b);

  // url :: IO String
  const url = new IO(() => window.location.href);

  // toPairs :: String -> [[String]]
  const toPairs = compose(map(split('=')), split('&'));

  // params :: String -> [[String]]
  const params = compose(toPairs, last, split('?'));

  // findParam :: String -> IO Maybe [String]
  const findParam = (key) => map(compose(Maybe.of, find(compose(eq(key), head)), params), url);

  // -- Impure calling code ----------------------------------------------

  // http://127.0.0.1:3000/ch08/c8_io.html?searchTerm=wafflehouse
  console.log(findParam('searchTerm').unsafePerformIO());
});
