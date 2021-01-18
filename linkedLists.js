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

    // recursive

    var reverseListR = function(head) {
        
    }



