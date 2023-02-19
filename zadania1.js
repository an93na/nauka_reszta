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

let zad4 = 1;

while (zad4 <=10){
    
    if (zad4%2 === 0) {
        console.log('to jest', zad4, 'i jest to obrót parzysty');
    }
    
    else{
        console.log('to jest', zad4, 'i jest to obrót NIE parzysty');
    }
    zad4++
}

console.log(`~~~~~~~~~~5~~~~~~~~~~~~`);
// 5. Napisz funkcję, która jako argument przyjmuje 
// wartość N i wypisze N kolejnych cyfr naturalnych
// np: funkcja(5) -> 1, 2, 3, 4, 5

// funkcja z for
function zad5 (n) {
    for (let i = 1; i <= n; i++){
        console.log(i);
    }
    
}

zad5(5);
zad5(10);

// funkcja z while
function zad5while(n) {
    let u = 1;
    while (u <= n) {
        console.log(u)
        u++
    }
}

zad5while(5);
zad5while(10);

console.log(`~~~~~~~~~~6~~~~~~~~~~~~`);
// 6. Napisz funkcje, ktora przyjmie dwa argumenty: 
// N i start. N to ilosc obrotow petli, start to 
// startowa cyfra. Kazde wywolanie petli wypisuje kolejna 
// cyfre, zaczynając od start:
// np: funkcja(4, 9) -> 9, 10, 11, 12

function zad6(N, start) {
    for (let i = 0; i<N; i++){
        console.log(start++)
    }
}
zad6(4,9);
zad6(3,50);

function zad6while(n, start){
    let end = n+start;
    let licz = start;
    while (licz<end){
        console.log(licz);
        licz++
    }
    
}
zad6while(4,9);
zad6(3,50);

console.log(`~~~~~~~~~~7~~~~~~~~~~~~`);
// 7. napisz funkcje, ktora przyjmie cyfre, doda do niej 
// wartosc PI i zwroci powiekszona cyfre
const pi = 3.141592653589;

function zad7(a,b){
    a = a + b;
    return a
}


console.log(zad7(7,pi));
console.log(zad7(2,pi));
console.log(zad7(0,pi));
console.log(zad7(0.77,pi));
console.log('.........................');

function zad7a(a){
    const pi = 3.141592653589;
    a = a + pi
    return a
}

console.log(zad7a(7));
console.log(zad7a(2));
console.log(zad7a(0));
console.log(zad7a(0.77));

console.log(`~~~~~~~~~~8~~~~~~~~~~~~`);
// 8. napisz funkcje, ktora przyjmie trzy 
// argumenty, zsumuje je z sobą

function zad8(a,b,c){
    let zsumuj;
    zsumuj = a+b+c;
    return zsumuj
}

console.log(zad8(2,3,4));
console.log(zad8(5,5,5));
console.log(zad8(10,10,10));

console.log(`~~~~~~~~~~9~~~~~~~~~~~~`);
// 9. napisz funckje, ktora przyjmie trzy argumenty, 
// pierwsze dwa doda, nastepnie trzeci odejmie i zwroci wynik

function zad9(a,b,c){
    let wynik;
    wynik = (a+b)-c;
    return wynik;
}

console.log(zad9(2,2,1));
console.log(zad9(10,20,10));
console.log(zad9(25,6,8));

console.log(`~~~~~~~~~~10~~~~~~~~~~~~`);
// 10. napisz funkcje, ktora przyjmie dwa argumenty, 
// jesli ich suma jest dodatnia, zwrocu sumę, jesli jest 
// ujemna, wypisze blad w konsoli

function zad10(a,b) {
    let suma =a+b
    if (suma > 0){
        console.log(suma)
        return suma
    }
    else {
        console.log('błąd');
    }
}

zad10(3,4);
zad10(3,-34);

console.log(`~~~~~~~~~~11~~~~~~~~~~~~`);
// 11. napisz funkcje, ktora polaczy dwa podane 
// lancuchy napisow

function zad11(a,b){
    let polacz;
    polacz = a+b;
    return(polacz);
}

console.log(zad11('Ala ma ', 'Rudego kota'));
console.log(zad11('Nie lubie ', 'pieczarek'));
console.log(zad11('Nasz ', 'kot'));

console.log(`~~~~~~~~~~12~~~~~~~~~~~~`);
// 12. napisz funkcje, ktora przyjmuje jako argumenty: tablice cyfr, 
// indeks tablicy i wartosc. 
//Funkcja dokona podmiany wartosci pod zadanym indeksem na podaną
// np funkcja([5, 4, 3, 2, 1], 2, 77) powinno zwrocic [5, 4, 77, 2, 1]

let tabzad12 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function zad12(a, b, c) {
    if (b < a.length){
    a[b] = c;
    }
    else {
        a = 'Tabliczka nie posiada elementu o takim indeksie';
    }
    return a;
}

console.log(zad12([1, 2, 3, 4, 5, 6, 7, 8, 9],2,88));
console.log(zad12([1, 2, 3, 4, 5, 6, 7, 8, 9],5,23));
console.log(zad12([1, 2, 3, 4, 5],8,23));

console.log(`~~~~~~~~~~13~~~~~~~~~~~~`);

//13. napisz funkcje, ktora zwroci wartosc bezwzgledna liczby
// funcja(5) -> 5, funkcja(-5) -> 5

function zad13(a) {
    if (a > 0){
        a = a;
    }
    else {
        a = -a;
    }
    return a;
}


console.log(zad13(-2));
console.log(zad13(5));
console.log(zad13(-9));

console.log(`~~~~~~~~~~14~~~~~~~~~~~~`);
//14. napisz funkcje, ktora poda delte rownania kwadratowego, 
// przyjmujac parametry a, b, c
// np rownanie ax^2 + bx + c
// konkretne: 2x^2 + 4x + 2
// funkcja(2, 8, -10) -> 0

function zad14(a, b, c) {
    let delta = (b*b)-(4*a*c);
    
    return delta;
}

console.log(zad14(2, 8, -10));
console.log(zad14(3, 4, 5));


console.log(`~~~~~~~~~~15~~~~~~~~~~~~`);
// 15. Napisz funkcje-kolezanke funkcji liczacej delte, ktora policzy
//  nastepnie rozwiazania rownania kwadratowego, przyjmujac delte 
// i parametry a, b, c rownania


function zad15(a, b, c) {
    if (a===NaN || b ===NaN || c ===NaN || a === undefined || b === undefined || c === undefined){
        console.log('Niewłaściwe parametry')
    }
    else {
    let delta = (b*b)-(4*a*c);
    let pierwiastek = Math.sqrt(delta);
    
    if (delta === 0){
        let x1 = -b/2*a;
        let y = a*(x1*x1) + b*x3 + c;
        console.log(`Rozwiazaniem równania jest x1 = ${x1}.`);
    }
    else if (delta > 0) {
        
        let x1 = (-b - pierwiastek)/(2*a);
        let y1 = a*(x1*x1) + b*x1 + c;
        
        let x2 = (-b + pierwiastek)/(2*a);
        let y2 = a*(x2*x2) + b*x2 + c;
        console.log(`Rozwiazaniem równania są x1 = ${x1} i x2 = ${x2}.`);
    }
    else {
        console.log('rozwiazannie nie istnieje')
    }
}
}

zad15(2, 8, -10);
zad15(3, 4, 5);

console.log(`~~~~~~~~~~16~~~~~~~~~~~~`);
//16. napisz funkcje, ktora jako argument przyjmuje tablice cyfr (wydatki), 
// i sume jaka mamy na koncie. Funkcja powinna sprawdzić, czy 
// suma wydatków nie przekracza sumy na koncie i zwraca wynik 
// typu boolean
// funkcja([1,2,3], 10) -> true, bo (1 + 2 + 3) < 10
// funckja([10, 5], 3) -> false, bo (10 + 5) > 3

function zad16(w, p) {

    let wydatki = w.reduce((a, b) => a+b, 0);

    if (wydatki < p) {
        console.log(wydatki<p);
        console.log('Twoje wydatki są mniejsze od zasobu portfela jesteś na plus :) ');
    }    
    else if (wydatki === p) {
        console.log(wydatki<p);
        console.log('Twoje wydatki i zasób portfela równoważą się. Uważaj ;O ');
    }
    else {
        console.log(wydatki<p);
        console.log('Jesteś bankrutem :( ');
    }
};

zad16([1,2,3,4,5,6],21);
zad16([19,2,38,14,5,26],120);
zad16([5,5,6,5,10],25);

console.log(`~~~~~~~~~~17~~~~~~~~~~~~`);
//17. funkcje, ktora zwroci funkcje. Ta zwrocona funkcja umie dodawac 3 cyfry

function zad17(){return (a, b, c) => a+b+c};

let zad17a = zad17()
console.log(zad17a(5,6,7));
console.log(zad17a(5,5,5));
console.log(zad17a(2,2,2));

console.log(`~~~~~~~~~~18~~~~~~~~~~~~`);
//18. funkcje, ktora przyjmuje imie, nazwisko i wiek i zwraca w/w waetosci zapakowane w obiekt​

function zad18(a, b, c) {
    let obiekt = {
        imie: a,
        nazwisko: b,
        wiek: c 
    };
    return obiekt
}

console.log(zad18('Anna','Jakoś',21));

console.log(`~~~~~~~~~~19~~~~~~~~~~~~`);
//19. funkcje, ktora przyjmuje obiekt i zwraca z niego pole 'imie'
//  let obiekt = { imie: 'Janusz', wiek: 420 }
// funkcja(obiekt) -> 'Janusz' 

let obiekcik = { imie: 'Janusz', wiek: 420 };

