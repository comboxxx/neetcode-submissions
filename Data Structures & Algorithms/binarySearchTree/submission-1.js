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
        const helper = (root) => {
            if (!root) return new TreeNode(key, val);

            if (key > root.key) {
                root.right = helper(root.right);
            } else if (key < root.key) {
                root.left = helper(root.left);
            } else {
                root.val = val;
            }

            return root;
        };

        this.root = helper(this.root);
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let res = -1;
        const helper = (root) => {
            if (!root || res !== -1) return;
            if (root.key > key) {
                helper(root.left);
            } else if (root.key < key) {
                helper(root.right);
            } else {
                res = root.val;
            }
        };
        helper(this.root);
        return res;
    }

    /**
     * @returns {number}
     */

    getMinNode(root) {
        let res = null;
        const helper = (root) => {
            if (!root) {
                return;
            }
            if (!root.left) {
                res = root;
                return;
            }
            helper(root.left);
        };

        helper(root);

        return res;
    }

    getMin() {
        return this.getMinNode(this.root)?.val || -1;
    }

    /**
     * @returns {number}
     */
    getMax() {
        let res = -1;
        const helper = (root) => {
            if (!root) return;
            if (!root.right) {
                res = root.val;
                return;
            }

            helper(root.right);
        };

        helper(this.root);

        return res;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
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

        const helper = (root) => {
            if (!root) return null;
            helper(root.left);
            res.push(root.key);
            helper(root.right);
        };

        helper(this.root);

        return res;
    }
}
