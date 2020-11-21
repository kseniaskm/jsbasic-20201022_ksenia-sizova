/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  // ваш код...
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    if (a <= arr[i] && arr[i] <= b) {
      arrNew.push(arr[i]);
    }
  }
  return arrNew;
}
