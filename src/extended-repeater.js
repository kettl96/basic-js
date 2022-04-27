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
 function repeater(str, options) {
  let newStr = ''
  let result = ''

  let values = {
    newAdd: String(options.addition),
    string: String(str),
    sepStr: options.separator,
    repTime: options.repeatTimes,
    addRT: options.additionRepeatTimes,
    addSep: options.additionSeparator
  }
  let { newAdd, string, sepStr, repTime, addRT, addSep } = values


  if (!sepStr) sepStr = '+'
  if (repTime == undefined) repTime = 1
  if (addRT == undefined) addRT = 1
  if (!addSep) addSep = '|'

  if (newAdd) {
    let arr = []
    for (let i = 1; i <= addRT; i++) {
      arr.push(newAdd)
      arr.push(addSep)
    }
    console.log(arr);
    arr.pop()
    newStr = arr.join('')
  }

  if (string) {
    let newArr = []
    for (let j = 1; j <= repTime; j++) {
      newArr.push(string)
      if (newStr !== 'undefined') {
        newArr.push(newStr)
      }
      newArr.push(sepStr)
    }
    newArr.pop()
    result = newArr.join('')
  }
  return result
}


module.exports = {
  repeater
};
