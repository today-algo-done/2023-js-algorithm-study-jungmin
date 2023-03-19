/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const arr = [...String(x)];
  let result = "";
  let current = arr.length;

  while (current > 0) {
    current--;
    result += arr[current];
  }

  return result === String(x);
};
