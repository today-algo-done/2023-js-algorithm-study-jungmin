function stringifyNumbers(object) {
  const target = JSON.parse(JSON.stringify(object));
  function helper(helperInput) {
    if (typeof helperInput !== "object") return;

    Object.keys(helperInput).forEach(key => {
      if (typeof helperInput[key] === "number") {
        helperInput[key] = "" + helperInput[key];
      }
      helper(helperInput[key]);
    });
  }

  helper(target);
  return target;
}

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

stringifyNumbers(obj);
