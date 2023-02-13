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
    return console.log(a>10);
}

sprawdz(3);
sprawdz(36);
sprawdz(5);


function podzielnosc(x) {
   if(x % 3 === 0){
    console.log('liczba jest podzielna przez 3 bez reszty.');
   }
   else {
    console.log('liczba nie jest podzielna przez 3 bez reszty. Ta reszta wynosi', (x % 3));
   }
}

podzielnosc(2);
podzielnosc(7);
podzielnosc(9);