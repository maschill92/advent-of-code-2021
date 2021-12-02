const readInput = require("../utils/read-input");

const total = readInput("./part2.txt")
  .map((s) => parseInt(s))
  .reduce((windows, _, idx, arr) => {
    if (idx < arr.length - 2) {
      windows.push(arr.slice(idx, idx + 3));
    }
    return windows;
  }, [])
  .map(([a, b, c]) => a + b + c)
  .reduce((val, item, idx, arr) => {
    if (idx > 0) {
      if (item > arr[idx - 1]) val++;
    }
    return val;
  }, 0);

console.log(total);
