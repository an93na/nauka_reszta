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
console.log(tablicaStringow);

const filterStrings = tablicaStringow.filter((a) => {
  return a.length <= 3;
});
console.log(filterStrings);
