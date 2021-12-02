const readInput = require("../utils/read-input");

const { p, d } = readInput("./part2.txt")
  .map((line) => {
    const [cmd, numStr] = line.split(" ");
    const num = parseInt(numStr);
    return [cmd, num];
  })
  .reduce(
    ({ a, p, d }, [cmd, num], i, arr) => {
      switch (cmd) {
        case "down":
          return { a: a + num, p, d };
        case "up":
          return { a: a - num, p, d };
        case "forward":
          return { a, p: p + num, d: d + a * num };
      }
    },
    { a: 0, p: 0, d: 0 }
  );

const results = p * d;

console.log(results);
