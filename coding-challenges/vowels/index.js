// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowelsFn(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

// function vowelsFn(str) {
//   let count = 0
//   let vowels = "aeiou"

//   for (char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++
//     }
//   }

//   return count
// }

module.exports = vowelsFn
