// var twoSum = function (nums, target) {
//   nums.sort((a, b) => a - b);
//   var left = 0;
//   var right = nums.length - 1;

//   while (left < right) {
//     var sum = nums[left] + nums[right];

//     if (sum === target) {
//       return [left, right];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// };

var twoSum = function (nums, target) {
  var obj = {};
  var res = [];

  for (var i = 0; i < nums.length; i++) {
    var diff = target - nums[i];

    if (obj.hasOwnProperty(diff)) {
      res.push([obj[diff], i]) ;
    } else {
      obj[nums[i]] = i;
    }
  }
  return res;
};

console.log(twoSum([2, 7, 11, 15], 9));

//Time Complexity : O(n)
//sort Complexity : O(1)
