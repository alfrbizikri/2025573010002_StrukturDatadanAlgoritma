// 04-array-method.js
// ================================================
// METHOD ITERASI: forEach, map, filter, reduce
// ================================================
const nilaiMahasiswa = [75, 90, 55, 82, 68, 95, 48, 77];

// --- 1. forEach: menjalankan sesuatu untuk setiap elemen ---
console.log("=== forEach: Tampilkan Semua Nilai ===");
nilaiMahasiswa.forEach((nilai, indeks) => {
  console.log(` Mahasiswa-${indeks + 1}: ${nilai}`);
});

// --- 2. map: transformasi setiap elemen menjadi nilai baru ---
// Konversi nilai angka ke grade huruf
const gradeHuruf = nilaiMahasiswa.map((nilai) => {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
});

console.log("\n=== map: Nilai ke Grade ===");
console.log("Nilai :", nilaiMahasiswa);
console.log("Grade :", gradeHuruf);

// --- 3. filter: saring elemen yang memenuhi kondisi ---
const nilaiLulus = nilaiMahasiswa.filter((nilai) => nilai >= 60);
const nilaiGagal = nilaiMahasiswa.filter((nilai) => nilai < 60);

console.log("\n=== filter: Lulus dan Tidak Lulus ===");
console.log("Semua nilai :", nilaiMahasiswa);
console.log("Nilai lulus :", nilaiLulus);
console.log("Nilai Gagal :", nilaiGagal);

// --- 4. reduce: mereduksi array menjadi satu nilai ---
const totalNilai = nilaiMahasiswa.reduce((akumulator, nilai) => {
  return akumulator + nilai;
}, 0); //0 nilai awal akumulator

const rataRata = totalNilai / nilaiMahasiswa.length;

console.log("\n=== reduce: Statistik Nilai ===");
console.log("Total nilai    :", totalNilai);
console.log("Rata-rata      :", rataRata.toFixed(2));

// --- 5. Menggabungkan beberapa method (method chaining) ---
const rataRataNilaiLulus = nilaiMahasiswa
  .filter((nilai) => nilai >= 60)
  .reduce((acc, val, idx, arr) => {
    return acc + val / arr.length;
  }, 0);

console.log("\n=== Method Chaining ===");
console.log("Rata-rata nilai lulus:", rataRataNilaiLulus.toFixed(2));

console.log("\n=============LATIHAN 4==========================\n");
const produk = [
  { nama: "Laptop", harga: 8500000, stok: 5 },
  { nama: "Mouse", harga: 150000, stok: 0 },
  { nama: "Keyboard", harga: 450000, stok: 12 },
  { nama: "Monitor", harga: 3200000, stok: 0 },
  { nama: "Headset", harga: 350000, stok: 8 },
];

produk.forEach((item, indeks) => {
  console.log(` Produk-${indeks + 1}:, Nama-${item.nama}, harga-${item.harga}, stok-${item.stok}`);
});

console.log("\n================================================\n");

const produkStok = produk.filter((item) => item.stok > 0)
console.log("\n=== filter: Produk yang stoknya lebih dari 0 ===");
console.log("Produk :", produkStok);

console.log("\n================================================\n");

const namaProduk = produk.map((item) => {
    if(item.nama === "Laptop", item.harga === 8500000, item.stok === 5) return "Laptop";
    if(item.nama === "Mouse", item.harga === 150000, item.stok === 0) return "Mouse";
    if(item.nama === "Keyboard", item.harga === 450000, item.stok === 12) return "Keyboard";
    if(item.nama === "Monitor", item.harga === 3200000, item.stok === 0) return "Monitor";
    if(item.nama === "Headset", item.harga === 350000, item.stok === 8) return "Headset";
});

console.log("\n=== map: Detail Produk ke Nama Produk ===");
console.log("Nama Produk :", namaProduk);

console.log("\n================================================\n");

const totalNilaiInventaris = produk.reduce((total, item) => {
  return total + (item.harga * item.stok);
}, 0);

console.log('\n=== reduce: Total Nilai Inventaris ===');
console.log("Total Nilai Inventaris:", totalNilaiInventaris);

console.log("\n================================================\n");

produk.forEach((item) => {
  if(item.stok > 0){
    console.log(` [TERSEDIA]${item.nama}, Rp${item.harga}, (${item.stok} unit)`);
  }else if(item.stok === 0){
    console.log(` [HABIS]${item.nama}, Rp${item.harga}, (${item.stok} unit)`);
  }
});




