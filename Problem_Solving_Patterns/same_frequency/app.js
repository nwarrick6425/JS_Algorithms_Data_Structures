function sameFrequency(num1, num2) {
  if (num1 === num2) return true;

  let numArr1 = num1.toString();
  let numArr2 = num2.toString();
  let numObj1 = {};
  let numObj2 = {};

  if (numArr1.length !== numArr2.length) return false;

  for (let num of numArr1) {
    numObj1[num] = (numObj1[num] || 0) + 1;
  }

  for (let num of numArr2) {
    numObj2[num] = (numObj2[num] || 0) + 1;
  }

  for (const key in numObj1) {
    if (numObj1[key] !== numObj2[key]) return false;
  }

  return true;
}