var a = [1,2,3,4,5];

var result = a.reduce((acc, val) => acc + val, 0);
console.log('Sum:', result);

var result = a.reduce(
  // reducer function
  (acc, val) => {
    const sum = acc.sum + val;
    const count = acc.count + 1;
    const avg = sum/count;
    return {sum, count, avg};
  },
  // state object
  {sum:0, count:0, avg:0}
);

console.log('Statistics:', result);
