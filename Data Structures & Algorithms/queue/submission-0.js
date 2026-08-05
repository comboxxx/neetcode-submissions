class MyDeque {
    constructor() {
        this.queue = [];
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.queue.length === 0;
    }

    /**
     * @param {number} value
     */
    append(value) {
        this.queue.push(value);
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        this.queue.unshift(value);
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.queue.length < 1) return -1;

        return this.queue.pop();
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.queue.length < 1) return -1;
        let val = this.queue[0];
        this.queue.shift();
        return val;
    }
}
