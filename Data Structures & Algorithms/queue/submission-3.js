class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
class MyDeque {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head.next === null;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const newNode = new ListNode(value);
        newNode.next = this.tail.next;
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newNode = new ListNode(value);
        newNode.next = this.head.next;
        newNode.prev = this.head;
        if (this.head.next) this.head.next.prev = newNode;
        else {
            this.tail = newNode;
        }
        this.head.next = newNode;
    }

    /**
     * @return {void}
     */
    pop() {
        if (!this.head.next) return -1;
        const val = this.tail.val;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;

        return val;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (!this.head.next) return -1;

        const val = this.head.next.val;
        const newFirstNode = this.head.next.next;
        if (newFirstNode) {
            newFirstNode.prev = this.head;
        } else {
            this.tail = this.head;
        }
        this.head.next = newFirstNode;

        return val
    }
}
