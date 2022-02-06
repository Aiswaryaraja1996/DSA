// Works by Divide and Conquer rule
// Divides the array into two halfs
// Time Complexity : O(nlogn)
// Space Complexity : O(n)

const merge = (arr, l, m, r) => {
  var n1 = m - l + 1;
  var n2 = r - m;

  //Temperory Arrays
  var left = new Array(n1);
  var right = new Array(n2);

  //Filling left and right arrays
  for (var i = 0; i < n1; i++) {
    left[i] = arr[l + i];
  }
  for (var j = 0; j < n2; j++) {
    right[j] = arr[m + 1 + j];
  }

  var i = 0,
    j = 0,
    k = l;
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = left[i];
    k++;
    i++;
  }

  while (j < n2) {
    arr[k] = right[j];
    k++;
    j++;
  }
};

const mergeSort = (arr, l, r) => {
  if (l >= r) {
    return;
  }
  //Calculates the mid point
  var m = l + parseInt((r - l) / 2);

  //Performs mergesort in each halves
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);

  //Merge the Arrays
  merge(arr, l, m, r);
};

const main = () => {
  var arr = [5, 3, 2, 7, 8];
  mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
};

main();
