function minTime(a, b) {
  var arr = [];
  for (var i = 0; i < a.length; i++) {
    arr.push(Math.abs(a[i] - b[i]));
  }
  return arr;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var std = input[1].trim().split(" ").map(Number);
  var room = input[2].trim().split(" ").map(Number);

  std.sort((a, b) => a - b);
  room.sort((a, b) => a - b);

  var soln = minTime(std, room);
  soln.sort((a, b) => b-a);
  console.log(soln[0]);
}

runProgram(`3
4 -4 2
4 0 5`);
