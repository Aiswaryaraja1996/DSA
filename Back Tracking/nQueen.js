var count = 0;
function runProgram(input){
    var arr = new Array(Number(input)).fill(0);
    for(var i = 0 ; i < Number(input) ; i++){
        arr[i] = new Array(Number(input)).fill(0);
    }
    nQueen(arr,0);
    console.log(count);
}

function nQueen(a,row){
    if(row>=a.length){
        count++;
        return;
    }
    for(var col = 0; col < a.length ; col++){
        if(isQueenSafe(a,row,col)){
            a[row][col]=1;
            nQueen(a,row+1);
            a[row][col]=0;
        }
    }
}

function isQueenSafe(a,r,c){
    for(var i = r-1 , j = c; i >= 0 ; i--){
        if(a[i][j] === 1) return false;
    }
    for(var i = r-1 , j = c -1 ; i >= 0 && j >= 0 ;i--,j--){
        if(a[i][j] === 1) return false;
    }
    for(var i = r-1 , j = c+1 ; i >= 0 && j < a.length ; i--,j++){
        if(a[i][j] === 1) return false;
    }
    return true;
}

runProgram(`4`);