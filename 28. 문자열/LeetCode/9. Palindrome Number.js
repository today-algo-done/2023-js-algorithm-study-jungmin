/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) return false;

  const array = [...String(x)];
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) return false;
  }

  return true;
};
