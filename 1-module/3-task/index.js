/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
  let str1 = str.slice(0, 1).toUpperCase();
  let str2 = str.slice(1);
  return str1 + str2;
}
