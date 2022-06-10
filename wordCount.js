function runProgram(input) {
  input = input.trim().split(" ");
  var wordMap = {};
  for (var i = 0; i < input.length; i++) {
    var word = input[i].toLowerCase();
    var chArr = [];
  
    for (ch of word) {
     
      if (ch >= 'a' && ch <= 'z') {
        chArr.push(ch);
      }
    } 

    var cleanWord = chArr.join("");

    if(cleanWord.length < 1){
        continue;
    }
   
    if (wordMap[cleanWord]) {
      wordMap[cleanWord] = wordMap[cleanWord] + 1;
    } else {
      wordMap[cleanWord] = 1;
    }  
  }

  var result = [];
 
  for (i = input.length - 1; i >= 0; i--) {
    for (var key in wordMap) {
      if (wordMap.hasOwnProperty(key)) {
        val = wordMap[key];
        if (val === i) {
          result.push([String(key), String(i)]);
          delete wordMap.key;
        }
      }
    }
  }

  console.log(result);
}

runProgram(
  "Practice makes perfect. you'll only get Perfect by practice. just practice!"
);





