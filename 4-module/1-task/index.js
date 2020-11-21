/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  // ваш код...
  let friendsElement = document.createElement('ul');

  for (let friend of friends) {
    let firstName = friend.firstName;
    let lastName = friend.lastName;
    friendsElement.innerHTML += '<li>firstName + " " + lastName</li>';
  }
  return friendsElement;
}
