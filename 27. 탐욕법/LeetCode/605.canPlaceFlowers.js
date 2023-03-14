/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  if (
    (flowerbed[0] === 0 && flowerbed[1] === 0) ||
    (flowerbed[0] === 0 && flowerbed.length === 1)
  ) {
    flowerbed[0] = 1;
    n--;
  }

  if (
    flowerbed[flowerbed.length - 1] === 0 &&
    flowerbed[flowerbed.length - 2] === 0
  ) {
    flowerbed[flowerbed.length - 1] = 1;
    n--;
  }

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }

  if (n < 1) return true;
  return false;
};
