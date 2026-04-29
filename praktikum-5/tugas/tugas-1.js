// TUGAS 1 — Analisis & Refactor
// ===============================================

function intersectionLambat(arr1, arr2){
    const hasil = [];

    for (let i = 0; i < arr1.length;  i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (!hasil.includes(arr1[i])) {
                    hasil.push(arr1[i]);
                }
            }
        }
    }

    return hasil;
}


function intersectionCepat(arr1, arr2) {
    const setArr2 = new Set(arr2);
    const hasil = [];

    for (const x of arr1) {
        if (setArr2.has(x)) {
            hasil.push(x);
        }
    }

    return hasil;
}

function anagramCepat(arr) {
    const map = {};

    for (const kata of arr) {
        const key = sortKata(kata);

        if (!map[key]) map[key] = [];
        map[key].push(kata);
    }

    return Object.values(map);
}


function sortKata(kata) {
    return kata.split('').sort().join('');
}


// O(n³) — triple loop
function cekLambat(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[i] + arr[j] === arr[k] * arr[k]) {
                    return true;
                }
            }
        }
    }
    return false;
}


// O(n log n)  sorting + 2 pointer
function cekCepat(arr) {
    const a = [...arr].sort((x, y) => x - y);

    for (let k = a.length - 1; k >= 0; k--) {
        let left = 0;
        let right = k - 1;

        while (left < right) {
            const sum = a[left] + a[right];
            const target = a[k] * a[k];

            if (sum === target) return true;
            else if (sum < target) left++;
            else right--;
        }
    }

    return false;
}


console.log("Intersection:");
console.log(intersectionCepat([1,2,3,4],[3,4,5,6]));

console.log("\nAnagram:");
console.log(anagramCepat(['eat','tea','tan','ate','nat','bat']));

console.log("\nCek a+b=c²:");
console.log(cekCepat([2,7,11,15]));


const dataBesar = Array.from({length: 3000}, () => Math.floor(Math.random() * 1000));

let t = Date.now();
intersectionLambat(dataBesar, dataBesar);
console.log("\nIntersection Lambat:", Date.now() - t, "ms");

t = Date.now();
intersectionCepat(dataBesar, dataBesar);
console.log("Intersection Cepat :", Date.now() - t, "ms");


t = Date.now();
cekLambat([2,7,11,15,20]);
console.log("\nC Lambat:", Date.now() - t, "ms");

t = Date.now();
cekCepat([2,7,11,15,20]);
console.log("C Cepat :", Date.now() - t, "ms");