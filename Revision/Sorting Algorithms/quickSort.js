// Works by divide and conquer startegy
// It takes an element as Pivot and finds the sorted position of the pivot element.

const partition = (arr, l, r) => {
  var pivot = arr[r];
  var i = l;
  for (var j = l; j <= r; j++) {
    if (arr[j] < pivot) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      i++;
    }
  }
  [arr[i], arr[r]] = [arr[r], arr[i]];
  return i;
};

const quickSort = (arr, l, r) => {
  if (l >= r) {
    return;
  }

  var p = partition(arr, l, r);

  quickSort(arr, l, p - 1);
  quickSort(arr, p + 1, r);
};

const main = () => {
  var arr = [5, 3, 2, 7, 8];
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
};

main();
