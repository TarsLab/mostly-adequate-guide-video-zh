// 纯的
const checkAge = (age) => {
  const minimum = 21;
  return age >= minimum;
};

console.log(checkAge(24));

minimum = 27;
console.log(checkAge(24));

minimum = 18;
console.log(checkAge(24));
