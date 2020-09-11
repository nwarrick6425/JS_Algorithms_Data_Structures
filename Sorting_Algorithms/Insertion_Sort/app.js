function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curVal;
  }
  return arr;
}