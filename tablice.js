//Tablica jest to kolekcja elemntów. 

let tablicaBez = [];

let tablicaZ = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let tablicaS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

let tablicaB = [ true, true, false, false, true];

let tablicaO = [
    {a: 5, b: 'tekst1'},
    {a: 2, b: 'tekst2'},
    {a: 3, b: 'tekst3'}
];

let tablicaM = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let tablica = [11, 42, 34, 4, 56, 36, 7, 87, 19];
console.log(tablica[4]);
console.log(tablica[0]);
console.log(tablica[7]);
console.log(`długość tablicy to: `,tablica.length);
// console.log(`długość tablicy to: `,(tablica.length-1));

let oceny = [5, 6, 4, 4, 4, 5, 6, 3, 5, 4];
let ocenyWyzszeNiz4 = oceny.filter(function (el) {
    return el >=4
})
console.log(ocenyWyzszeNiz4);

oceny.push(6, 5);
console.log(oceny, `długość tablicy to: `, oceny.length);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);


let dziennikObiektowy = {
    adrian:   [3, 3, 4, 4],
    malgosia: [5, 6, 4.5, 5],
    tomek:    [2, 3, 3, 2] 
};

function  wynikOcen(dziennik, imieUcznia) {
    let ocenyDanegoUcznia = dziennik[imieUcznia];
    console.log(`oceny ucznia o imieniu ${imieUcznia} to: `,ocenyDanegoUcznia);
    let suma = 0;
    let srednia = 0;
    for (let a = 0; a < ocenyDanegoUcznia.length; a++) {

        suma+= ocenyDanegoUcznia[a];
    }
    // console.log(`suma to: `, suma);
    srednia = suma / ocenyDanegoUcznia.length;
    console.log(`średnia ocen to: `, srednia); 
    return srednia;    
}

let sredniamalgosi = wynikOcen(dziennikObiektowy, 'malgosia');
let sredniaadriana = wynikOcen(dziennikObiektowy, 'adrian');
let sredniatomka = wynikOcen(dziennikObiektowy, 'tomek');

let sredniaklasy = (sredniamalgosi + sredniaadriana + sredniatomka)/ 3;
console.log(`Średnia całej klasy to: `,sredniaklasy);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);

let dziennikTablicowyOcenyMatematyka = [
     [3, 3, 4, 4, 6],
     [5, 6, 4.5, 5],
     [2, 3, 3] 
]

let dziennikTablicowyOcenyJezykAngieski = [
    [4, 3, 4, 4.5, 3],
    [5, 4, 4.5, 5],
    [5, 4.5, 6] 
]


letKsiazkiWypozyczoneZBibloteki = [
 [1234, 23435, 6675, 7775],
 [1234, 543, 121],
 []
]

let adresUcznia = [
    {miasto: 'Warszawa', ulica: 'Piękna'},
    {miasto: 'Legionowo', ulica: 'Długa'},
    {miasto: 'Waraszawa', ulica: '11 Listopada'}
]

let dziennikTablicowyImiona = [
    {imie:'adrian', id: 0},
    {imie:'malgosia', id: 1 },
    {imie:'tomek', id: 2},
    {imie:'renata', id: 3},
]

function znajdzAdrian(a) {
    if (a.imie === 'renata'){
        return true
    }
    else {
        return false;
    }
}
wynikZtablicy2 = dziennikTablicowyImiona.findIndex(znajdzAdrian);
console.log('Dłuższa metoda znajdująca nam index pod którym jest renata: ',wynikZtablicy2);

wynikZtablicy = dziennikTablicowyImiona.findIndex((a) => a.imie === 'adrian');
console.log('Krótsza metoda znajdująca nam index pod którym jest adrian: ',wynikZtablicy);

function znajdźKobieta(ele) {
if (ele.imie[ele.imie.length - 1] === 'a') {
    return true;
}
else {
    return false;
}
}

wynikZtablicy3 = dziennikTablicowyImiona.findIndex(znajdźKobieta);
console.log(`Szukam pierwszej kobiety w tablicy, imie kończy się na 'a': `,wynikZtablicy3);

wynikZtablicy4 = wynikZtablicy = dziennikTablicowyImiona.findIndex((a) => a.imie[a.imie.length - 1] === 'a');
console.log(dziennikTablicowyImiona[wynikZtablicy4]);

console.log('~~~~~~~~~~~~~~~~~~~Filtrowanie~~~~~~~~~~~~~~~~');

let arrayOsob = [
    {imie: 'Agata', nazwisko: 'Nowak', wiek: '15', plec: 'k' },
    {imie: 'Mateusz', nazwisko: 'Kowalski', wiek: '19', plec: 'm' },
    {imie: 'Jan', nazwisko: 'Głaz', wiek: '41', plec: 'm' },
    {imie: 'Felicja', nazwisko: 'Ametyst', wiek: '29', plec: 'k' }
]

let znajdzK = arrayOsob.filter((a) => a.plec === 'k');
console.log('Wypisanie elementów tablicy które są kobietami ', znajdzK);

let znajdzWiek = arrayOsob.filter((a) => a.wiek > 20 );
console.log(`znajdowanie elementow tablicy których wiek jest większy od 20: `, znajdzWiek);


let znajdzWiekiPlec = arrayOsob.filter((a) => a.wiek > 20 && a.plec === 'm' );
console.log(`znajdowanie elementow tablicy których wiek jest większy od 20 i są mężczyznami: `, znajdzWiekiPlec);