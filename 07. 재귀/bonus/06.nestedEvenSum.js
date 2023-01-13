function nestedEvenSum(target) {
  let result = 0;

  function helper(helperInput) {
    if (typeof helperInput !== "object") return;

    Object.keys(helperInput).forEach(key => {
      const odd = helperInput[key] % 2 !== 0;
      if (!odd) result += helperInput[key];
      helper(helperInput[key]);
    });
  }
  helper(target);
  return result;
}

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj2);
