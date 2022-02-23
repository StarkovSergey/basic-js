const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  const arrayCopy = array.slice();
  // костыль. уничтожает указатели, когда они оба воздействуют на элемент между ними
  for (let i = array.length - 1; i >= 0; i-- ) {
    if (array[i] === '--discard-next' && array[i + 2] === '--double-prev') {
      arrayCopy.splice(i, 3);
    }
    if (array[i] === '--discard-next' && array[i + 2] === '--discard-prev') {
      arrayCopy.splice(i, 3);
    }
  }

  let index;
  let sourceIndex;

  arrayCopy.forEach((item) => {
    switch(item) {
      case '--discard-next':
        index = arrayCopy.indexOf('--discard-next');
        if (index === arrayCopy.length - 1) {
          arrayCopy.splice(arrayCopy.length - 1, 1);
          break;
        }
        arrayCopy.splice(index, 2);
        break;
      case '--discard-prev':
        index = arrayCopy.indexOf('--discard-prev');
        if (index === 0) {
          arrayCopy.splice(0, 1);
          break;
        }
        arrayCopy.splice(index - 1, 2);
        break;
      case '--double-next':
        index = arrayCopy.indexOf('--double-next');
        if (index === arrayCopy.length - 1) {
          arrayCopy.splice(arrayCopy.length - 1, 1);
          break;
        }
        arrayCopy.splice(index, 1, arrayCopy[index + 1]);
        break;
      case '--double-prev':
        index = arrayCopy.indexOf('--double-prev');
        if (index === 0) {
          arrayCopy.splice(0, 1);
          break;
        }
        arrayCopy.splice(index, 1, arrayCopy[index - 1]);
        break;
    }
  })

  return arrayCopy;
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));

module.exports = {
  transform
};
