/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let k in salaries) {
    if (typeof (salaries[k]) == "number") {
      sum = sum + salaries[k];
    }
  }
  return sum;
}
