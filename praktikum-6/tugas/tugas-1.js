class node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Big O: O(1)
    append(data) {
        const newNode = new Node(data);     

        if(!this.head) {         
            this.head = newNode 
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++ 
    }
    //method append() memiliki kompleksitas O(1) karena node baru langsung dihubungkan ke node terkahir mengggunakan pointer tail.
    //tidak perlu lagi melakukan perulangan/traversal mencari node terakhir

    // Big O: O(1)
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
    }

    // Big O: O(n)
    insertAt(data, index){
    if(index < 0 || index > this.size) {
        console.log('Index di luar batas!');
        return;
    }
    if(index === 0) {
        this.prepend(data);
        return;
    }
     if (index === this.size) {
        this.append(data);
        return;
    }
    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) current = current.next;
    let nextNode = current.next;
    newNode.next = nextNode;
    newNode.prev = current;

    current.next = newNode;
    nextNode.prev = newNode;
    this.size++;
    }

    // Big O: O(n)
        delete(data){
            if(!this.head) return false;
            let current = this.head;
            while (current) {
            if(current.data === data) {
                if(current === this.head){
                    this.head = this.head.next;

                    if(this.head){
                        this.head.prev = null;
                    } else {
                        this.tail = null;
                    }

                    this.size--;
                    return true;
                }

                current.prev.next = current.next;
                current.next.prev = current.prev;

                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Big O: O(n)
    reverse(){

        let current = this.head;
        let temp = null;
        while(current){
            temp = current.next;
            current.next = cirrent.prev;
            current.prev = temp;

            current = temp;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // Big O: O(n)
    print() {
        if (!this.head) { console.log(' [List kosong]'); return; }
        let result = '';
        let current = this.head;
        while (current) {
            result += `[${current.data}]`;

            if(current.next){
                result += "<->";
            }
            current = current.next;
        }
        current = this.tail;

        let backward = "";

        while(current){
            backward += `[${current.data}]`;

            if(current.prev){
                backward += " <-> ";
            }

            current = current.prev;
        }
        console.log("Forward :", forward);
        console.log("Backward:", backward);
    }
 }   