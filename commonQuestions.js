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