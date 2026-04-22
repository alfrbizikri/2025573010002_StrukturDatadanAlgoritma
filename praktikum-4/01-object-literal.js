// 01-object-literal.js
// ================================================
// OBJECT LITERAL: PROPERTY, METHOD, DAN THIS
// ================================================

// --- 1. Membuat object literal ---
const mahasiswa = {
  nama: "Budi Santoso",
  umur: 20,
  jurusan: "Teknik Informatika",
  ipk: 3.75,
  aktif: true,
};

// --- 2. Mengakses property ---
console.log("=== Akses Property ===");
console.log("Nama   :", mahasiswa.nama); // dot notation
console.log("Jurusan   :", mahasiswa["jurusan"]); // bracket notation

// Bracket notation berguna jika key disimpan di variabel
const keyYangDicari = "ipk";
console.log("IPK    :", mahasiswa[keyYangDicari]);

// --- 3. Menambah dan mengubah property ---
mahasiswa.email = "budi@email.com";
mahasiswa.umur = 21;

console.log("\nSetelah diubah:", mahasiswa);

// --- 4. Menghapus property ---
delete mahasiswa.aktif;
console.log("Setelah delete: ", mahasiswa);

const dosen = {
  nama: "Dr.Ahmad Fauzi",
  mataKuliah: "Struktur Data",
  pengalaman: 10,

  //method : function di dalam object
  perkenalan() {
    // 'this' merujuk ke object dosen itu sendiri
    return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
  },

  statusSenior() {
    if (this.pengalaman >= 10) {
      return `${this.nama} adalah dosen senior.`;
    } else {
      return `${this.nama} adalah dosen junior.`;
    }
  },
};

console.log("\n=== Method Object ===");
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

// --- 6. Iterasi key-value dengan for...in ---
console.log("\n=== Iterasi Object ===");
for (const key in dosen) {
  if (typeof dosen[key] !== "function") {
    console.log(` ${key}: ${dosen[key]}`);
  }
}

// Object.keys(), Object.values(), Object.entries()
console.log("Keys :", Object.keys(mahasiswa));
console.log("Values:", Object.values(mahasiswa));

console.log("");
console.log("===== LATIHAN 1 =====");
const buku = {
  judul: "Hujan",
  pengarang: "Tere Liye",
  tahunTerbit: 2007,
  harga: 50000,
  tersedia: true,

  info() {
    return `judul buku ${this.judul}, pengarang ${this.pengarang}, tahun terbit ${this.tahunTerbit}, harga ${this.harga}, tersedia= ${this.tersedia}`;
  },

  diskon(persen) {
    const potongan = this.harga * (persen / 100);
    return this.harga - potongan;
  },
};

console.log(buku.info());
console.log(buku.diskon(10));

const koleksiBuku = [
  {
    judul: "Hujan",
    pengarang: "Tere Liye",
    harga: 50000,
    tersedia: true,
  },
  {
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    harga: 70000,
    tersedia: false,
  },
  {
    judul: "Dilan 1990",
    pengarang: "Pidi Baiq",
    harga: 60000,
    tersedia: true,
  },
];


koleksiBuku.forEach((item, indeks) => {
  console.log(`${indeks + 1}. judul: ${item.judul}, pengarang: ${item.pengarang}, harga: ${item.harga}, Tersedia: ${item.tersedia}`);
});

const bukuTersedia = koleksiBuku.filter((item) => item.tersedia === true);
console.log('Tersedia :', bukuTersedia);



