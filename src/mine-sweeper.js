const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resArray = matrix.map((row, rowIndex) => row.map((item, columnIndex) => {
    let mineCount = 0;
    const minRowIndex = rowIndex === 0 ? rowIndex : rowIndex - 1;
    const maxRowIndex = rowIndex === matrix.length - 1 ? matrix.length - 1 : rowIndex + 1;
    const minColumnIndex = columnIndex === 0 ? columnIndex : columnIndex - 1;
    const maxColumnIndex = columnIndex === matrix[0].length - 1 ? matrix[0].length - 1 : columnIndex + 1;

    for (let i = minRowIndex; i <= maxRowIndex; i++) {
      for (let j = minColumnIndex; j <= maxColumnIndex; j++) {
        if (i === rowIndex && j === columnIndex) continue;
        if (matrix[i][j] === true) mineCount++;
      }
    }

    return mineCount;
  }))

  return resArray;
}

const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
]

module.exports = {
  minesweeper
};
