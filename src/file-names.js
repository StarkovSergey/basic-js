const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  for (let i = 0; i < names.length; i++) {
    let k = 0;
    let isRepeated = false;

    for (let j = 0; j < i; j++) {
      const nameForRegExt = names[i].replace(/\(/g, '\\(').replace(/\)/g, '\\)');
      const regExp = new RegExp(`^${nameForRegExt}$|^${nameForRegExt}\\([0-9]\\)$`);
      console.log(regExp)

      if (regExp.test(names[j])) {
        k++;
        isRepeated = true;
      }
    }

    if (isRepeated) {
      names[i] = `${names[i]}(${k})`
    }
  }

  return names;
}

module.exports = {
  renameFiles
};
