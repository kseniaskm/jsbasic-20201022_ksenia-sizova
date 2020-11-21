/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // ваш код...
  let arr = str.split(/[^0-9-.]+/);
  let arrNum = [];
  for (let i = 0; i < arr.length; i++) {
    arrNum[i] = parseFloat(arr[i]);
  }

  let result = {
    min: arrNum[0],
    max: arrNum[0],
  };

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] >= result.max) {
      result.max = arrNum[i];
    }
  }

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] <= result.min) {
      result.min = arrNum[i];
    }
  }
  return result;
}
