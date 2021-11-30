function search(arr, l, u, k) {
  if (l > u) return -1;

  let mid = Math.floor((l + u) / 2);
  if (arr[mid] == k) return mid;

  if (arr[l] <= arr[mid]) {
    if (k >= arr[l] && k <= arr[mid]) return search(arr, l, mid - 1, k);

    return search(arr, mid + 1, u, k);
  }

  if (k >= arr[mid] && k <= arr[u]) return search(arr, mid + 1, u, k);

  return search(arr, l, mid - 1, k);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var k = input[0].trim(" ").split(" ")[1];
  var arr = input[1].trim().split(" ").map(Number);
  var soln = search(arr, 0, arr.length - 1, k);
  console.log(soln);
}

runProgram(`6 6
3 4 7 9 1 2`);
