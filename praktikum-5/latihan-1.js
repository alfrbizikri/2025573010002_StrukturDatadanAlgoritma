function fn(n){
    {return n * 2; }
    //Big O: O(1) - konstan, hanya memiliki satu operasi 
}

function B(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i,j);
        }
    }
    return n;
     //Big O: O(n^2) - kuadratik,  terdapat nested loop
}


console.log("");
function C(n){
    for(let i = 1;  i < n; i *=2 ){
        console.log(i);
    }
    return n;
    //Big O: O(log n) - logaritma, 
    // nilai i naiknnya dikali/melipatgandakan i *= 2
    // terdapat satu loop saja
}
C(8)

console.log("");
function D(arr,x,y,z){
    arr.forEach(x => 
        arr.forEach(y =>
            arr.forEach( z =>
                console.log(x,y,z)
            )
        )
    );
    //BIG O: O(n^3) - kubik, terdapat 3 loop bersarang
}
D([1, 2, 3]);
console.log("");


function hitungKompleksitas(n, fn){
    const ukurWaktu = Date.now();
    fn(n);
    let end = Date.now();
    console.log(`Waktu eksekusi: ${end - ukurWaktu} ms`);
    return n;
}
hitungKompleksitas(10, B);




