// 01-function-dasar.js
// ================================================
// FUNCTION: DEKLARASI, PARAMETER, RETURN, SCOPE
// ================================================

// --- 1. Function tanpa parameter dan tanpa return ---
function sapa() {
  console.log("Halo! Selamat datang di praktikum JavaScript");
}
sapa();
sapa();

// --- 2. Function dengan parameter ---
function sapaNama(nama) {
  console.log(`Halo, ${nama}! Selamat belajar. `);
}
sapaNama("Budi");
sapaNama("Siti");

// --- 3. Function dengan beberapa parameter dan return value ---
function tambah(angka1, angka2) {
  const hasil = angka1 + angka2;
  return hasil; //mengembalikan nilai
}

const hasilPenjumlahan = tambah(10, 25);
console.log("10 + 25 =", hasilPenjumlahan);
console.log("7 + 13", tambah(7, 13)); //bisa langsung dipakai

// --- 4. Function dengan default parameter ---
// Jika argumen tidak diberikan, gunakan nilai default
function hitung(nilai, pengali = 2) {
  return nilai * pengali;
}
console.log(hitung(5)); // 10 (pengali pakai default: 2)
console.log(hitung(5, 3)); // 15 (pengali diisi: 3)

// --- 5. Scope variabel ---
const pesanGlobal = "Saya ada di mana saja"; // global scope

function cekScope() {
  const pesanLokal = "Saya hanya ada di dalam function ini"; //local scope
  console.log(pesanGlobal); //bisa akses global
  console.log(pesanLokal); //bisa akses lokal
}

cekScope();
console.log(pesanGlobal);

console.log("\n=============LATIHAN 1==========================\n");

function kurang(a, b) {
  const hasil = a + b;
  return hasil;
}

const hasilPengurangan = kurang(5, 2);
console.log("5 -2 =", hasilPengurangan);

console.log("\n================================================\n");

function kali(a, b) {
  const hasil = a * b;
  return hasil;
}

const hasilPerkalian = kali(5, 2);
console.log("5 * 2 =", hasilPerkalian);

console.log("\n================================================\n");

function bagi(a, b){
    if(b === 0){
        console.log("Tidak Bisa membagi dengan 0");
        return null;
    }
    const hasil = a / b;
    return hasil;
}

const hasilPembagian =bagi(8, 0);
console.log("8 / 2 =", hasilPembagian);

console.log("\n================================================\n");

function kalkulator(a, operator, b) {
  let hasil;

  switch (operator) {
    case "+":
      hasil = a + b;
      break;
    case "-":
      hasil = a - b;
      break;
    case "*":
      hasil = a * b;
      break;
    case "/":
      if (b === 0) {
        return null;
      }
      hasil = a / b;
      break;
    default:
      console.log("Operator tidak dikenali");
      return null;
  }
  return hasil;
}

const hasilKalkulator1 = kalkulator(8, "+", 2);
const hasilKalkulator2 = kalkulator(8, "-", 2);
const hasilKalkulator3 = kalkulator(8, "*", 2);
const hasilKalkulator4 = kalkulator(8, "/", 0);
const hasilKalkulator5 = kalkulator(8, "/", 2);
console.log("8 + 2 =", hasilKalkulator1);
console.log("8 - 2 =", hasilKalkulator2);
console.log("8 * 2 =", hasilKalkulator3);
console.log("8 / 0 =", hasilKalkulator4);
console.log("8 / 2 =", hasilKalkulator5);
