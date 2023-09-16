// 不纯的
let minimum = 21;
const checkAge = (age) => age >= minimum;

console.log(checkAge(24));

minimum = 27;
console.log(checkAge(24));

minimum = 18;
console.log(checkAge(24));
