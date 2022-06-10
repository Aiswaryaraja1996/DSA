function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var pos = 1;
  for (var i = 0; i < t; i++) {
    var boys = input[pos + 1].trim().split(" ").map(Number);
    var girls = input[pos + 2].trim().split(" ").map(Number);

    boys.sort((a, b) => a - b);
    girls.sort((a, b) => a - b);
    var soln = danceNight(boys, girls);
    console.log(soln);
    pos += 3;
  }
}

function danceNight(boys, girls) {
  for (var i = 0; i < girls.length; i++) {
    if (boys[i] <= girls[i]) {
      return "NO";
    }
  }
  return "YES";
}

runProgram(`2
4 5
2 5 6 8
1 4 5 9 6
4 5
2 5 6 8
1 4 5 6 6`);
