/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  // ваш код...
  let i = 0;
  for (let key in obj) {
    i++;
  }
  return i <= 0;
}
