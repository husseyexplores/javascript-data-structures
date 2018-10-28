// TC => O(n)   -   SC => O(1)
const addUpTo1 = n => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

let t1 = performance.now();
console.log(addUpTo1(1000000000));
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

/* ********* ********** */

// TC => O(1)   -   SC => O(1)
const addUpTo2 = n => (n * (n + 1)) / 2;

t1 = performance.now();
console.log(addUpTo2(1000000000));
t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);
