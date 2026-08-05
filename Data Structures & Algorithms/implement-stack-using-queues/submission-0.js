class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyStack {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        let newNode = new ListNode(x);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @return {number}
     */
    pop() {
        let oldValue = this.tail.val
        this.tail.prev.next = null;
        this.tail = this.tail.prev;

        return oldValue
    }

    /**
     * @return {number}
     */
    top() {
        return this.tail.val
    }

    /**
     * @return {boolean}
     */
    empty() {
        if(!this.head.next) return true

        return false
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
