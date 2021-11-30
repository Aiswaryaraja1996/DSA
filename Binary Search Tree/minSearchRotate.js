function minSearchRotate(arr,l,u)
{
 
    if (u < l)
        return arr[0];
     
 
    if (u == l)
        return arr[l];
     

    let mid =l + Math.floor((u - l)/2);
     

    if (mid < u && arr[mid+1] < arr[mid])
        return arr[mid+1];
     
 
    if (mid > l && arr[mid] < arr[mid - 1])
        return arr[mid];

  
    if (arr[u] > arr[mid])
        return minSearchRotate(arr, l, mid-1);
     
    return minSearchRotate(arr, mid+1, u);
}

function runProgram(input) {
    input = input.trim().split("\n");
    var k = input[0].trim(" ").split(" ")[1];
    var arr = input[1].trim().split(" ").map(Number);
    var soln = minSearchRotate(arr, 0, arr.length - 1);
    console.log(soln);
  }
  
  runProgram(`10
  4 6 7 9 10 -1 0 1 2 3`);