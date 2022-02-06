function uniqueKChar(s, k) {
  var i = 0;
  var j = 0;
  var maxLen = 0;
  var obj = {};
  var l = 0;
  var r = 0;

  while (j < s.length) {
    obj[s[j]] = obj[s[j]] ? obj[s[j]] + 1 : 1;

    if (Object.keys(obj).length < k) {
      j++;
    } else if (Object.keys(obj).length == k) {
        
      maxLen = Math.max(maxLen, j - i + 1);
      l = i;
      r = j;
      j++;
    } else {
      while (Object.keys(obj).length > k) {
        obj[s[i]] = obj[s[i]] - 1;
        if (obj[s[i]] == 0) {
          delete obj[s[i]];
        }
        i++;
      }
      j++;
    }
  }
  console.log(maxLen,s.substring(l,r+1));
}

uniqueKChar("aabcbcdbca", 2);
