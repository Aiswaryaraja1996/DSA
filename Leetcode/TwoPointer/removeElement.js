var removeElement = function (nums, val) {
  var left = 0;
  var right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      if (nums[right] === val) {
        right--;
      } else {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      }
    } else {
      left++;
    }
  }
  console.log(left, nums);
};

removeElement([4, 5, 5, 4], 4);

//Time Complexity : O(n)
// Space Complexity : O(1)
