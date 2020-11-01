/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
    str = str.substring(0, 19);
    str = str + "…";
    return str;
  } else {
    return str;
  }
}
