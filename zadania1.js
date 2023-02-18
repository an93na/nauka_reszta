//1.Zapisz petle, ktora 10 razy wyswietli Twoje imie.

let imie = 'Anna';

for (let i = 1; i <= 10; i++) {
    console.log(i, imie)
    
}

let a = 0 
while (a < 10) {
    a++
    console.log(a, imie)
}

console.log(`~~~~~~~~~~2~~~~~~~~~~~~`);
//2. Napisz petle, ktora wyswieti Twoje imie tyle razy, ile 
// liter jest w Twoim imieniu.


for (let i = 0; i < imie.length; i++) {
    console.log(i, imie);
    
}

let doLicznika = 0;
while (doLicznika < imie.length) {
    doLicznika++
    console.log(doLicznika, imie);
}

console.log(`~~~~~~~~~~3~~~~~~~~~~~~`);
//3. Napisz petle, ktora wyświetli pierwszych kolejnych
//  10 liter alfabetu


//z tablicy for & while
let tablicaAlfabet = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `w`, `x`, `y`, `z`];


for (let i = 0; i < 10; i++) {
    console.log(i,tablicaAlfabet[i]);
}

let doAlfabetu = 0;
while (doAlfabetu < 10){
    console.log(doAlfabetu, tablicaAlfabet[doAlfabetu]);
    doAlfabetu++
}

// z wykorzystaniem charCodeA i String.fromCharCode()

for (let i =0; i<10; i++) {
    const charCodeA = 65;
    const charCode = charCodeA+i;
    console.log(i, String.fromCharCode(charCode));
}

let charCodeA = 65;
let charCode = charCodeA++;
let numberOfLoops = 10;
let stopCondition = (charCodeA+numberOfLoops);



while (charCode < stopCondition) {
    charCodeA++
    console.log(charCode,String.fromCharCode(charCode++));
}

console.log(`~~~~~~~~~~4~~~~~~~~~~~~`);
//4. Napisz petle, która bedzie w trakcie swojego 
// dzialania sprawzać, czy jej obecny "cykl"/obrót 
// jest parzysty bądź nie

for(let i = 1; i<=10; i++){
    if(i%2 === 0){
        console.log('to jest', i, 'i jest to obrót parzysty');
    }
    else{
        console.log('to jest', i, 'i jest to obrót NIE parzysty');
    }
}