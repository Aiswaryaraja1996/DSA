var counter = false;

function solveSudoku(arr, i, j) {
  if (i === arr.length) {
    counter = true;
    arr.forEach((element) => {
      console.log(element.join(" "));
    });
    return counter;
  }
  var ni = 0,
    nj = 0;
  if (j === 9) {
    ni = i + 1;
    nj = 0;
  } else {
    ni = i;
    nj = j + 1;
  }
  if (arr[i][j] !== 0) {
    solveSudoku(arr, ni, nj);
  } else {
    for (var k = 0; k <= 9; k++) {
      if (isSafe(arr, k, i, j)) {
        arr[i][j] = k;
        solveSudoku(arr, ni, nj);
        arr[i][j] = 0;
      }
    }
  }

    return arr;

 
}

function isSafe(arr, k, x, y) {
  // ! row check
  for (var j = 0; j < arr.length; j++) {
    if (arr[x][j] === k) return false;
  }

  // ! col check
  for (var j = 0; j < arr.length; j++) {
    if (arr[j][y] === k) return false;
  }

  // ! Box check
  var bi = Math.floor(x / 3) * 3;
  var bj = Math.floor(y / 3) * 3;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (arr[i + bi][j + bj] === k) return false;
    }
  }
  return true;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var sudoku = [];

  for (var i = 0; i < 9; i++) {
    sudoku.push(input[i].trim().split(" ").map(Number));
  }

 var res =  solveSudoku(sudoku, 0, 0);

 if(res && !counter){
    for(var k = 0 ; k < 9 ; k++){
        for(l = 0 ; l < 9 ; l++){
            if(res[k][l] === 0){
                break;
            }
        }
    }
    console.log(-1);
 }

}

runProgram(`0 0 0 0 5 4 3 0 6
0 0 0 0 0 3 2 7 0
0 0 0 7 2 0 0 0 1
9 0 0 0 7 0 0 5 3
0 0 0 0 0 0 0 0 0
8 2 0 0 1 0 0 0 9
3 0 0 0 6 1 0 0 0
0 4 6 9 0 0 0 0 0
7 0 1 5 4 0 0 0 6`);
