// tablica to kolekcja elementów

// pusta tablica
let tablicaPusta = [];

// w js w tablicy nie trzeba mieć elementów tego samego typu

// tablica wypełniona liczbami
let tablicaZZawartoscia = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// tablica ze stringami
let tablicaStringow = ["dom", "bez", "okien"];
// tablica z boolean
let tablicaBoolean = [true, false, false, true];
// tabilca z obiekatmi
let tablicaObiektow = [
  { a: 5, b: "cos" },
  { a: 2, b: "cos" },
  { a: 4, b: "cos" },
  { a: 3, b: "cos" },
];
// tablica z tablicami (macierz)
let tablicaTablic = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// tablica mieszana
let tablicaMieszana = [1, [1, 2, 3], "cos"];

// tablice indeksujemy od 0 czli w naszej tablicy 1 ma index 0 a 9 index 8
let tablicaDoOperacji = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// z tablicaDoOperacji pobieram element 3
console.log(tablicaDoOperacji[3]);
// z tablicaDoOperacji pobieram element 8
console.log(tablicaDoOperacji[8]);
// z tablicaDoOperacji pobieram element 88888 który jeszcze nie istnieje dlatego undefined
console.log(tablicaDoOperacji[88888]);
// długość tablicaDoOperacji
console.log(`długośc tablicy to: ${tablicaDoOperacji.length}`);

let ocenyPauliny = [5, 4, 5, 6, 3, 4, 5, 6, 4];
let ocenyWyzszeNiz4 = ocenyPauliny.filter((el) => {
  return el > 4;
});
console.log(ocenyWyzszeNiz4);
let ocenyNizszelubRowne4 = ocenyPauliny.filter((el) => {
  return el <= 4;
});
console.log(ocenyNizszelubRowne4);

// doklejam nowa wartość przy pomocy push
ocenyPauliny.push(6);
console.log(ocenyPauliny);

// dziennik całej klasy
let ocenyCalejKlasy = [
  [2, 3, 4, 5, 6, 5],
  [4, 4, 4, 5, 6, 6],
  [3, 3, 4, 3, 4, 5],
];
let indexDoStudenta = ["Aleksandra", "Marcin", "Kuba"];

function policzSredniaUcznia(dziennik, indexUcznia) {
  let wybranyUczen = dziennik[indexUcznia];
  let suma = 0;
  let srednia;
  // console.log(wybranyUczen);
  for (let index = 0; index < wybranyUczen.length; index++) {
    suma += wybranyUczen[index];
  }
  // console.log(`suma ocen to: `, suma);
  srednia = suma / wybranyUczen.length;
  return srednia;
}

let sredniaPierwszegoUcznia = policzSredniaUcznia(ocenyCalejKlasy, 0);
console.log(`Imię ucznia: ${indexDoStudenta[0]}. Średnia ocen to: ${sredniaPierwszegoUcznia}`);

function policzSredniaCalejKlasy(dziennik) {}
