function findLongestSubstring(str) {
  let longest = 0;
  const seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }

  return longest;
}

findLongestSubstring("rithmschool"); // 7
