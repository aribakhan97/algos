// 1. Find first unqiue character.
// first approach
var firstUniqChar = function(s) {
    const hashTable = {};

    for (let char of s) {
        if (hashTable[char]) hashTable[char]++;
        else hashTable[char] = 1;
    }

    for( let i = 0; i < s.length; i++) {
        const char = s[i];
        if (hashTable[char] == 1) return i;
    }
    return -1;
}

// time complexity is O(n)  because there are two loops so 2n but u drop the 2 
// space complexity is 0(1)

// second approach

var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (s.indexOf(char) === s.lastIndexOf(char)) {
        return i;
        }
    }
    return -1;
}

// time complexity is O(n)2 because two loops nested within one another
// space complexity is 0(1) 