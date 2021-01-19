// Linked List

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
const node = new ListNode(1);
node.next = new ListNode(2);

// functional class
    function ListNode(value) {
        his.value = value;
        this.next = null
    }
    const node = new ListNode(3);


// Problems
// 1. remove nth node from end of the list
var removeNthFromEnd = function(head, n) {
        // 1. measure length
        let on = head;
        let length = 1;
        while (on) {
            length++;
            on = on.next;
        }
        let left = length - n - 1;
        if (leftIndex === 0) {
            return head.next;
        }
        // 2. point around to delete node
        on = head;
        while (leftIndex-- > 1) {
            on = on.next
        }
        on.next = on.next.next;
        return head;
        // 3. handle head deleted 


    };

// time complexity ->  2 loops in sequence O(n)
// space complexity -> O(3) -> constant time

// tail recursion
// passing through everything we "need" on each recursive call
// normal recurison 
// performing addition on "bubble up" step

// 2. reverse a linked list both intertively and recursively
//iterative
    var reverseList = function(head) {
        let prev = null;
        let on = head;
        while(on !== null) {
            let temp = on.next;
            on.next = prev;
            prev = on;
            on = temp;
        }
        return prev;
    };
// time complexity -> while loop O(n)
// space complexity -> O(1)
    // recursive

    var reverseListR = function(on, prev = null) {
        if (on === null) return prev;
        let temp = on.next;
        on.next = prev;
        return reverseListR(temp, on)
    };

// time complexity -> while loop O(n)
// space complexity -> recurisve are saved in stack frames O(1)

// Linked List Cycle
// given a linked list, determine if it has a cycle in it

var hasCycle = function(head) {
    const nodes = new Set();
    let on = head;
    while(on !== null) {
        if(nodes.has(on)) return true;
        nodes.add(on);
        on = on.next
    }
    return false;
};

// time complexity -> while loop O(n)
// space complexity -> extra data struc. set O(n)

var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};

// time complexity ->  O(n)
// space complexity -> O(1)