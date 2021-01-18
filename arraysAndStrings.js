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

// 2. group anagrams
// given an array of strings, return the strings grouped by anagram

var groupAnagrams = function(strs) {
    const ht = {};
    for(let str of strs) {
        const sorted = str.split('').sort().join('')
        if (ht[sorted]) ht[sorted].push(str);
        else ht[sorted] = [str]
    }
    return Object.values(ht);
};

// time complexity; one loop and sorting method is very long (n log n) O(n * m(log m))
// space complextiy; O(n) linear space

// 3. Valid Palindrome given a string determine if it is a palindrome

var isPalindrome = function(s) {
    s.split('').reverse().join('') === s;
};

// time complexity O(n)
// space complexity O(n)

var isPalindrome = function (s) {
    let left = 0;
    let right = s.length -1;
    while(left < right) {
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
// time complexity --> while loop O(n)
// space complexity O(1) constant space

// 4. valid parenthesis 
var isValid = function(s) {
    const stack = [];
    for (let char of s) {
        if (char === '(' || char === '[' || char === '{' ) {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            const last = stack.pop();
            if (last === '(' && char  !== ')') {
                return false;
            } else if(last === '[' && char !== ']') {
                return false;
            } else if(last === '{' && char !== '}') {
                return false;
            }
        }
    }
    if(stack.length) {
        return false;
    } else {
        return true;
    }
};

// second approach

var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for(let char of s){
        if (char in pairs) {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            const last = stack.pop();
            if(pairs[last] !== char) return false;
        }
    }
    if(stack.lenth) {
        return false;
    } else {
        return true;
    }
};

// time complexity loop O(n)
// space complexity stack O(n)