function collectOddValuesRecursive(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValuesRecursive(arr.slice(1)));
  return newArr;
}

collectOddValuesRecursive([1, 2, 3, 4, 5, 6]);

/**
 * 재귀 호출로 홀수 배열 출력하기
 */
