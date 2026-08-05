class MinStack {
    constructor() {
        this.mainStack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.minStack.length < 1 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
        this.mainStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.mainStack.length < 1) return null;

        if (this.mainStack[this.mainStack.length - 1] === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }

         this.mainStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if (this.mainStack.length < 1) return null;

        return this.mainStack[this.mainStack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
       return this.minStack[this.minStack.length - 1];
    }
}
