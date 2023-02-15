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

function  wynikOcen(a, b) {
    let wybranyUczen = dziennikObiektowy[];
    for (let a = 0; a < array.length; a++) {
       
        
    }
    return 
}

wynikOcen(dziennikObiektowy.adam);