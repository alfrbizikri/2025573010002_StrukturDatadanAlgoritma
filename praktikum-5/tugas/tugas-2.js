// TUGAS 2 — Visualisasi Pertumbuhan Big O
// ===============================================

// ─────────────────────────────────────────────
// O(1) — konstan
// ─────────────────────────────────────────────
function fn_O1(n) {
  return n + 1;
}

// ─────────────────────────────────────────────
// O(n) — linear
// ─────────────────────────────────────────────
function fn_On(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}

// ─────────────────────────────────────────────
// O(n log n)
function fn_OnLogn(n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      // log n
      total += j;
    }
  }

  return total;
}

// ─────────────────────────────────────────────
// O(n²) — nested loop
function fn_On2(n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += i + j;
    }
  }

  return total;
}

// ─────────────────────────────────────────────
// BENCHMARK
function benchmarkSemua(ukuranData) {
  for (const n of ukuranData) {
    console.log(`\n=== Ukuran Data: ${n} ===`);

    let t;

    t = Date.now();
    fn_O1(n);
    console.log("O(1)     :", Date.now() - t, "ms");

    t = Date.now();
    fn_On(n);
    console.log("O(n)     :", Date.now() - t, "ms");

    t = Date.now();
    fn_OnLogn(n);
    console.log("O(n log n):", Date.now() - t, "ms");

    t = Date.now();
    fn_On2(n);
    console.log("O(n²)    :", Date.now() - t, "ms");
  }
}

benchmarkSemua([100, 500, 1000, 5000, 10000]);

// O(1) hampir selalu 0 ms karena hanya 1 operasi.
// O(n) meningkat seiring bertambahnya n.
// O(n log n) lebih lambat dari O(n), tapi jauh lebih cepat dari O(n²).
// O(n²) meningkat sangat cepat dan menjadi paling lambat saat n besar.
