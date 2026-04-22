// 04-inheritance.js
// ================================================
// INHERITANCE: EXTENDS, SUPER, OVERRIDE
// ================================================

// --- Parent Class ---
class Kendaraan {
    constructor(merk, model, tahun){
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
        this.kecepatanSaatIni = 0;
    }

    akselerasi(tambahan) {
        this.kecepatanSaatIni += tambahan;
        console.log(`${this.merk} ${this.model}: kecepatan ${this.kecepatanSaatIni}`)
    }

    rem(){
        this.kecepatanSaatIni = 0;
        console.log(`${this.merk} ${this.model}: berhenti.`);
    }

    info() {
        return `${this.tahun} ${this.merk} ${this.model}`;
    }
}

// --- Child Class: Mobil ---
class Mobil extends Kendaraan {
    constructor(merk, model, tahun, jumlahPintu){
        super(merk, model, tahun);    //Panggil constructor parent
        this.jumlahPintu = jumlahPintu //property tambahan
    }

    //method baru tidak ada di parent
    bunyikanKlakson(){
        console.log(`${this.merk}: Beep beep`)
    }

    // Override method info() dari parent
    info() {
        const infoParent = super.info(); //ambil hasil parent
        return `${infoParent} (${this.jumlahPintu} pintu)`;
    }
}

// --- Child Class: Motor ---
class Motor extends Kendaraan {
    constructor(merk, model, tahun, jenisMotor) {
        super(merk, model, tahun);
        this.jenisMotor = jenisMotor;
    }

    wheelie() {
        if(this.kecepatanSaatIni > 50) {
            console.log(`${this.merk} : Wheelie!`);
        } else {
            console.log('Kecepatan terlalu rendah untuk wheelie. ');
        }
    }

    info(){
        return `${super.info()} [${this.jenisMotor}]`;
    }
}

class Truk extends Kendaraan{
    constructor(merk, model, tahun, kapasitasMuat){
        super(merk, model, tahun);
        this.kapasitasMuat = kapasitasMuat;
    }

    Big(){
        if(this.kapasitasMuat > 100){
            console.log(`${this.merk} : BIGG`);
        } else {
            console.log('L truk')
        }
    }

    info(){
        const infoParent = super.info();
         return `${infoParent} (${this.kapasitasMuat} Muatan)`;
    }
}

// --- Membuat instance ---
const mobil = new Mobil('Toyota', 'Avanza', 2022, 4);
const motor = new Motor('Honda', 'CBR600RR', 2021, 'Sport');
const truk = new Truk('Bison', 'Bull', 2021, 200);

console.log('=== Info Kendaraan ===');
console.log(mobil.info());
console.log(motor.info());
console.log(truk.info());

console.log('\n=== Aksi ===');
truk.Big();
mobil.akselerasi(60); // method dari parent
mobil.bunyikanKlakson(); // method child
motor.akselerasi(80);
motor.wheelie();
motor.rem();

// --- instanceof: cek tipe object ---
console.log('\n=== instanceof ===');
console.log('mobil instanceof Mobil :', mobil instanceof Mobil);            // true
console.log('mobil instanceof Kendaraan :', mobil instanceof Kendaraan);    // true!
console.log('motor instanceof Mobil :', motor instanceof Mobil);            // false
console.log('motor instanceof truk :', motor instanceof Truk);            // false


// --- Polymorphism: method info() berbeda untuk tiap class ---
console.log('\n=== Polymorphism ===');
const semuaKendaraan = [mobil, motor, truk];
semuaKendaraan.forEach(k => console.log(k.info()));

console.log("");
console.log("===== LATIHAN 4 =====");

class Hewan{
    constructor(nama, suara){
        this.nama = nama;
        this.suara = suara;
    }

    bersuara(){
        return `${this.nama} berkata : [${this.suara}]`;
    }

    info(){
        return `${this.nama} ${this.suara}`;
    }
}

class Anjing extends Hewan{
    constructor(nama, suara, jenis){
        super(nama, suara);
        this.jenis = jenis;
    }

    fetch(){
        return `${this.nama} Mengambil bola!`;
    }

    info(){
        const infoParent = super.info();
        return `${infoParent} ${this.jenis}`;
    }
}

class Kucing extends Hewan{
    constructor(nama, suara, jenis){
        super(nama, suara);
        this.jenis = jenis;
    }

    cakarSofa(){
        return `${this.nama} mencakar sofa!`
    }

    bersuara(){
        const suara = super.bersuara();
        return (`${suara}\nPurrrr`);
    }
}

const anjing = new Anjing('Anjing', 'Guguk', 'Bulldog');
const kucing = new Kucing('Kucing', 'Meong', 'Anggora');

console.log(anjing.info());
kucing.bersuara();
console.log(kucing.cakarSofa());

console.log('anjing instanceof anjing :', anjing instanceof Anjing);    
console.log('kucing instanceof anjing :', kucing instanceof Anjing);    
console.log('kucing instanceof kucing :', kucing instanceof Kucing);    
console.log('anjing instanceof kucing :', anjing instanceof Kucing);  


const semuaHewan = [anjing, kucing];
semuaHewan.forEach(n => {
    console.log("");
    console.log('===Semua Hewan===');
    console.log(n.bersuara());
    console.log(n.info());
})


