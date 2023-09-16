const xs = [1, 2, 3, 4, 5];

// slice是纯的
console.log(xs.slice(0, 3));

console.log(xs.slice(0, 3));

console.log(xs.slice(0, 3));

// splice是不纯的
console.log(xs.splice(0, 3));

console.log(xs.splice(0, 3));

console.log(xs.splice(0, 3));
