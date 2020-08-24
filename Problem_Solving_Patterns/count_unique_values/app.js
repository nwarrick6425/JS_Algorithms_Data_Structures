function countUniqueValues(arr) {
  if (arr.length === 0) { return 0; }

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    }
    else if (arr[i] < arr [j]) {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }

  return i + 1;
}