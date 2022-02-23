const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const sourceArray = str.split('');
  const resArray = [];
  let count = 0;
  sourceArray.forEach((item, index, array) => {
    count++;
    if (array[index + 1] !== item) {
      resArray.push(`${count === 1 ? '' : count}${item}`);
      count = 0;
    }
  })
  return resArray.join('');
}

module.exports = {
  encodeLine
};
