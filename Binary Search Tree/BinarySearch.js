
function binarySearch(arr,l,u,k){
    if(u >= l){
        var mid = l + Math.floor((u - l)/2);
        if(arr[mid] === k){
            return mid;
           
        }
        if(arr[mid] > k){
            return binarySearch(arr,l,mid-1,k);
        }
        else{
            return binarySearch(arr,mid+1,u,k);
        }
    }
    else{
        return -1;
    }
}



function runProgram(input) {
  input = input.trim().split("\n");
  var dim = input[0].trim().split(" ");
  var k = Number(dim[1]);
  var arr = input[1].trim().split(" ").map(Number);
  var soln = binarySearch(arr,0,arr.length-1,k);


//   var soln = binarySearch(arr, k);
  console.log(soln);
}

runProgram(`6 3
2 3 3 3 3 9`);


// function binarySearch(arr, k) {
//   var l = 0;
//   var u = arr.length - 1;
//   while (l <= u) {
//     var mid = l + Math.floor((u - l) / 2);
//     if (arr[mid] === k) {
//       return 1;
//     }
//     if (arr[mid] > k) {
//       u = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//   }
//   return -1;
// }
