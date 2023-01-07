function flatten(strangeArr) {
  const map = {};
  const newArr = [...JSON.stringify(strangeArr)];
  let index = 0;

  function helper(arr) {
    if (arr.length === index) return;

    if (arr[index] === "[" || arr[index] === "]") {
      map[arr[index]] = (map[arr[index]] || 0) + 1;
    }

    if (map["["] >= 1 && map["]"] >= 1) {
      map["["] -= 1;
      map["]"] -= 1;
    }
    index++;
    helper(arr);
  }
  helper(newArr);
}
