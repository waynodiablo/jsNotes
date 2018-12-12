// All from codeburst.io

var assert = {
  isTrue: function(assertionToCheck) {
    if (!(assertionToCheck === true)) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not true")}
      else {console.log("Pass!")
      };
    }
};


const describe = (desc, fn) => {
  console.log(desc);
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn);

// const matchers = (exp) => ({
//   toBe: (assertion) => {
//     if (exp === assertion) {
//       console.log('pass')
//       return true
//     } else {
//       console.log('fail')
//       return false
//     }
//   }
// })
//
// const expect = (exp) => matchers(exp)
//
// module.exports = {
//   describe,
//   expect,
//   it,
//   matchers
// }
