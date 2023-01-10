function capitalizeFirst(arr) {
  const newArr = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    newArr.push(
      helperInput[0][0].toUpperCase().concat(helperInput[0].slice(1))
    );
    helper(helperInput.slice(1));
  }

  helper(arr);
  return newArr;
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
