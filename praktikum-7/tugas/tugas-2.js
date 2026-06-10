// Node Ll
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


// Stack ll
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // O(1)
    push(data) {
        const node = new Node(data);

        node.next = this.top;
        this.top = node;
        this.size++;
    }

    // O(1)
    pop() {
        if (this.isEmpty()) return null;

        const val = this.top.data;
        this.top = this.top.next;
        this.size--;

        return val;
    }

    // O(1)
    peek() {
        return this.top ? this.top.data : null;
    }

    // O(1)
    isEmpty() {
        return this.size === 0;
    }
}


// Min Stack
class MinStack {
    constructor() {
        this.stackData = new Stack();
        this.stackMin = new Stack();
    }

    // O(1)
    push(value) {

        this.stackData.push(value);

        if (
            this.stackMin.isEmpty() ||
            value <= this.stackMin.peek()
        ) {
            this.stackMin.push(value);
        }
    }

    // O(1)
    pop() {

        if (this.stackData.isEmpty()) {
            return null;
        }

        const removed = this.stackData.pop();

        if (removed === this.stackMin.peek()) {
            this.stackMin.pop();
        }

        return removed;
    }

    // O(1)
    getMin() {
        return this.stackMin.peek();
    }

    // O(1)
    peek() {
        return this.stackData.peek();
    }

    // O(1)
    isEmpty() {
        return this.stackData.isEmpty();
    }
}


const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

console.log("getMin() =", ms.getMin()); // 2

ms.pop();

console.log("getMin() =", ms.getMin()); // 3

ms.pop();

console.log("getMin() =", ms.getMin()); // 3