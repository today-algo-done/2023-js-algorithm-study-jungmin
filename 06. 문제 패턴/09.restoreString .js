/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
  let result = "";
  const obj = {};

  for (let i = 0; i < indices.length; i++) {
    const key = indices[i];
    obj[key] = s.slice(i, i + 1);
  }

  for (const str of Object.values(obj)) {
    result += str;
  }

  return result;
};
