function collectOddValuesRecursiveHelper(arr) {
  const result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

collectOddValuesRecursiveHelper([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/**
 * 재귀 호출과 helper 메서드를 이용해서 홀수 배열 출력하기
 */
