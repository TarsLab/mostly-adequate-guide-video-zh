const add = (x) => (y) => x + y;
const increment = add(1);
const addTen = add(10);

console.log(increment(2));
console.log(addTen(2));
