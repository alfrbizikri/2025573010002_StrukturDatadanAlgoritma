// 04-space-complexity.js

// --- O(1) Space: hanya pakai variabel tambahan konstan ---
function jumlahArray(arr) {
  let total = 0;
  for (const x of arr) total += x;
  return total;
}

// --- O(n) Space: membuat struktur baru sebesar input ---
function duplikasiArray(arr) {
  const baru = [];
  for (const x of arr) baru.push(x * 2);
  return baru;
}

// --- O(n) Space: rekursi (call stack) ---
function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1);
}

// --- O(1) Space: faktorial iteratif ---
function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i;
  return hasil;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Jumlah array :", jumlahArray(arr)); // O(1) space
console.log("Duplikasi array:", duplikasiArray(arr));
console.log("Faktorial 10 rekursif :", faktorialRekursif(4));
console.log("Faktorial 10 iteratif :", faktorialIteratif(4));

// Visualisasi: hitung elemen unik (O(n) space)
function hitungUnik(arr) {
  const seen = new Set(); // Set tumbuh hingga n elemen
  for (const x of arr) seen.add(x);
  return seen.size;
}

const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("Elemen unik:", hitungUnik(dataAcak)); // 7

console.log("");

function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

function cariPasanganCepat(arr, target) {
  const seen = new Set();

  for (const x of arr) {
    const pasangan = target - x;

    if (seen.has(pasangan)) {
      return [pasangan, x];
    }

    seen.add(x);
  }

  return null;
}

const data = [2, 7, 11, 15];
const target = 9;

console.log("Lambat:", cariPasanganLambat(data, target));
console.log("Cepat :", cariPasanganCepat(data, target));

const besar = Array.from({ length: 50000 }, () =>
  Math.floor(Math.random() * 100000),
);

let t = Date.now();
cariPasanganLambat(besar, -1);
console.log("\nWaktu Lambat O(n²):", Date.now() - t, "ms");

t = Date.now();
cariPasanganCepat(besar, -1);
console.log("Waktu Cepat  O(n) :", Date.now() - t, "ms");

// Fungsi yang lebih baik adalah cariPasanganCepat karena memiliki
// time complexity O(n), sedangkan versi lambat O(n²).

// Trade-off:
// Versi cepat membutuhkan memori tambahan (O(n)) untuk menyimpan
// data di dalam Set, sedangkan versi lambat tidak membutuhkan
// memori tambahan (O(1)), tetapi jauh lebih lambat.
