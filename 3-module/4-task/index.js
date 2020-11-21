/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  // ваш код...
  let usersStr = [];
  for (let k in users) {
    if (users[k].age <= age) {
      usersStr = usersStr + users[k].name + ', ' + users[k].balance + '\n';
    }
  }
  usersStr = usersStr.substring(0, usersStr.length - 1);
  return usersStr;
}
