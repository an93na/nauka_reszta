console.log('~~~~~~Funkcja wyświetlająca mnożenie jakiejś liczby razy 2~~~~~~');

function pierwszaFunkcja(a) {
    return a*2;
}

let wynik = pierwszaFunkcja(5);
console.log(wynik);
console.log(pierwszaFunkcja(2));
console.log(pierwszaFunkcja(6));



console.log(`~~~~~~~~~~~~~Funkcja witająca się ~~~~~~~~~~~~~~`);
function drugaFunkcja() {
    return console.log('Hello');    
}

drugaFunkcja();
drugaFunkcja();
drugaFunkcja();

console.log(`~~~~~~~~~~~~~Funkcja witająca się z danym użytkownikiem~~~~~~~~`);
function trzeciaFunkcja(b) {
    return console.log(`Cześć ${imie}!`);
}

imie = 'Marek';
trzeciaFunkcja(imie);
imie = 'Kasia';
trzeciaFunkcja(imie);
imie = 'Janek';
trzeciaFunkcja(imie);


let bok1 = 5;
let bok2 = 3;
console.log(`~~~~~~~~~~~~~Funkcja matematyczna~~~~~~~~~~`);

function matematyczna(a, b) {
    return console.log(`Obwód prostokąta to: `, 2*a+2*b);
}

matematyczna(bok1,bok2);
matematyczna(3,4);
matematyczna(2,7);
matematyczna(1,6);

console.log(`~~~~~~~~~~~~~Funkcja sprawdzająca~~~~~~~~~~`);

function sprawdz(a) {
    console.log(a>10);
    return a
}

sprawdz(3);
sprawdz(36);
sprawdz(5);
sprawdz(12);


function podzielnosc(x) {
   if(x % 3 === 0){
    console.log('liczba jest podzielna przez 3 bez reszty.');
   }
   else {
    console.log('liczba nie jest podzielna przez 3 bez reszty. Ta reszta wynosi', (x % 3));
   }
   return x
}

podzielnosc(2);
podzielnosc(7);
podzielnosc(9);
podzielnosc(12);
console.log(`~~~~~~~~~~~~~~~~~`);


let arg1 = sprawdz(12);
let arg2 = podzielnosc(12);
// let arg1 = 16;
// let arg2 = 12;
// console.log(arg1);
// console.log(arg2);

if (arg1 > 10 && arg2 % 3 === 0) {
    console.log('Git');
}
else {
    console.log('Niestety nie');
}

// let arg4 = 16;
// let arg5 = 12;

// if (arg4 > 10 && arg5 % 3 === 0) {
//     console.log('Git');
// }
// else {
//     console.log('Niestety nie');
// }

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);

let euro = 4;
let dolar = 3.5;

function kurs(a, b) {
    if (a > b) {
        console.log(`Więcej kosztuje euro, jego cena to: ${euro} zł.`);
    }
    else if (a < b) {
        console.log(`Więcej kosztuje dolar, jego cena to ${dolar} zł.`);
    }
}

kurs(euro, dolar);


function kurs2 (e, d) {
    return e > d;
}

console.log(kurs2(euro, dolar));


if (kurs2(euro, dolar) === true ) {
    console.log(`Więcej kosztuje euro, jego cena to: ${euro} zł.`);
}
else if (kurs2(euro, dolar) === false) {
    console.log(`Więcej kosztuje dolar, jego cena to ${dolar} zł.`);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~');

let string1 = `Ola ma psa`

function powiekszona(a) {
    console.log(a.toUpperCase());
}
function powiekszona1(a) {
    console.log(a.toUpperCase());
    return a.toUpperCase();
}

function powiekszona2(a) {
    return a.toUpperCase();
}

powiekszona(string1);
powiekszona1(string1);
powiekszona2(string1);