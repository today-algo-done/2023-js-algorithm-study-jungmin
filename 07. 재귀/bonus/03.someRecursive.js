const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback) {
  let index = 0;
  let result = false;

  function helper(helperFunction) {
    if (index === arr.length) return;
    if (callback(arr[index])) {
      result = true;
      return;
    }
    index++;
    helper(helperFunction);
  }
  helper(callback);
  return result;
}

someRecursive([1, 2, 3, 4], isOdd); // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
