function partition(a, p, r){
  
    const pivot = a[r];
    let i = p; 
    for (let j = p; j < r; j++) {
        if (a[j] < pivot) {
    
        [a[i], a[j]] = [a[j], a[i]];
   
        i++;
        }
    }

    [a[i], a[r]] = [a[r], a[i]] 
    return i;
};

function quickSort(a, p, r) {
  
    if (p >= r) {
        return;
    }

    let q = partition(a, p, r);

    quickSort(a, p, q - 1);
    quickSort(a, q + 1, r);
}

function runProgram(input){

    input = input.trim().split("\n");
    var arr = input[1].trim().split(" ").map(Number);

    quickSort(arr,0,arr.length-1);

    console.log(arr.join(" "));

}

runProgram(`5
5 4 3 2 1`)