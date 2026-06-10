// Node ll
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// Queue ll
class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data){
        const node = new Node(data);

        if(!this.tail){
            this.head = this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    dequeue(){
        if(this.isEmpty()) return null;

        const val = this.head.data;
        this.head = this.head.next;

        if(!this.head){
            this.tail = null;
        }

        this.size--;

        return val;
    }

    isEmpty(){
        return this.size === 0;
    }

    print(){
        let cur = this.head;
        let hasil = "";

        while(cur){
            hasil += `[${cur.data.nama}] `;
            cur = cur.next;
        }

        return hasil || "(kosong)";
    }
}

// Class Pasien
class Pasien {
    constructor(id,nama,prioritas){
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas;
        this.waktuDaftar = new Date();
    }
}

//Sistem Antrian RS
class AntrianRS {
    constructor(){
        this.antrianDarurat = new Queue();
        this.antrianBiasa = new Queue();
    }

    daftar(pasien){

        if(pasien.prioritas === "darurat"){
            this.antrianDarurat.enqueue(pasien);
        }else{
            this.antrianBiasa.enqueue(pasien);
        }

        console.log(
            `${pasien.nama} berhasil daftar (${pasien.prioritas})`
        );
    }

    layani(){

        let pasien = null;

        if(!this.antrianDarurat.isEmpty()){
            pasien = this.antrianDarurat.dequeue();
        }
        else if(!this.antrianBiasa.isEmpty()){
            pasien = this.antrianBiasa.dequeue();
        }

        if(pasien){
            console.log(
                `Melayani: ${pasien.nama} (${pasien.prioritas})`
            );
        }else{
            console.log("Tidak ada pasien.");
        }
    }

    tampilkanAntrian(){

        console.log("\n=== STATUS ANTRIAN ===");

        console.log(
            "Darurat:",
            this.antrianDarurat.print()
        );

        console.log(
            "Biasa:",
            this.antrianBiasa.print()
        );

        console.log("");
    }
}

const rs = new AntrianRS();

const pasienList = [
    new Pasien(1,"Andi","biasa"),
    new Pasien(2,"Budi","darurat"),
    new Pasien(3,"Citra","biasa"),
    new Pasien(4,"Doni","darurat"),
    new Pasien(5,"Eka","biasa"),
    new Pasien(6,"Farah","darurat"),
    new Pasien(7,"Gilang","biasa"),
    new Pasien(8,"Hani","darurat"),
    new Pasien(9,"Indra","biasa"),
    new Pasien(10,"Joko","biasa")
];

pasienList.forEach(p => rs.daftar(p));

rs.tampilkanAntrian();

console.log("\n=== PROSES PELAYANAN ===");

while(
    !rs.antrianDarurat.isEmpty() ||
    !rs.antrianBiasa.isEmpty()
){
    rs.layani();
}