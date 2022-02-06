var NO_OF_CHARS = 256;

function longestUniqueSubsttr(s) {
    let map = {}
    let start = 0
    let maxLen = 0
    let arr = s.split('')
    
    for (i=0; i < s.length; i++) {
        let current = map[arr[i]]
        console.log(i,current,start,maxLen);
        if (current!=null && start <= current) {
            start = current + 1
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
        }
        console.log(i,current,start,maxLen);
        map[arr[i]] = i
    }
    
    return maxLen
}

/* Driver program to test above function */

var str = "aabcdef";

var len = longestUniqueSubsttr(str);

console.log(len);
