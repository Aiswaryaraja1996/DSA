var str = "malayalam";
var left = 0;
var right = str.length - 1;
var res = 1;

while (left < right) {
  if (str[left] === str[right]) {
    left++;
    right--;
  } else {
    res = 0;
  }
}

if(res){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}
