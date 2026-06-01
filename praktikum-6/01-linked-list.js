// 01-linked-list.js
// ============================================
// SINGLY LINKED LIST — Implementasi Lengkap
// ===========================================

// ── Class Node: unit terkecil linked list ──
//membuat satu node pada linked list
class Node {
    constructor(data) {
        this.data = data;  //menyimpan nilai/data node
        this.next = null;  //pointer ke node berikutnya
    }
}

// ── Class LinkedList ────────────────────────
class LinkedList {
    constructor() {
        this.head = null;     //pointer ke node pertama, awalnya null karena list kosong
        this.size = 0;      // menyimpan jumlah node
    }

    append(data) {
        const newNode = new Node(data);     //Mmebuat node baru, memakai class node

        if(!this.head) {         // head belum ada masih null maka kondisi True
            this.head = newNode // 10 jadikan node pertama
        } else {
            let current = this.head;
            while(current.next) current = current.next; //traverse ke akhir
            current.next = newNode;     //sambungkan ke node baru
        }
        this.size++ 
    }

    //tambah node di awal - 0(1)
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    //insert di posisi indeks tertentu O(n)
    insertAt(data, index){
    if(index < 0 || index > this.size) {
        console.log('Index di luar batas!');
        return;
    }
    if(index === 0) {
        this.prepend(data);
        return;
    }
    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) current = current.next;
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
    }

    //hapus node berdasarkan nilai - 0(n)
        delete(data){
            if(!this.head) return false;
            if(this.head.data === data){
                this.head = this.head.next;
                this.size--;
                return true;
            }
            let current = this.head;
            while (current.next) {
            if(current.next.data === data) {
                current.next = current.next.next; // lewati node yang dihapus
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Cari node berdasarkan nilai — O(n)
    search(data) {
        let current = this.head;
        let index = 0;
        while (current) {
        if (current.data === data) return index;
        current = current.next;
        index++;
    }
    return -1;
}

    //Tampilkan semua node — O(n)
    print() {
        if (!this.head) { console.log(' [List kosong]'); return; }
        let result = '';
        let current = this.head;
        while (current) {
            result += current.next ? `[${current.data}] → ` : `[${current.data}]`;
            current = current.next;
        }
        console.log(' ', result, ` (size: ${this.size})`);
    }

    // Balik urutan list — O(n)
    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            const next = current.next; // simpan next sementara
            current.next = prev; // balik pointer
            prev = current; // geser prev maju
            current = next; // geser current maju
        }
        this.head = prev; // head sekarang adalah node terakhir
    }

    // Konversi ke Array (untuk inspeksi) — O(n)
    toArray() {
        const arr = [];
        let current = this.head;
        while (current) { arr.push(current.data); current = current.next; }
        return arr;
    }

    getAt(index) {
        if (index < 0 || index >= this.size){
            console.log('index di luar batas!');
            return null;
        }
        let current = this.head;
        let count = 0
        while (current){
            if (count === index) {
                return current.data;
            }

            current = current.next;
            count++;
        }
        return null; 
    }

    deleteAt(index){
        if(index < 0 || index >= this.size) {
            console.log('Index di luar batas!');
            return false;
        }

        //hapus index 0
        if(index === 0){
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let count = 0;
        let current = this.head;
        while (count < index - 1){
            current = current.next;
            count++;
        }

        current.next = current.next.next;

        this.size--;
        return true;
    }

    indexOf(data){
        let current = this.head;
        let index = 0;
        while(current) {
            if (current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    isEmpty(){
        if(this.size === 0){
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.head = null;
        this.size = 0;
    }
    

}

// ── Demonstrasi ────────────────────────────────
const ll = new LinkedList();
const test = new LinkedList();
const test1 = new LinkedList();

console.log('=== getAt ===');
ll.append(10); ll.append(20); ll.append(30); ll.append(40);
ll.print();
console.log('Index 0 :', ll.getAt(0));
console.log('Index 2 :', ll.getAt(2));
console.log('Index 3 :', ll.getAt(3));
console.log('Index 10 :', ll.getAt(10));
console.log('');

console.log('=== DeletAt ===');
test.append(10); test.append(20); test.append(30); test.append(40);
test.print();
test.deleteAt(2);
test.print();
console.log('');

console.log('\n=== indexOf ===');
test1.append(10); test1.append(20); test1.append(30); test1.append(40);
test1.print();
console.log(' Indeks nilai 30:', test1.indexOf(30));
console.log(' Indeks nilai 99:', test1.indexOf(99));
console.log('');

console.log('=== Append ===');
ll.append(10); ll.append(20); ll.append(30); ll.append(40);
ll.print();

console.log('\n=== Prepend ===');
ll.prepend(5);
ll.print();

console.log('\n=== Insert di indeks 2 ===');
ll.insertAt(15, 2);
ll.print();

console.log('\n=== Search ===');
console.log(' Indeks nilai 20:', ll.search(20));
console.log(' Indeks nilai 99:', ll.search(99));

console.log('\n=== Delete 20 ===');
ll.delete(20);
ll.print();

console.log('\n=== Reverse ===');
ll.reverse();
ll.print();


