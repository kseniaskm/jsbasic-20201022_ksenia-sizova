/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // ваш код...
  if (n != 0) {
    for (let i = n - 1; i > 0; i--) {
      n = n * i;
    }
    return n;
  } else {
    return 1;
  }
}
