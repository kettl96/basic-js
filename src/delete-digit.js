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
 function deleteDigit(n) {
  let values = []
  function cut(number, cut) {
    let numberArr = number.toString().split('')
    numberArr.splice(cut, 1)
    values.push(numberArr.join(''))
  }
  let str = n.toString()
  for (let i = 0; i < str.length; i++) {
    cut(n,i)
  }
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  return getMaxOfArray(values)
}

module.exports = {
  deleteDigit
};
