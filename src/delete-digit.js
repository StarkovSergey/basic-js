const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  let biggestNumber = Number.MIN_VALUE;
  const array = String(number).split('');

  for (let i = 0; i < array.length; i++) {
    const arrayCopy = array.slice();
    arrayCopy.splice(i, 1);
    const currentNumber = +arrayCopy.join('');
    if (currentNumber > biggestNumber) {
      biggestNumber = currentNumber;
    }
  }

  return biggestNumber;
}

module.exports = {
  deleteDigit
};
