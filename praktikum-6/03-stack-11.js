class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }

    removeHead(){
        if(!this.head) return null;

        const removed = this.head.data;
        this.head = this.head.next;

        this.length--;

        return removed;
    }

    getHead(){
        if (!this.head) return null;
        return this.head.data;
    }

    isEmpty() {
        return this.head === null;
    }

    size(){
        return this.length;
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += `[${current.data}]`;

            if (current.next) {
                result += " -> ";
            }

            current = current.next;
        }

        console.log(result);
    }

}

class Stack {
    constructor(){
        this.list = new LinkedList();
    }

    push(data){
        this.list.prepend(data);
    }

    pop() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.getHead();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    size() {
        return this.list.size();
    }

    print() {
        this.list.print();
    }
}

//demo stack biasa

const stack = new Stack();

stack.push("A");
stack.push("B");
stack.push("C");

stack.print();

console.log("Peek:", stack.peek());
console.log("Pop:", stack.pop());
stack.print();

//demo undo
const undoStack = new Stack();

const actions = [
    "buat class node",
    "tambah class linkedList",
    "tambah method push",
    "tambah method pop"
]

for(let action of actions){
    undoStack.push(action);
}

undoStack.print();

console.log("Undo:", undoStack.pop());
console.log("Undo:", undoStack.pop());

undoStack.print();