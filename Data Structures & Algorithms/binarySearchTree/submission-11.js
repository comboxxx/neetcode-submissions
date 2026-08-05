class TreeNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class TreeMap {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        const newNode = new TreeNode(key, val);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let curr = this.root;
        while (curr) {
            if (key > curr.key) {
                if (!curr.right) {
                    curr.right = newNode;
                    break;
                }
                curr = curr.right;
            } else if (key < curr.key) {
                if (!curr.left) {
                    curr.left = newNode;
                    break;
                }

                curr = curr.left;
            } else {
                curr.val = val;
                break;
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let curr = this.root;
        while (curr) {
            if (key > curr.key) {
                curr = curr.right;
            } else if (key < curr.key) {
                curr = curr.left;
            } else {
                return curr.val;
            }
        }

        return -1;
    }

    /**
     * @returns {number}
     */

    getMinNode(root) {
        if (!root) return null;
        let curr = root;

        while (curr) {
            if (!curr.left) return curr;
            curr = curr.left;
        }
    }

    getMin() {
        if (!this.root) return -1;
        return this.getMinNode(this.root)?.val;
    }

    /**
     * @returns {number}
     */
    getMaxNode(root) {
        if (!root) return null;
        let curr = root;
        while (curr) {
            if (!curr.right) return curr;
            curr = curr.right;
        }
    }
    getMax() {
        if (!this.root) return -1;
        return this.getMaxNode(this.root)?.val;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        if (!this.root) return;

        const helper = (root, key) => {
            if (!root) return null;

            if (key > root.key) {
                root.right = helper(root.right, key);
            } else if (key < root.key) {
                root.left = helper(root.left, key);
            } else {
                if (root.left && root.right) {
                    const minNode = this.getMinNode(root.right);
                    root.key = minNode.key;
                    root.val = minNode.val;

                    root.right = helper(root.right, minNode.key);
                } else if (!root.left) return root.right;
                else if (!root.right) return root.left;
            }

            return root;
        };

        this.root = helper(this.root, key);
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        const res = [];
        const stack = [];

        let curr = this.root;
        while (curr !== null || stack.length > 0) {
            if (curr !== null) {
                stack.push(curr);
                curr = curr.left;
            } else {
                curr = stack.pop();
                res.push(curr.key);
                curr = curr.right;
            }
        }
        return res;
    }
}
