function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();
fn(); // 1
fn(); // 2


// A closure is when a function remembers variables from its outer scope, even after the outer function has finished execution.

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }


console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);
