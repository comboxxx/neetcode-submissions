class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */

    array = [];
    constructor(capacity) {
        this.capacity = capacity; // ความจุทั้งหมดที่จองไว้
        this.length = 0; // จำนวนข้อมูลจริงที่มีอยู่ตอนนี้ (เริ่มต้นคือ 0)
        this.arr = new Array(capacity); // จองพื้นที่ล่วงหน้า
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.length === this.capacity) {
            this.resize();
        }

        this.arr[this.length] = n;

        this.length++;
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.length > 0) {
            // 1. ลดจำนวนข้อมูลจริงลง 1
            this.length--;
        }
        // 2. คืนค่าตัวที่เพิ่งถูกเอาออก (อยู่ที่ index เท่ากับ length ใหม่)
        const val = this.arr[this.length];
        this.arr[this.length] = undefined; // ล้างค่าทิ้งเพื่อความสบายใจ
        return val
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2;
        const newArr = new Array(this.capacity);

        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
