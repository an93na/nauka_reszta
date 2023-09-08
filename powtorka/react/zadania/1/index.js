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
// console.table(dodajGwiazdkeDoLiter);

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

document.getElementById("3").innerHTML = wstawDoHTML(htmlAsArrayofTRs3);

/**
 * Stwórz funkcję która będzie zwracać "zresetowaną" tablicę todos
 * tzn mając tablice todos z różnymi statusami przetwórz daną tablicę tak żeby wszystkie statusy
 * były ustawione na todo - zwróć uwage jak wygląda podany kształ danych
 *
 * wynik wyświetl za pomocą console.table
 *
 * przykładowy obiekt user:
 *
 * --------------------------------
 *
 * const user = {
 *      name: 'Jane',
 *      lastName: 'Doe',
 *      age: 12,
 *      isAult: false
 * }
 *
 * --------------------------------
 *
 * żeby zaktualizować pole tego obiektu należy odwołać się do tego obiektu i następnie do przyszłego pola po
 * kropce (patrz poniżej)
 *
 * --------------------------------
 *
 * user.isAdult = true;
 *
 * --------------------------------
 *
 * przypisaliśmy wartość boolowską true
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const todos0 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

const todosWithNewStatus = todos0.map((a) => ({ ...a, status: "todo" }));
// console.table(todos0)
// console.table(todosWithNewStatus)

const htmlAsArrayofTRs4 = todosWithNewStatus.map((todo) => {
  return `<tr>
    <td>${todo.task}</td>
        <td>${todo.status}</td>
        <td><button>DELETE</button></td>
        </tr>`;
});
document.getElementById("4").innerHTML = wstawDoHTML(htmlAsArrayofTRs4);

/**
 * Stwórz funkcję która będzie zwracać "zarchiwizowaną" tablicę todos
 * tzn dodaj dodatkowe pole typu boolean do kazdego obiektu w tablicy
 * pole niech się nazywa archived i niech będzie ustawione na true
 *
 * wynik wyświetl za pomocą console.table
 *
 * obiekt.nazwaPola = true albo false;
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const todos1 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

const zarchiwizowaneTodosy = todos1.map((todo) => ({
  ...todo,
  archived: true,
}));

// console.table(zarchiwizowaneTodosy);

const htmlAsArrayofTRs5 = zarchiwizowaneTodosy.map((todo) => {
  return `<tr>
    <td>${todo.task}</td>
        <td>${todo.status}</td>
        <td>${todo.archived}</td>
        </tr>`;
});
document.getElementById("5").innerHTML = wstawDoHTML(htmlAsArrayofTRs5);

/**
 * stwórz funkcje która obsłuży search bar (np taki jak w aplikacjach do wyszukiwania rekordów)
 *
 * funckja będzie szukać w tablicy na podstawie pola "task",
 * funckja ma zwracać pierwszy pasujący elemnt
 *
 * albo filter albo find
 *
 *
 * ⭐ ⭐ dla chętnych niech funckja posiada drugi parametr określający czy chcemy dostać
 * wszystkie pasujące elementy np podając słowo "pouczyć się" funkcja powinna zwrócić dwa elmenty z poniższej tablicy
 * gdy drugi parametr funkcji określa np że chcemy konretny rekord/element tablicy niech funckja
 * wyszukuje pierwszy pasujący element
 *
 */

const todos2 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

const znajdTaska = (szukanyTask) => {
  return todos2.filter((todos) => todos.task.includes(szukanyTask));
};

console.table(znajdTaska("pou"));
console.table(znajdTaska("wys"));
