const isValid = function (s) {
  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (const char of s) {
    if (brackets[char]) stack.push(brackets[char]);
    else if (char !== stack.pop()) return false;
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
