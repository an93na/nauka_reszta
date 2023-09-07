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
// console.table(filterStrings);

// przy pomocy pętli
let nowaTab = [];

for (let index = 0; index < tablicaStringow.length; index++) {
  if (tablicaStringow[index].length <= 3) {
    nowaTab.push(tablicaStringow[index]);
  }
}
// console.table(nowaTab);

/**
 * Przerób podaną tablicę tak aby zawierała osoby pełnoletnie w świetle polskiego prawa
 *
 * wynik wykonsoluj przy użyciu metody console.table lub wyświetl dane w dowolny znany Ci sposób
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

// nazwy zmiennych małymi literami a nazwy funcji imetod dużymi
const users = [
  { name: "John", age: 12 },
  { name: "Jane", age: 22 },
  { name: "Joe", age: 55 },
  { name: "Kate", age: "9" },
  { name: "Kate", age: null },
  { name: "Kate", age: undefined },
];

const dorosli = users.filter((user) => user.age >= 18);
// console.table(dorosli);

const uchwyt2 = document.getElementById("2");
const htmlAsArrayofTRs = dorosli.map((user) => {
  return `<tr>
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td><button>DELETE</button></td>
    </tr>`;
});
// console.log(htmlAsArrayofTRs);
const htmlTRAsAString = htmlAsArrayofTRs.join("");
const htmlTable = `<table>
<thead>
<tr>
<th>Name:</th>
<th>Age:</th>
<th></th>
</tr>
</thead>
<tbody>
${htmlTRAsAString}
</tbody>
</table>`;

uchwyt2.innerHTML = htmlTable;

/**
 * dodaj do każdego stringa w tablicy znak specjalny * w taki sposób żeby był pomiędzy każdą literką
 * np cześć => c*z*e*ś*ć
 *
 * wynik wykonsoluj za pomocą console.table
 *
 * split(''); // spróbuj wywołać .split('') na dowolnym stringu
 *
 *
 */

"jakisstring".split().join();

// const strings1 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

/**
 * ["a*d*s*f*a*s*d*f", "q*w*e*q*wdasd", "as", "assadwq", "s", "", 123]
 */

const dodajGwiazdkeDoLiter = tablicaStringow.map((string) =>
  string.split("").join("*")
);
console.table(dodajGwiazdkeDoLiter);

const htmlAsArrayofTRs3 = dodajGwiazdkeDoLiter.map((user) => {
    return `<tr>
      <td>${user}</td>
      <td><button>DELETE</button></td>
      </tr>`;
  });

const wstawDoHTML = (htmlAsArrayofTRs) => {
  const htmlTRAsAString = htmlAsArrayofTRs.join("");
  const htmlTable = `<table>
<tbody>
${htmlTRAsAString}
</tbody>
</table>`;
  return htmlTable;
};

document.getElementById('3').innerHTML = wstawDoHTML(htmlAsArrayofTRs3);

