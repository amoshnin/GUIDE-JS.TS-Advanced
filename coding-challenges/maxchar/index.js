// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {}

  let max = 0
  let maxChar = ""
  for (char of str) {
    chars = { ...chars, [char]: (chars[char] || 0) + 1 }
  }

  for (char in chars) {
    if (chars[char] > max) {
      max = chars[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar
