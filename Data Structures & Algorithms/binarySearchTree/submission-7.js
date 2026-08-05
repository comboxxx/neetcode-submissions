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
        const helper = (root) => {
            if (!root) return -1;

            if (key > root.key) return helper(root.right);
            else if (key < root.key) return helper(root.left);

            return root.val;
        };

        return helper(this.root);
    }

    /**
     * @returns {number}
     */

    getMinNode(root) {
        if (!root) return null;

        let curr = root;
        while (curr.left) {
            curr = curr.left;
        }

        return curr;
    }

    getMin() {
        return this.getMinNode(this.root)?.val || -1;
    }

    /**
     * @returns {number}
     */

    getMaxNode(root) {
        if (!root) return null;

        let curr = root;

        while (curr.right) {
            curr = curr.right;
        }

        return curr;
    }
    getMax() {
        const maxNode = this.getMaxNode(this.root);
        return maxNode ? maxNode.val : -1;
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
