/**
 * 뒤에서 i번째 자릿수 반환(일의 자리, 십의 자리... 순서)
 * @param {number} num
 * @param {number} i
 * @returns
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / 10 ** i) % 10;
}

/**
 * num의 총 자릿수
 * @param {number} num
 * @returns
 */
function digitCount(num) {
  if (num === 0) return 1; // Math.log10(0)가 -Infinity를 반환하기 때문에 예외처리
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * nums 배열 안의 요소 중 자릿수가 가장 큰 수
 * @param {*} nums
 * @returns
 */
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
