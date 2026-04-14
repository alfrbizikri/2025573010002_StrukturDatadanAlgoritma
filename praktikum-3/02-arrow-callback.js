// 02-arrow-callback.js
// ================================================
// ARROW FUNCTION DAN CALLBACK
// ================================================

// --- 1. Function biasa vs Arrow function ---
// Cara lama (function declaration)
function kuadratBiasa(x) {
  return x * x;
}

// Cara baru (arrow function - ekuivalen)
const kuadrat = (x) => {
  return x * x;
};

// Arrow function ringkas (implicit return)
const kuadratRingkas = (x) => x * x;

console.log("=== Perbandingan Penulisan ===");
console.log("Biasa      :", kuadratBiasa(5));
console.log("Arrow      :", kuadrat(5));
console.log("Ringkas    :", kuadratRingkas(5));

// --- 2. Arrow function dengan beberapa parameter ---
const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama, waktu) => `Selamat ${waktu}, ${nama}!`;

console.log("Luas 4x6  :", luas(4, 6));
console.log(salam("Budi", "Pagi"));

// --- 3. Callback: function sebagai argumen ---
function lakukanOperasi(angka, operasiCallback) {
  console.log(`Angka awal: ${angka}`);
  const hasil = operasiCallback(angka);
  console.log(`Hasil setelah operasi: ${hasil}`);
}

console.log("\n=== Callback ===");
lakukanOperasi(7, kuadratRingkas);  // kirim function sebagai argumen
lakukanOperasi(10, (x) => x + 100); // kirim arrow function langsung
lakukanOperasi(20, function (x) {   // kirim function biasa langsung
  return x / 2;
});

// --- 4. setTimeout sebagai contoh callback nyata -
console.log('\n=== setTimeout (Callback) ===');
console.log('Pesan 1 : Sebelum timer');

setTimeout(() => {
    console.log('Pesan 3: ini dari dalam setTimeout (setelah 1 detik) ');
}, 1000);

console.log('Pesan 2: Setelah mendaftarkan timer');

console.log("\n=============LATIHAN 2==========================\n");
const keHurufBesar = (teks) => teks.toUpperCase();
console.log(keHurufBesar("hello"));

console.log("\n================================================\n");

const tambahSeru = (teks) => teks + "!!!";
console.log(tambahSeru("Hello"));

console.log("\n================================================\n");

const hitungKata = (teks) => teks.split(" ").length;
console.log(hitungKata("Hello World"));

console.log("\n================================================\n");
function prosesKalimat(kalimat, transformasiCallback){
    const hasil = transformasiCallback(kalimat);
    console.log(hasil);
}

prosesKalimat("Halo dunia", keHurufBesar);

console.log("\n================================================\n");
prosesKalimat("Belajar JavaScript itu Menyenangkan", keHurufBesar);
prosesKalimat("Belajar JavaScript itu Menyenangkan", tambahSeru);
prosesKalimat("Belajar JavaScript itu Menyenangkan", hitungKata);



