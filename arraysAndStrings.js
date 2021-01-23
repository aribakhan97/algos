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

// 4. Valid Parentheses 
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

// 5. Search Insert Position
// time complexity 

var searchInsert = function(nums, target) {
    let left = 0;
    let right =  nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midVal = nums[mid];
        if (target === midVal) {
            return mid;
        } else if (target > midVal) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left;
};

// binary search time complexity Olog(n)

// 6. Rotate Matrix 
// you are given an n x n 2d matrix representing an image.
// rotate the image by 90 degrees (clockwise)
// you have to rotate the image in place (no second matrix)

var rotate = function(matrix) {
    matrix.reverse();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j ++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}; 

// time complexity --> O(n)2
// space complexity --> O(1) 

// 7. Two Sum
// given an array of numbers and a target
// return the indices of the numbers that add up to the target

var twoSum = function(nums, target) {
for(let i = 0; i < length.nums; i++) {
    const num = nums[i];
    const want = target - num;
    for( let j = i +1 ; i < nums.length; j++) {
        if(nums[j] === want) return [i, j];
        }   
    }
};
 // time complexity O(n)2

 // what could give us an O(n) solution?

var twoSum = function(nums, target) {
    const ht = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const want = target - num;
        if(want in ht) {
            const leftIndex = ht[want];
            return [leftIndex, i];
        } else {
            ht[num] = i;
        }
    }
}

// Three Sum
// given an array of nums of n integers
// are there elements a,b,c in nums such that a + b + c = 0? 

var threeSum = function(nums) {
    const output = [];
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        if(i > 0 && nums[i] === nums[i- 1]) continue
        while (left < right) {
            let total = nums[i] + nums[left] + nums[right];
            if (total === 0) {
                output.push(nums[i], nums[left], nums[right])
                while(left < right && nums[right - 1] === nums[right]) {
                    right--;
                }
                while(left < right && nums[left + 1] === nums[left]) {
                    left++;
                }
                right--;
                left++;
            } else if (total > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return output;
}

//time complexity --> outer loop, inner loop, sorting n log n
// O(n)2
// space complexity --> O(1)



// maxiumum subarray

function maxSubArray (nums){
    let solution = nums[0];
    for(let i =1 ; i< nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
        solution = Math.max(solution, nums[i]);
    }
    return solution;
};