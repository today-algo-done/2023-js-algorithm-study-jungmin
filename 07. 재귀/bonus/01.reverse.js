function reverse(string) {
  const arr = [...string];
  const result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    const value = helperInput[helperInput.length - 1];
    result.push(value);
    helperInput.pop();
    helper(helperInput);
  }

  helper(arr);
  return result.join("");
}

reverse("awesome"); // 'emosewa'
reverse("rithmschool"); // 'loohcsmhtir'
