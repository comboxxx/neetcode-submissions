class LinkNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = new LinkNode(-1); // {1, }
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head.next;
        let i = 0;

        while (curr) {
            if (i === index) return curr.value;

            curr = curr.next;
            i++;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new LinkNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;

        if (!newNode.next) {
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new LinkNode(val);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let curr = this.head;
        let i = 0;

        while (curr && i < index) {
            curr = curr.next;
            i++;
        }

        if (curr && curr.next) {
            curr.next = curr.next.next;

            if (!curr.next) this.tail = curr;

            return true;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let res = [];

        let curr = this.head.next;

        while (curr) {
            res.push(curr.value);
            curr = curr.next;
        }

        return res;
    }
}
