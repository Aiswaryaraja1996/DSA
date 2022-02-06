function uniqueChar(s) {
  var i = 0;
  var j = 0;
  var l = 0;
  var r = 0;
  var maxLen = 0;
  var obj = {};
  var str = "";

  while (j < s.length) {
    if (!obj[s[j]]) {
      obj[s[j]] = 1;
      maxLen = Math.max(maxLen, Object.keys(obj).length);
      str =
        str.length < s.substring(i, j + 1).length ? s.substring(i, j + 1) : str;

      j++;
    } else {
      delete obj[s[i]];
      i++;
    }
  }
  console.log(maxLen, str);
}

uniqueChar("geeksforgeeks");
