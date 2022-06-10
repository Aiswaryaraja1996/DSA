function runProgram(input) {
    input = input.trim().split("\n");
    var k = Number(input[0]);
    var arr = input[1].trim().split(" ").map(Number);
    var dep = input[2].trim().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    var soln = arrDep(k,arr,dep)
    console.log(soln);
}

function arrDep(k,arr,dep) {
    for (var i = 0; i < arr.length; i++){
        if(arr[i+k]<dep[i] && i+k<arr.length){
            return "Not Possible"
        }
    }
    return "Possible";
}
runProgram(`1
1 3 5
2 6 8`)