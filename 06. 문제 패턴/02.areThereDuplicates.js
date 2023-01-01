function areThereDuplicates(...nums) {
  const obj = {};

  for (const key of nums) {
    obj[key] = (obj[key] || 0) + 1;
    if (obj[key] === 2) return true;
  }
  return false;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true
