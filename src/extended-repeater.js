const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = {}) {
  let result = '';
  addition = String(addition);
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    if (addition) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        result += addition;
        if (j !== additionRepeatTimes - 1) {
          result += additionSeparator;
        }
      }
    }

    if (i !== repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}
console.log(String())
console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))

module.exports = {
  repeater
};
