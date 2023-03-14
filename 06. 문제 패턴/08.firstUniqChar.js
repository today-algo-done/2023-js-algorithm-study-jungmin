/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const arr = [...s];
  const obj = {};

  for (const item of arr) {
    obj[item] = (obj[item] || 0) + 1;
  }

  for (const key in obj) {
    if (obj[key] === 1) return arr.indexOf(key);
  }

  return -1;
};
