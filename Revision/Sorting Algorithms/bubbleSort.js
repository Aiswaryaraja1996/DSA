// Time Complexity : O(n^2)
// Space Complexity : O(1)

const bubbleSort = () => {
  var arr = [5, 3, 2, 7, 8];
  var n = arr.length;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  console.log(arr);
};

bubbleSort();
