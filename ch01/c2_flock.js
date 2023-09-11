const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const flockA = 4;
const flockB = 2;
const flockC = 0;

const result = add(
  multiply(flockB, add(flockA, flockC)),
  multiply(flockA, flockB)
);

const x = 1, y = 2, z = 3;
// 结合律（associative）  x + (y + z) == (x + y) + z
add(add(x, y), z) === add(x, add(y, z));

// 交换律（commutative）  x + y == y + x
add(x, y) === add(y, x);

// 同一律（identity）  x + 0 == x
add(x, 0) === x;

// 分配律（distributive）  x * (y + z) == x * y + x * z
multiply(x, add(y, z)) === add(multiply(x, y), multiply(x, z));

// 应用同一律，去掉多余的加法操作 add(flockA, flockC) == flockA
add(multiply(flockB, add(flockA, flockC)), multiply(flockA, flockB)) === add(multiply(flockB, flockA), multiply(flockA, flockB));

// 再应用分配律
add(multiply(flockB, flockA), multiply(flockA, flockB)) === multiply(flockB, add(flockA, flockA));

console.log(result);
console.log(multiply(flockB, add(flockA, flockA)));
