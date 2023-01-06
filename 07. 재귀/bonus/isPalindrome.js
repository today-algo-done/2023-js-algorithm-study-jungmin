function isPalindrome(string) {
  const arr = [...string];
  let result = arr;

  function helper(helperInput) {
    const mid = Math.floor(helperInput.length / 2);
    const left = mid - 1;
    const right = mid + 1;

    if (helperInput.length === 1 || helperInput[left] !== helperInput[right])
      return;
    if (helperInput[left] === helperInput[right]) {
      const arr1 = helperInput.slice(0, left);
      const arr2 = helperInput.slice(right + 1);
      result = arr1.concat(helperInput[mid], arr2);
    }

    helper(result);
  }

  helper(arr);
  return result.length === 1;
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
isPalindrome("tacocat"); // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
