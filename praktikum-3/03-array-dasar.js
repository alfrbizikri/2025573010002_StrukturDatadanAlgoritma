// 03-array-dasar.js
// ================================================
// ARRAY: DEKLARASI, AKSES, DAN MANIPULASI
// ================================================

// --- 1. Membuat array ---
const mahasiswa = ["Budi", "Siti", "Ahmad", "Rina"];
const nilai = [85, 92, 78, 95, 88];

console.log("=== Array Awal ===");
console.log("Mahasiswa:", mahasiswa);
console.log("Nilai :", nilai);
console.log("Jumlah mahasiswa:", mahasiswa.length);

// --- 2. Mengakses elemen ---
console.log("\n=== Akses Elemen ===");
console.log("Elemen pertama :", mahasiswa[0]); // indeks 0
console.log("Elemen ketiga :", mahasiswa[2]); // indeks 2
console.log("Elemen terakhir:", mahasiswa[mahasiswa.length - 1]);

// --- 3. Mengubah elemen ---
mahasiswa[1] = "Siti Rahayu"; // ubah elemen indeks 1
console.log("\nSetelah diubah:", mahasiswa);

// --- 4. Menambah dan menghapus elemen ---
console.log("\n=== Manipulasi Array ===");
mahasiswa.push("Doni"); // tambah di akhir
console.log("Setelah push :", mahasiswa);
mahasiswa.unshift("Zahra"); // tambah di awal
console.log("Setelah unshift :", mahasiswa);
const dihapusAkhir = mahasiswa.pop(); // hapus dari akhir
console.log("Dihapus (pop) :", dihapusAkhir);
console.log("Setelah pop :", mahasiswa);
const dihapusAwal = mahasiswa.shift(); // hapus dari awal
console.log("Dihapus (shift) :", dihapusAwal);
console.log("Setelah shift :", mahasiswa);

// --- 5. Mencari elemen ---
console.log("\n=== Pencarian ===");
console.log("Indeks Ahmad :", mahasiswa.indexOf("Ahmad"));
console.log("Ada Rina? :", mahasiswa.includes("Rina"));
console.log("Ada Budi? :", mahasiswa.includes("Budi"));

// --- 6. Mengiris array dengan slice ---
const sebagian = nilai.slice(1, 4); // dari indeks 1 sampai sebelum 4
console.log("\nNilai asli :", nilai);
console.log("Slice [1,4] :", sebagian);

console.log("\n=============LATIHAN 3==========================\n");

const daftarBelanja = ["Beras", "Gula", "Garam", "Minyak", "Saus"];

for (let i = 1; i <= 4; i++) {
  console.log(`Belanja ke-${i} : ${daftarBelanja[i]}`);
}

console.log("\n================================================\n");
daftarBelanja.push("Kecap");
daftarBelanja.push("Sayur");
console.log("Setelah push :", daftarBelanja);
const hapusAwal = daftarBelanja.shift();
console.log("Dihapus (shift) :", hapusAwal);
console.log("Setelah shift :", daftarBelanja);
console.log("Ada Susu?  :", daftarBelanja.includes('Susu'));
