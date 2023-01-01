function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) return false;

  const obj = {};

  for (const key of num1 + "") {
    obj[key] = (obj[key] || 0) + 1;
  }

  for (const key of num2 + "") {
    if (!obj[key]) {
      return false;
    }
    obj[key] -= 1;
  }

  return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
