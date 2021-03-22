// Two Sum

var TwoSum = function(nums, target) {
    const ht = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const want = target - num;
        if (want in ht) {
            const leftIndex = ht[want];
            return [leftIndex, i];
        } else {
            ht[num] = i
        }
    }
};

var twoSum = function(nums, target) {
    const ht = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const want = target - num;
        if (want in ht) {
            const leftIndex = ht[want];
            return [leftIndex, i];
        } else {
            ht[num] = i
        }
    }
};

var longestCommonPrefix = function(strs) {
    'use strict';
    if(strs === undefined || strs.length === 0) {return ''; }

    return strs.reduce((prev,next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};

//valid parenthesis

var isValid = function(s) {
    const stack = []
    const pairs = {
        '}': '{',
        ']': '[',
        ')': '(',
    }
    for (const c of s) {
        const open = pairs[c]
        if (open) {
            if (stack.pop() !== open) {
                return false
            }
        } else {
            stack.push(c)
        }
    }
    return stack.length <= 0
}

var isValid = function(s) {
    const stack = []
    const pairs = {
        '}': '{',
        ']': '[',
        ')': '(',
    }
    for (const c of s) {
        const open = pairs[c]
        if (open) {
            if (stack.pop() !== open) {
                return false
            }
        } else {
            stack.push(c)
        }
    }
    return stack.length <= 0
}

// merge two sorted lists

var mergeTwoLists = function(l1, l2) {
    let prehead = {next: null}
    let p = prehead
    let p1 = l1
    let p2 = l2
    while (p1 && p2) {
        let pSel
        if (p1.val < p2.val) {
            pSel = p1
            p1 = p1.next
        } else {
            pSel = p2
            p2 = p2.next
        }
        p.next = pSel
        p = pSel
    }
    p.next = p1 || p2
    return prehead.next
};

// maximum subarray
function maxSubArray(nums) {
    let solution = nums[0];
    for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i], nums[i - 1]);
    solution = Math.max(solution, nums[i]);
    }
    return solution
}

function maxSubArray(nums) {
    let solution = nums[0];
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i], nums[i -1]);
        solution = Math.max(solution, nums[i])
    }
    return solution
}

function maxSubArray(nums) {
    let solution = nums[0];
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i], nums[i -1]);
        solution = Math.max(solution, nums[i])
    }
    return solution
}

// merge sorted array

var merge = function(nums1, m, nums2, n) {
    let first = m -1;
    let second = n -1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (second < 0) {
            break;
        }
        if(nums1[first] > nums2[second]) {
            nums1[i] = nums1[first];
            first--;
        } else {
            nums1[i] = nums2[second];
            second--;
        }
    }
};

var merge = function(nums1, m, nums2, n) {
    let first = m -1;
    let second = n -1;

    for (let i = m + n -1; i >= 0; i--) {
        if (second < 0) {
            break;
        } 
        if(nums1[first] > nums2[second]) {
            nums1[i] = nums1[first]
            first--;
        } else {
            nums1[i] = nums2[second];
            second--;
        }
    }
};

// is palindrome

var isPalindrome = function(s) {
    s = s.replace(/[^\w+]/g, '').toLowerCase()
    let low = 0;
    let high = s.length - 1;

    while (low < high) {
        if (s[low] !== s[high]) {
            return false
        }
        low++
        high--
    }
    return true
}

// gas station

var canCompleteCircuit = function(gas, cost) {
    let curTank = 0; totalTank = 0; pos = 0;
    for (let i = 0; i < gas.length; i++) {
        curTank += gas[i] - cost[i];
        if(curTank < 0) {
            curTank = 0;
            pos = i + 1;
        }
    }
    return totalTank < 0 ? - 1: pos;
}

// reverse linked list

var reverseList = function(head) {
    let pre = null
    while(head) {
        const next = head.next
        head.next = pre
        pre = head 
        head = next
    } 
    return pre
}

var reverseList = function(head) {
    let pre = null 
    while(head) {
        const next = head.next
        head.next = pre
        pre = head
        head = next
    } 
    return pre
}

var reverseList = function(head) {
    let pre = null
    while(head) {
        const next = head.next
        head.next = pre
        pre = head
        head = next
    } 
    return pre
 }

 var maximalSquare = function(matrix) {
    if (!matrix.length) return 0;
    let dp = new Array(matrix.length+1).fill(0).map(()=>new Array(matrix[0].length+1).fill(0));
    let max = 0;
    for (let r=1;r<dp.length;r++) { 
        for (let c=1;c<dp[0].length;c++) {
            if (matrix[r-1][c-1]!=0) {
                dp[r][c] = Math.min(dp[r][c-1], dp[r-1][c], dp[r-1][c-1])+1;
                max = Math.max(dp[r][c], max);
            }
        }
    }
    return max**2;
};

// sliding window

var maxSliding = function(nums, k) {
    const q = [];
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        if(q[0] === i - k) {
            q.shift();
        }
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;
};

// 3sum smaller
function threeSumSamller(nums, target) {
    nums.sort((a,b) => a - b);

    function twoSumSmaller(startIdx, target) {
        let count = 0;
        let l = startIdx;
        let r = nums.length - 1;
        while (l < r) {
            if (nums[l] + nums[r] < target) {
                count += r - l;
                l++;
            } else {
                r--;
            }
        }
        return count;
    }
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        count += twoSumSmaller(i + 1, target - nums[i]);
    }
    return count;
}

// missing number

var missingNumber = function(nums) {
    const res = new Array(nums.length + 1).fill(-1);
    for (const num of nums) {
        res[num] = num;
    }
    return res.indexOf(-1);
}

// move zeroes

var moveZeroes = function(nums) {
    let j = 0, i = 0
    while (i < nums.length && j < nums.length) {
        if(nums[i] === 0){
            if(nums[j] !== 0 && j > i) {
                nums[i] = nums[j]
                nums[j] = 0
                i++
            }
            j++
        } else i++
    }
    return nums;
}

// longest increasing subsequence

function lengthOfLIS(nums) {
    let lis = [];
    for (let i = 0; i < nums.length; i++) {
        lis.push(1);
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) lis[i] = Math.max(lis[i], lis[j], + 1);
        }
    }
    return nums.length ? Math.max.apply(null, lis) : 0;
}

function fizzBuzz(n) {
    const output = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            output.push("FizzBuzz")
        } else if ( i % 5 === 0 ) {
            output.push("Buzz")
        } else if ( i % 3 === 0 ) {
            output.push("Fizz")
        } else {
            output.push(String(i));
        }
    }
    return output;
}

function numPairsDivisibleBy60(time){
    const appearDic = {};
    let ans = 0;
    time.forEach(el => {
        const mod = el % 60
        const left = (60 - mod) % 60;
        ans += appearDic[left] ? appearDic[left] : 0;
        appearDic[mod] = appearDic[mod] ? appearDic[mod] + 1 : 1;
    })
    return ans
}

// numbers with repeated digits

var numDupDigitsAtMostN = function(N) {
    let r = N
    let nn = new Array(10).fill(false)
    let nnp = function (len, nn, t = 0) {
        if (len === 0) {
            if (t > N) return true
            r--
            return false
        } else {
            t*=10
            for (let i = (t?0:1); i < 10; i++){
                if (nn[i]) continue
                nn[i] = true
                let flag = nnp(len - 1, nn, t + i)
                nn[i] = false
                if (flag)return true
            }
        }
    }
    let Nlen = (""+N).length
    for (let len = 1; len <= Nlen; len ++){
        nnp(len, nn)            
    }
    
    return r
};

// minimum swaps
function minSwaps(data) {
    const ones = data.filter(d => d).length;
    let k = 0;
    for (let i = 0; i < ones; i += 1) k += data[i];
    let ans = ones - k;
    for (let i = ones; i < data.length; i += 1) {
        k += data[i] - data[i - ones];
        ans = Math.min(ans, ones - k);
    }
    return ans;
};

// water bottles

 function numWaterBottles(numBottles, numExchange) {
     let total = numBottles
     while (numBottles) {
         let drink = Math.floor(numBottles/numExchange)
         if(!drink) break;
         total += drink
         numBottles = drink + (numBottles%numExchange)
     }
     return total
 }

 // twoSum

 function twoSum(nums, target) {
     const ht = {};
     for (let i = 0; i < nums.length; i++) {
         const num = nums[i];
         const want = target - num
         if (want in ht) {
             const leftIndex = ht[want];
             return[leftIndex, i]
         } else {
             ht[num] = i;
         }
     }
 };

 // longest common prefix 

 function longestCommonPrefix(strs) {
     'use strict';
     if (strs === underfined || strs.length === 0) {return '';}

     return strs.reduce((prev, next) => {
         let i = 0;
         while (prev[i] && next[i] && prev[i] === next[i]) i++;
         return prev.slice(0, i);
     })
 };

 // threeSum

 function threeSum(array, targetSum) {
     array.sort((a, b) => a -b) 
     const triplets = [];
     for (let i = 0; i < array.length - 2; i++) {
         let left = i + 1;
         let right = array.length - 1;
         while (left < right) {
             const currentSum = array[i] + array[left] + array[right];
             if (currentSum === targetSum) {
                 triplets.push([array[i], array[left], array[right]]);
                 left++;
                 right++
             } else if (currentSum < targetSum) {
                 left ++
             } else if (currentSum > targetSum) {
                 right--
             }
         }
     }
     return triplets;
 } 

 // valid parenthesis

 function isValid(s) {
     let temp = [];
     let map = {
        '(': ')',
        '{': '}',
        '[': ']',
     }
     for (let i = 0; i < s.length; i++) {
         if(s[i] === '(' || s[i] === '{' || s[i] === '[')
         temp.push(s[i]);
         else if(map[temp.pop()] !== s[i]) {
             return false;
         }
     }
     if (temp.length > 0)
        return false;
     else 
     return true;
 };

 // merge two sorted lists

 function mergeTwoLists(l1, l2) {
     let prehead = {next: null}
     let p = prehead
     let p1 = l1
     let p2 = l2
     while(p1 && p2) {
         let pSel 
         if(p1.val > p2.val) {
             pSel = p1
             p1 = p1.next
         } else {
             letpSel
             pSel = p2
             p2 = p2.next
         } 
         p.next = pSel
         p = pSel
     }
     p.next = p1 || p2
     return prehead.next
 }

 // maxSubArray

 function maxSubArray(nums) {
     let solution = nums[0];
     for (let i = 0; i < nums.length; i++) {
         nums[i] = Math.max(nums[i], nums[i], nums[i -1]);
         solution = Math.max(solution, nums[i]);
     }
     return solution;
 }

 // merge sorted array

 function merge(nums1, m, nums2, n) {
     let first = m - 1;
     let second = n - 1;

     for (let i = m + n - 1; i >= 0; i--) {
         if (second < 0) {
             break;
         }
         if(nums1[first] > nums2[second]) {
             nums1[i] = nums1[first];
             first--;
         } else {
             nums1[i] = nums2[second];
             second--;
         }
     }
 }

 function isPalindrome(input) {
     let start = 0;
     let end = input.length - 1;
     while (start < end) {
         let s = input.charCodeAt(start)
         let e = input.charCodeAt(end)

         if(!isLetter(s)) {
             start++
             continue
         }
         if(!isLetter(e)) {
             end--
             continue
         }
         if (toLowerCase(s) !== toLowerCase(e)) {
             return false
         }
         start++
         end--
     }
     return true
 };

    let isLetter = function(code) {
        if (((code >= 48) && (code <= 57))
        || ((code >= 65) && (code <=90)) 
        || ((code >= 97) && (code <= 122))) {
            return true
        } else {
            return false
        }
    }

    let toLowerCase = function(code) {
        if (code >= 65 && code <= 90) {
            return code + 32
        } 
        else {
            return code
        }
    }

    // gas station

    function canCompleteCircut(gas, cost) {
        let curTank = 0, totalTank = 0, pos = 0;
        for (let i = 0; i < gas.length; i++) {
            curTank += gas[i] - cost[i];
            totalTank += gas[i] - cost[i];
            if (curTank < 0) {
                curTank = 0;
                pos = i + 1
            }
        }
        return totalTank < 0 ? - 1: pos;
    }
// reverse linked list

    function reverse(head) {
        let pre = null;
        while (head) {
            const next = head.next
            head.next = pre
            pre = head
            head = next
        }
        return pre
    };

    function maximalSquare(matrix) {
        if (!matrix.length) return 0;
        let dp = new Array(matrix.length + 1).fill(0).map(() => 
        new Array(matrix[0].length + 1).fill(0));
        let max = 0;
        for (let r = 1; r < dp.length; r++){
            for (let c = 1; c < dp[0].length; c++) {
                if (matrix[r - 1][c - 1] != 0) {
                    dp[r][c] = Math.min(dp[r][c - 1], dp[r - 1][c], dp[r - 1][c - 1]) + 1;
                    max = Math.max(dp[r][c], max);
                }
            }
        }
        return max**2
    }


// sliding window 

    function maxSlidingWindow(nums,k) {
        const q = [];
        const res = [];
        for (let i = 0; i < nums.length; i++){
            while (q && [q[q.length - 1]] <= nums[i]) {
                q.pop()
            }
            q.push(i)
            if(q[0] === i - k) {
                q.shift()
            }
            if (i >= k - 1) {
                res.push(nums[q[0]]);
            }
        }
        return res;
    };

// three sum smaller

    function threeSumSmaller(nums, target) {
        nums.sort((a, b) => a - b);

        function twoSumSmaller(startIdx, target) {
            let count = 0;
            let l = startIdx
            let r = nums.length - 1;
            while (l < r) {
                if (nums[l] + nums[r] < target) {
                    count += r - l
                    l++
                } else {
                    r--;
                }
            }
            return count;
        }
        let count = 0;
        for(let i = 0; i < nums.length - 2; i++) {
            count += twoSumSmaller( i + 1, target - nums[i]);
        }
        return count;
    } 

    // missing number

    function missingNumber(nums) {
        const res = new Array(nums.length + 1).fill(-1);
        for(const num of nums) {
            res[num] = num;
        }
        return res.indexOf(-1)
    }


    // group anagrams

    function groupAnagrams(strs) {
        const ht = {};
        for (let str of strs) {
            const sorted = str.split('').sort().join('');
            if(ht[sorted]) ht[sorted].push(str);
            else ht[sorted] = [str];
        }
        return Object.values(ht);
        // hash table to array or arrays
    };
    // time complexity => sort is n log n times n
    // O(n * (m log m))
    // space complexity n is keys in hash table O(n)

    // valid palindrome 

// naive solution
function isPalindrome(s) {
    return s.split('').reverse().join('') === s;
};

function isPalindrome(s) {
    const sanitized =  s.replace(/[^/w]/gi, '').toLowerCase();
    return s.split('').reverse().join('') === sanitized;
};

function isPalindrome(s) {
    const s =  s.replace(/[^/w]/gi, '').toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    } 
    return true;
};

// time complexity => O(n)
// space complexity => o(1) constant space

// valid parenthesis

function isValid(s) {
    const stack = [];
    const pairs  = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for(let char of s) {
        if (char in pairs) {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            const last = stack.pop();
            if (pairs[last] !== char) return false;
        }
    }
    if (stack.length) {
        return false;
    } else {
        return true;
    }
};

// time complexity => O(n)
// space complextiy => O(n) linear 

// search insert position  

function searchInsert(nums, target) {
    let lo = 0;
    let hi = nums.length -1;
    while(lo <= high) {
        let mid = Math.floor((hi + lo) / 2)
        let midVal = nums[mid];
        if (taget === midVal) {
        return mid;
    } else if (target > midVal) {
        lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    
};

function searchInsert(nums, target) {
    let lo = 0;
    let hi = nums.length -1;
    while(lo <= high) {
        let mid = Math.floor((hi + lo) / 2)
        let midVal = nums[mid];
        if (taget === midVal) {
        return mid;
    } else if (target > midVal) {
        lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    
};