const allSubsequence = (res, str, l, r) => {
  if (l <= r + 1 && res !== '') {
    console.log(res);
  }

  for (var i = l; i <= r; i++) {
    allSubsequence(res + str[i], str, i + 1, r);
  }
};

const main = () => {
  var str = "abcd";
  allSubsequence('', str, 0, str.length - 1);
};

main();


var arr = [1,2,3,2,2];

var newArr = [...new Set(arr)];

console.log(newArr)
