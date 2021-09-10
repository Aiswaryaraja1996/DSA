function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  
  for (var i = 1; i <= t; i++) {
    var str = input[i];
    var check=true;
    var stck = [];
    for (var j = 0; j < str.length; j++) {
      if (str[j] === "[" || str[j] === "{" || str[j] === "(") {
        stck.push(str[j]);
      } else {
        switch (str[j]) {
          case "]":
            var chr = stck.pop();
            if (chr !== "[") check = false;
            break;
          case "}":
            var chr = stck.pop();
            if (chr !== "{") check = false;
            break;
          case ")":
            var chr = stck.pop();
            if (chr !== "(") check = false;
            break;
        }
      }
    }
    if (stck.length !== 0 || check === false) console.log("not balanced");
    else console.log("balanced");
  }
}

runProgram(`5
{([])}))
{([])}[
)))))
[(){}{())[
[}]{(}[[}[
`);
