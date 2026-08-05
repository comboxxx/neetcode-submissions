class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MyStack {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        let newNode = new ListNode(x, this.head);
        this.head = newNode;
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.empty()) return null;
        let val = this.head.val;
        this.head = this.head.next;

        return val;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.empty()) return null;

        return this.head.val;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.head === null;
        // if (!this.head) return true;
        // return false;
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
