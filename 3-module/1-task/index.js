/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  // ваш код...
  let userNames = [];
  for (let i = 0; i < users.length; i++) {
    userNames.push(users[i].name);
  }
  return userNames;
}
