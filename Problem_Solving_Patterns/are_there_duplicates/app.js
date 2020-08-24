function areThereDuplicates() {
  let args = [...arguments];

  let freq = {};

  for (let item of args) {
    freq[item] = (freq[item] || 0) + 1;

    if (freq[item] > 1) return true;
  }

  return false;
}