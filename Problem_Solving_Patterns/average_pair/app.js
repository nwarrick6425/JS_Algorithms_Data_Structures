function averagePair(arr, avg) {
  if (arr.length === 0) return false;

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let pairAvg = (arr[i] + arr[j]) / 2;

    if (pairAvg === avg) return true;

    pairAvg < avg ? i++ : j--;
  }

  return false;
}