const { readFileSync } = require("fs");

module.exports = function readInput(path) {
  return readFileSync(path)
    .toString()
    .split("\n")
    .map((s) => s.trim());
};
