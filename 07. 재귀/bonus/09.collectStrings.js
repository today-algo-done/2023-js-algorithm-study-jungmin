function collectStrings(object) {
  const result = [];
  function helper(helperInput) {
    if (typeof helperInput !== "object") return;

    Object.keys(helperInput).forEach(key => {
      if (typeof helperInput[key] === "string") {
        result.push(helperInput[key]);
      }
      helper(helperInput[key]);
    });
  }

  helper(object);
  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
