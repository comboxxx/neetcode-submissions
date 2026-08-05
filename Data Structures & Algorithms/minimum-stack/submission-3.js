class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.minStack.length < 1 || val <= this.minStack[this.minStack.length - 1])
            this.minStack.push(val);
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1])
            this.minStack.pop();

        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
