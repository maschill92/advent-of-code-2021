const { nextTick } = require("process");
const readInput = require("../utils/read-input");

const input = readInput("./input.txt");

const splitInput = input.map((s) => s.split(""));

[].

const countsPerCol = splitInput
  .reduce(
    (prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])),
    []
  )
  .reduce((list, numsAtCol) => {
    const numZeroesAtCol = numsAtCol.filter((s) => s === "0").length;
    return list.concat({ 0: numZeroesAtCol, 1: numsAtCol.length - numZeroesAtCol });
  }, [])
  .reduce(() => {

  });
