class Produk{
    constructor(id, nama, harga, stok){
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info(){
        return `${this.id} ${this.nama} ${this.harga} ${this.stok}`
    }

    tersedia(){
        return this.stok > 0;
    }

    jual(jumlah){
        if(jumlah > this.stok){
            console.log("Stok tidak boleh negatif");
        }
        this.stok -= jumlah;
    }
}

class ProdukDigital extends Produk{
    constructor(id, nama, harga, stok, ukuranFile, formatFile){
        super(id, nama, harga, stok);
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info(){
        return `${super.info()} [${this.ukuranFile} MB] [${this.formatFile}]`;
    }

    download(){
        return `Download (produk digital tidak punya stok fisik)`;
    }

    jual(){
        console.log("Produk digital tidak mengurangi stok.");
    }
}

class ProdukFisik extends Produk{
    constructor(id, nama, harga, stok, beratGram, dimensi){
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info(){
        return `${super.info()} [${this.beratGram} Gram] [${this.dimensi}]`;
    }

    hitungOngkir(tarifPerKg){
        const TotalOngkir = (this.beratGram / 1000) * tarifPerKg;
        return `Tarif Ongkir = Rp${TotalOngkir}`;
    }
}

const p1 = new ProdukDigital(1, "Ebook JS", 50000, 100, 5, "PDF");
const p2 = new ProdukDigital(2, "Video Course", 150000, 100, 700, "MP4");

const p3 = new ProdukFisik(3, "Mouse Gaming", 200000, 10, 300, "10x5x3 cm");
const p4 = new ProdukFisik(4, "Keyboard", 350000, 0, 800, "40x15x5 cm");

const daftarProduk = [p1, p2, p3, p4];
console.log('=== Semua Produk ====');
daftarProduk.forEach(n => {
    console.log(n.info());
})

const sedia = daftarProduk.filter((n) => n.tersedia() > 0);
console.log("Produk Tersedia : ", sedia);

const nama = daftarProduk.map(n => n.nama);
console.log(nama);
