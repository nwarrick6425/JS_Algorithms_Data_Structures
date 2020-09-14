function mergeSort(arr) {
  return arr;
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let newArr = [];

  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    }
    else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.legnth) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

console.log(merge([1,3,5,7,9,10,11], [2,4,6,8]));