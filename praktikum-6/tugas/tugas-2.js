class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function palindromLL(head){
    let arr = [];
    let current = head;
    while(current){
        arr.push(current.data);
        current = current.next;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function hapusNDariAkhir(head, n) {

    let fast = head;
    let slow = head;

    for(let i = 0; i < n; i++){
        fast = fast.next;
    }

    if(fast === null) {
        return head.next;
    }

    while(fast.next){
        slow = slow.next;
        fast = fast.next
    }
    slow.next = slow.next.next;

    return head;
}

function tengahLinkedList(head) {

    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow  = slow.next;
        fast = fast.next.next
    }

    return slow;
}

function printList(head) {
    let current = head;
    let result = "";

    while(current) {
        result += current.data;

        if(current.next) {
            result += " -> ";
        }

        current = current.next;
    }

    console.log(result);
}

let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(2);
head1.next.next.next.next = new Node(1);

let head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);

let head3 = new Node(1);
head3.next = new Node(2);
head3.next.next = new Node(2);
head3.next.next.next = new Node(1);

//=============================================

let tengah1 = new Node(1);
tengah1.next = new Node(2);
tengah1.next.next = new Node(3);
tengah1.next.next.next = new Node(4);

let tengah2 = new Node(1);
tengah2.next = new Node(2);
tengah2.next.next = new Node(3);
tengah2.next.next.next = new Node(4);
tengah2.next.next.next.next = new Node(5);
tengah2.next.next.next.next.next = new Node(6);

let tengah3 = new Node(1);
tengah3.next = new Node(2);

//================================================

let h1 = new Node(1);
h1.next = new Node(2);
h1.next.next = new Node(3);
h1.next.next.next = new Node(4);
h1.next.next.next.next = new Node(5);

let h2 = new Node(1);
h2.next = new Node(2);
h2.next.next = new Node(3);
h2.next.next.next = new Node(4);
h2.next.next.next.next = new Node(5);

let h3 = new Node(1);
h3.next = new Node(2);
h3.next.next = new Node(3);
h3.next.next.next = new Node(4);
h3.next.next.next.next = new Node(5);
//=============================================

console.log("=== Palindrom ===");
console.log(palindromLL(head1));
console.log(palindromLL(head2));
console.log(palindromLL(head3));

console.log("=== TENGAH LINKED LIST ===");
console.log("case 1:", tengahLinkedList(tengah1).data);
console.log("case 2:", tengahLinkedList(tengah2).data);
console.log("case 3:", tengahLinkedList(tengah3).data);

console.log("=== HAPUS N DARI AKHIR ===");
console.log("Kasus 1 sebelum:");
printList(h1);
h1 = hapusNDariAkhir(h1, 2);

console.log("Kasus 1 sesudah:");
printList(h1);
console.log("");

console.log("Kasus 2 sebelum:");
printList(h2);
h2 = hapusNDariAkhir(h2, 1);

console.log("Kasus 2 sesudah:");
printList(h2);
console.log("");

console.log("Kasus 3 sebelum:");
printList(h3);
h3 = hapusNDariAkhir(h3, 5);

console.log("Kasus 3 sesudah:");
printList(h3);




