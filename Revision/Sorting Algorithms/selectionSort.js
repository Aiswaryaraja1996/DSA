//Time Complexity : O(n^2)
//Space Complexity : O(1)

const selectionSort = () => {
  var arr = [5, 3, 2, 7, 8];
  var n = arr.length;
  var minIndex;
  for (var i = 0; i < n - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  console.log(arr);
};

selectionSort();



