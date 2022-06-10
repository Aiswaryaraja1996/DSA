var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  var res = [];
  for (var i = 0; i < nums.length - 2; i++) {
    var left = i + 1;
    var right = nums.length - 1;
    while (left < right) {
      var sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        res.push([nums[i], nums[left], nums[right]]);
        break;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};

console.log(threeSum([0, 0]));
