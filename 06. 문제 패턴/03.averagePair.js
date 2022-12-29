function averagePair(arr, num) {
  const target = num * 2;
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[target - arr[i]] !== undefined) {
      return true;
    }

    map[arr[i]] = i;
  }
  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
