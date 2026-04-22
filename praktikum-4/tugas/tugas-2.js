class Stack {
  constructor() {
    this.data = []; 
    this.ukuran = 0;
  }

  push(elemen) {
    this.data.push(elemen);
    this.ukuran++;
    console.log(`Push '${elemen}' -> Stack: [${this.data}]`);
  }

  pop() {
    if (this.isEmpty()) {
      console.log(" Stack kosong! Tidak bisa pop. ");
      return null;
    }
    const dikeluarkan = this.data.pop();
    this.ukuran--;
    console.log(`Pop '${dikeluarkan}' -> Stack: [${this.data}]`);
    return dikeluarkan;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.ukuran === 0;
  }
  size() {
    return this.ukuran;
  }

  tampilkan() {
    console.log(` Stack (atas->bawah): [${[...this.data].reverse()}]`);
  }
}

function cekKurungSeimbang(ekspresi){
    const stack = new Stack();

    for(let i = 0; i < ekspresi.length; i++) {
        const char = ekspresi[i];

        if(char === '('){
            stack.push(char);
        }
        else if (char === ')'){
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.isEmpty();
}

const daftarUji = [
    '(2 + 3) * (4 - 1)',
    '((a + b)',
    ')(',
    '((()))'
];

daftarUji.forEach(exp => {
    const hasil = cekKurungSeimbang(exp);
    console.log(`'${exp}' → Seimbang: ${hasil}`);
});