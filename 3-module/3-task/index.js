/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  let arr = [];
  arr = str.split('-');
  console.log (arr);
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    console.log(arr[i]);
  }
  let srtNew = arr.join('');
  return srtNew;
}
