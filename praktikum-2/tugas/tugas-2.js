const beratBadan = 68;
const tinggiBadan = 1.72;
let BMI = beratBadan / (tinggiBadan * tinggiBadan);

console.log("Hasilnya adalah : ", BMI.toFixed(2));
if (BMI < 18.5) {
  console.log(
    `Berat: ${beratBadan} | Tinggi: ${tinggiBadan} | Kategori: Kurus (Underweight)`,
  );
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log(
    `Berat: ${beratBadan} | Tinggi: ${tinggiBadan} | Kategori: Normal (Ideal)`,
  );
} else if (BMI >= 25.0 && BMI <= 29.9) {
  console.log(
    `Berat: ${beratBadan} | Tinggi: ${tinggiBadan} | Kategori: Kelebihan Berat Badan (Overweight)`,
  );
} else if (BMI >= 30) {
  console.log(
    `Berat: ${beratBadan} | Tinggi: ${tinggiBadan} | Kategori: Obesitas (Obese)`,
  );
}
