function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let i = 0;
  let j = num - 1;
  let maxSum = 0;

  for (let i = 0; i < num; i++ ) {
    maxSum += arr[i];
  }

  let prev = maxSum;

  while (i < arr.length - num) {
    j++;
    prev -= arr[i];
    prev += arr[j];
    i++;
    if (prev > maxSum) {
      maxSum = prev;
    }
  }
  return maxSum;
}