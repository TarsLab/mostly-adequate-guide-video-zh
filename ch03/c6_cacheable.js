const memoize = (f) => {
  const cache = {};

  return (...args) => {
    const argStr = JSON.stringify(args);
    if (cache[argStr] === undefined) {
      console.log(`calculate input ${args}`);
      cache[argStr] = f(...args);
    } else {
      console.log(`returns cache for input ${args}`);
    }
    return cache[argStr];
  };
};

const squareNumber = memoize((x) => x * x);

console.log(squareNumber(4));

console.log(squareNumber(4));

console.log(squareNumber(5));

console.log(squareNumber(5));

// http请求，纯函数, 延迟执行
const pureHttpCall = memoize((url, params) => () => $.getJSON(url, params));
