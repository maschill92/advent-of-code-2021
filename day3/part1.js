const { nextTick } = require("process");
const readInput = require("../utils/read-input");

// gamma is the most frequent digit
const [gamma, epsilon] = readInput("./input.txt")
  .map((s) => s.split(""))
  .reduce((prev, next) => next.map((_, i) => (prev[i] || []).concat(next[i])))
  .reduce(
    ([gammaList, epsList], line) => {
      const splitLine = line.split("");
      const zeroes = splitLine.filter((s) => s === "0").length;
      const ones = splitLine.length - zeroes;
      const moreZeroes = zeroes > ones;
      return [
        gammaList.concat(moreZeroes ? "0" : "1"),
        epsList.concat(moreZeroes ? "1" : "0"),
      ];
    },
    [[], []]
  )
  .map((i) => parseInt(i.join(''), 2));

console.log(gamma * epsilon);