const dataMahasiswa =[
    {nama: "Abi", nilai: 90},
    {nama: "Rey", nilai: 80},
    {nama: "Riski", nilai: 70},
    {nama: "Putri", nilai: 60},
    {nama: "Azzahra", nilai: 55},
    {nama: "Risa", nilai: 95},
]

function hitungStatistik(arrMahasiswa){

    const totalNilai = arrMahasiswa.reduce((akumulator, mhs) => {
        return akumulator + mhs.nilai;
    }, 0);

    const JumlahMahasiswa = arrMahasiswa.length

    const rataRata = totalNilai / JumlahMahasiswa

    const terendah = arrMahasiswa.reduce((acc, mhs) =>
    mhs.nilai < acc ? mhs.nilai : acc,
    arrMahasiswa[0].nilai);

    const tertinggi = arrMahasiswa.reduce((acc, mhs) =>
    mhs.nilai > acc ? mhs.nilai : acc,
    arrMahasiswa[0].nilai);

    return {
        totalMahasiswa : arrMahasiswa.length,
        totalNilai : totalNilai,
        rataRata : rataRata,
        terendah : terendah,
        tertinggi : tertinggi
    };

}

const hasil = hitungStatistik(dataMahasiswa);
console.log("Total : ", hasil.totalMahasiswa);
console.log("Rata-rata : ", hasil.rataRata.toFixed(2));
console.log("Terendah : ", hasil.terendah);
console.log("Tertinggi : ", hasil.tertinggi);

function filterLulus(arrMahasiswa, batasLulus){
    const Lulus = arrMahasiswa.filter((mhs) => mhs.nilai >= batasLulus);
    const Gagal = arrMahasiswa.filter((mhs) => mhs.nilai < batasLulus);

    return {
        Lulus : Lulus,
        Gagal : Gagal
    };
}

const hasil1 = filterLulus(dataMahasiswa, 60);
console.log("Mahasiswa Lulus:", hasil1.Lulus);
console.log("Mahasiswa Gagal:", hasil1.Gagal);

function tambahGrade(arrMahasiswa){
    const gradeHuruf = arrMahasiswa.map((mhs) => {
        let grade;

        if (mhs.nilai >= 90) grade = "A";
        if (mhs.nilai >= 80) grade = "B";
        if (mhs.nilai >= 70) grade = "C";
        if (mhs.nilai >= 60) grade = "D";
        else grade = "E";

        return{
             ...mhs,
            grade: grade 
        }
    });

    return{
        gradeHuruf
    };
}

console.log("\n=====================================\n");
const hasil2 = tambahGrade(dataMahasiswa);
console.log("Grade :", hasil2.gradeHuruf);
console.log("\n=====================================\n");
console.log(`Total Mahasiswa: ${hasil.totalMahasiswa}`);
console.log(`Rata-rata: ${hasil.rataRata.toFixed(2)}`);
console.log(`Nilai Terendah: ${hasil.terendah}`);
console.log(`Nilai Tertinggi: ${hasil.tertinggi}`);
console.log("\n=====================================\n");
hasil1.Lulus.forEach(mhs => {
    console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}`);
});
console.log("\n=====================================\n");

hasil1.Gagal.forEach(mhs => {
    console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}`);

})
console.log("\n=====================================\n");
hasil2.gradeHuruf.forEach((mhs, index) => {
    console.log(`Nama : ${dataMahasiswa[index].nama}, Grade: ${mhs.grade}`);
});
console.log("\n=====================================\n");
hasil1.Lulus.forEach((mhs) => {
    console.log(`Nama : ${mhs.nama}, Nilai: ${mhs.nilai}(Lulus)`);
})
console.log("\n=====================================\n");
hasil1.Gagal.forEach((mhs) => {
    console.log(`Nama : ${mhs.nama}, Nilai: ${mhs.nilai}(Gagal)`);
})




