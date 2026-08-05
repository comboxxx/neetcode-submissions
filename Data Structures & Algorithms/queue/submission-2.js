class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyDeque {
    constructor() {
        // this.queue = [];
        this.queue = new ListNode(-1);
        this.tail = this.queue;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.queue.next === null;
    }

    /**
     * @param {number} value
     */
    append(value) {
        // this.queue.push(value);
        const newNode = new ListNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        // this.queue.unshift(value);
        const newNode = new ListNode(value);
        newNode.next = this.queue.next;
        newNode.prev = this.queue;
        if (this.queue.next) this.queue.next.prev = newNode;
        this.queue.next = newNode;

        if (!newNode.next) this.tail = newNode;
    }

    /**
     * @return {void}
     */
    pop() {
        // if (this.queue.length === 0) return -1;
        // return this.queue.pop();
        if (!this.queue.next) return -1;

        const val = this.tail.val;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;

        return val;
    }

    /**
     * @return {number}
     */
    popleft() {
        //     if (this.queue.length === 0) return -1;
        //     return this.queue.shift();

        if (!this.queue.next) return -1;

        const val = this.queue.next.val;
        let newFirstNode = this.queue.next.next;

        this.queue.next = newFirstNode;

        if (!newFirstNode) {
            this.tail = this.queue;
        } else {
            newFirstNode.prev = this.queue;
        }

        return val;
    }
}
