function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;  
 
    var left = new Array(n1); 
    var right = new Array(n2);  
  
    for (var i = 0; i < n1; i++)
       left[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        right[j] = arr[m + 1 + j];
  

    var i = 0,j=0,k=l;

    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        }
        else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }
  

    while (i < n1) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = right[j];
        j++;
        k++;
    }
}
  

function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}

function runProgram(input){
    input = input.trim().split("\n");

    var arr = input[1].trim().split(" ").map(Number);

    mergeSort(arr,0,arr.length-1)
    console.log(arr.join(" "));
}
  
runProgram(`5
3 5 0 9 8`)

  

  

  
