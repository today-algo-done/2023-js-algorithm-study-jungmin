function productOfArray(arr) {
  let result = 1;

  function helper(helperInput) {
    if (helperInput.length === 0) return result;
    result *= helperInput[0];
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60

/**
 * 배열 내의 수 곱하기
 */
