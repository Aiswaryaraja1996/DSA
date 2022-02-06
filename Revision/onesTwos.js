function sortArr(arr){
    var l = 0;
    var r = arr.length - 1;
    var mid = 0;
    var temp = 0;

    while(mid<=r){
        if(arr[mid]==0){
            temp = arr[l];
            arr[l] = arr[mid];
            arr[mid] = temp;
            l++;
            mid++;
        }
        else if(arr[mid]==1){
            mid++;
        }
        else{
            temp = arr[mid];
            arr[mid] = arr[r];
            arr[r] = temp;
            r--;
        }
    }

    console.log(arr);
    
}

var arr = [0,1,1,2,2,0,0];

sortArr(arr);