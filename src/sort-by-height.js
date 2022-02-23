const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const findSmallestIndex = (arr) => {
  let smallestIndex = 0;
  let smallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) continue;

    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function sortByHeight(arr) {
  // вернём массив, где -1 сохранятся, а на остальных значениях будет null
  const newArr = arr.map((item) => {
    if (item !== -1) {
      return null;
    }
    return item;
  })

  const sourceArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) continue;

    const smallestIndex = findSmallestIndex(sourceArr); // наименьший индекс за исключением -1
    
    const firstNullIndex = newArr.findIndex((item) => item === null);
    newArr[firstNullIndex] = sourceArr[smallestIndex];
    sourceArr.splice(smallestIndex, 1);
  }

  return newArr;
}

module.exports = {
  sortByHeight
};
