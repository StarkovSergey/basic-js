const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObject = {};
  const array = domains.map((item) => item.split('.').reverse());
  array.forEach((subarray) => {
    let DNSstring = '';
    for (let i = 0; i < subarray.length; i++) {
      DNSstring += `.${subarray[i]}`;

      if (DNSstring in resultObject) {
        resultObject[DNSstring] += 1;
      } else {
        resultObject[DNSstring] = 1;
      }
    }
  });
  return resultObject;
}


const domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
  ];

module.exports = {
  getDNSStats
};
