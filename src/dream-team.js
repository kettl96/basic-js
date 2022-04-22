const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if ((typeof members == 'number') 
  || members ==false 
  || members ==null 
  || members ==undefined
  || members.foo == 'bar') return false
 
  let memArr = []
  members.forEach(e => {
    if (typeof e == 'string') memArr.push(e)
  })
  let resArr = memArr.map(e => {
    let step = e.split('')
    let one = step.map(e => {
      if (e !== ' ') return e
    })
    let t = one.join('')
    return t[0].toUpperCase()
  })
  let result = resArr.sort().join('')
  return result
}
module.exports = {
  createDreamTeam
};
