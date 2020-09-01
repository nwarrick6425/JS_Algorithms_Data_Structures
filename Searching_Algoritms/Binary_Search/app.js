function binarySearch(arr, val) {
  let start = 0
  let end = arr.length - 1;
  let middle = 0;

  while (start < end) {
    middle = Math.floor(end - start / 2);
    if (arr[middle] === val) {
      return middle;
    }
    else if (val < arr[middle]) {
      end = middle - 1;
    }
    else if (val > arr[middle]) {
      start = middle + 1;
    }
  }

  return -1;
}