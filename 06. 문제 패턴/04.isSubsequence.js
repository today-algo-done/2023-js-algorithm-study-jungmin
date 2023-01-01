function isSubsequence(first, second) {
  const arr1 = [...first];
  const arr2 = [...second];

  let i = 0;
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      i++;
    }

    if (i === arr1.length) return true;
  }
  return false;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
