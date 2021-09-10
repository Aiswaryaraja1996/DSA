var left = 0;
var n = 5;
var k = 3;
var right = n - 1;
var a = [-1, 1, 3, 3,6]
var res = "No";

while (left < right) {
  var diff = a[right] - a[left];
  if (diff === k) {
    res = "Yes";
    console.log(right,left);
    break;
  } else if (diff < k) {
    left++;
  } else {
    right--;
  }
}
console.log(res);
