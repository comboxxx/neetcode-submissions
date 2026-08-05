class MyStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.unshift(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.empty()) return null;
        return this.stack.shift();
    }

    /**
     * @return {number}
     */
    top() {
        if (this.empty()) return null;
        return this.stack[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stack.length === 0
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
