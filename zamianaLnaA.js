
for (let index = 0; index < 10; index++) {
const charCodeA = 65;
const charCode = charCodeA + index;

console.log(String.fromCharCode(charCode));
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let charCodeA = 65;
let charCode = charCodeA++;
let numberOfLoops = 10;
let stopCondition = (charCodeA+numberOfLoops);

while (charCode < stopCondition) {
    charCodeA++
    console.log(String.fromCharCode(charCode++));
}

// Potęgowanie 2**3 - oznacza dwa do potęgi3

console.log(2**3);


//funkcja podnosząca do potęgi daną liczbę - działa :D

function Potegowanie(podstawa, wykładnik) {
    let wynik = podstawa;
    if (wykładnik == 0) {
         wynik = 1;
    } else {
    for (let index = 0; index < wykładnik-1; index++) {
            wynik = wynik*podstawa
            
    } }
    console.log(wynik);
    return wynik
}

Potegowanie(3,0);  
Potegowanie(2,5);  console.log('sprawdzam', 2**5);  
Potegowanie(4,3);  console.log('sprawdzam', 4**3);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

// Funkcja sklejająca tablice 

let a = [2, 3, 4];
let b = [3, 4, 5, 6, 7];

console.log('Sklejanie za pomocą .concat', a.concat(b));

function sklejTab(podstawa, dodaj) {
    let dodajIndex = 0;
    let stop = podstawa.length+dodaj.length
    for (let index =podstawa.length; index < stop; index++){
        podstawa[index] = dodaj[dodajIndex];
        dodajIndex++;
    }
    console.log(podstawa);
    return podstawa;
}

let toWychodzi = sklejTab(a,b);
sklejTab([1, 2],[2, 4, 5]);
sklejTab([3, 2, 5],[7, 4, 5, 8, 9]);
sklejTab([1, 2],[6, 7, 8, 2, 4, 5]);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

//wyciecie od danej pozycji do zadanej//
ciagZnakow = 'ABCDEFGHIJKLMNOPRSTUQWXYZ'
 let wycianij = ciagZnakow.substring(2, 10);
 console.log(wycianij);

 //szukanie po indeksie bo stringi tez jak tablice mają indeksy
let baa = 'Ala ma kota'.indexOf('kot');
 console.log(baa);


 let napis = (11 > 10) ? 'Wieksze': 'Mniejsze';
 console.log(napis);

 console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

 let wynikDzielenia = undefined;
 for (let idx = 1; idx <=2000; idx++) {
    if (idx % 123 === 0) {
        console.log('o super mamy wynik!', idx);
        if (wynikDzielenia === undefined) {
             wynikDzielenia = idx;
        } else {
            console.log(idx +' też jest podzielny przez 123 ale ja mam już mój wynik', idx)
        }
       
    }
 }
 console.log(wynikDzielenia);
