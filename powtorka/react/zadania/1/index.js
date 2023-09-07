// Powtórka z zajęć react z repozytorium:
// https://github.com/simon125/before-react

/**
 * usuń/odfiltruj wszystkie stringi z tablicy które mają mniej znaków niż 3
 *
 * 1) do nowej zmiennej przypisz wynik działania Twojej funkcji
 * 2) funkcja może korzystać z metod dostępnym na tablicach .filter
 * 3) funkcja może korzystać z pętli for oraz funkcji push
 *
 *
 */

const strings2 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

let tablicaStringow = strings2.map((a) => a.toString());
// console.table(tablicaStringow);

const filterStrings = tablicaStringow.filter((a) => {
  return a.length <= 3;
});
console.table(filterStrings);

// przy pomocy pętli
let nowaTab = [];

for (let index = 0; index < tablicaStringow.length; index++) {
  if (tablicaStringow[index].length <= 3) {
    nowaTab.push(tablicaStringow[index]);
  }
}
console.table(nowaTab);

/**
 * Przerób podaną tablicę tak aby zawierała osoby pełnoletnie w świetle polskiego prawa
 *
 * wynik wykonsoluj przy użyciu metody console.table lub wyświetl dane w dowolny znany Ci sposób
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const users = [
    { name: "John", age: 12 },
    { name: "Jane", age: 22 },
    { name: "Joe", age: 55 },
    { name: "Kate", age: "9" },
    { name: "Kate", age: null },
    { name: "Kate", age: undefined },
  ];
  
