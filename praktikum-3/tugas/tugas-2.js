function pangkat(basis, eksponen){
    if(eksponen == 0){
        return 1;
    }

    const hasil = basis * pangkat(basis, eksponen - 1);
    console.log(`Hasil ${basis}^${eksponen} =`, hasil);
    return hasil;   
}


console.log("Hasil akhir:", pangkat(2, 3));

console.log("\n=====================================\n");

function balikString(str){
    if(str.length <= 1){
        return str;
    }

    return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}
console.log(balikString("halo")); 

console.log("\n=====================================\n");

function cekPalindrom(str){

    const balik =  str[str.length - 1] + balikString(str.slice(0, str.length - 1));
    return str == balik;
}
console.log(cekPalindrom("katak"));
console.log(cekPalindrom("civic"));
console.log(cekPalindrom("halo"));
console.log(cekPalindrom("level"));