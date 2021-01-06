// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // # Solution 1
  //   let chunked = []
  //   for (el of array) {
  //     const last = chunked[chunked.length - 1]
  //     if (!last || last.length === size) {
  //       chunked.push([el])
  //     } else {
  //       last.push(el)
  //     }
  //   }
  //   return chunked
  //
  // # Solution 2
  const chunked = []
  let index = 0

  while (index < array.length) {
    const res = array.slice(index, index + size)
    chunked.push(res)
    index += size
  }

  return chunked
}

chunk([1, 2, 3], 2)

module.exports = chunk
