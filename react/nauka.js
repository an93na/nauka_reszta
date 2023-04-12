// Zadanie 1 - usuń/odfiltruj wszystkie stringi z tablicy które mają mniej znaków niż 3

const strings2 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

// I sposób z funkcją filter
function filtruj(){
   return strings2.filter((string)=> string.length > 3)
}

const wiecejNiz3 = filtruj();
// console.table(wiecejNiz3);

// II sposób z pętlą for 

// const strings3 = [];

// for(let i=0; i<strings2.length; i++){
//     if(strings2[i]>3){
//         strings3.push(strings2[i]);
//     }
// }
// console.table(strings3)

/** Zadanie2 - Przerób podaną tablicę tak aby zawierała osoby pełnoletnie w świetle polskiego prawa
 *wynik wykonsoluj przy użyciu metody console.table lub wyświetl dane w dowolny znany Ci sposób
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const users = [
    { name: "John", age: 12 },
    { name: "Jane", age: 22 },
    { name: "Joe", age: 55 },
    { name: "Kate", age: "9" },
  ];

//   I sposób
  function czyPelnoletni() {
    return users.filter((user) => user.age >= 18);
  };
  
  const pelnoletni = czyPelnoletni()
//   console.table(pelnoletni);

//   II sposób
const adults = users.filter((user)=> {
    return user.age >= 18;
});

// console.table(adults);

// możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
// 1) Stowrzyść strukture HTMLową tabelki  w JSie + dane
// 2) pobrać element z dokumentu htl tak żeby umieścić w nim stowrzoną w JSie tabelkę

//Przykład html w js 
// const html = `
//     <div> 
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga earum, nisi quidem consequatur saepe necessitatibus ipsum, nemo officia minima nesciunt blanditiis molestias nostrum ratione maxime asperiores maiores iste eaque facere. 
//     </div>
// `

const htmlAsArrayOfTRs = adults.map((user) => {
    return `
    <tr> 
    <td>
    ${user.name}
    </td>
    <td>
    ${user.age}
    </td>
    <td>
    <button>DELETE</button>
    </td>
    </tr>`
});

// console.log(htmlAsArrayOfTRs)

// łączenie tablicy stringów (elementów TR) w jednego stringa
const htmlTRAsAString = htmlAsArrayOfTRs.join('');

const htmlTable = `<table>
<tbody>
${htmlTRAsAString}
</tbody>
</table>`

const articleHTMLButJSObject = document.querySelector('#output');
// console.log({articleHTMLButJSObject});

articleHTMLButJSObject.innerHTML = htmlTable;

/**Zadanie 3
 * dodaj do każdego stringa w tablicy znak specjalny * w taki sposób żeby był pomiędzy każdą literką
 * np cześć => c*z*e*ś*ć
 *
 * wynik wykonsoluj za pomocą console.table
 *
 */

const strings1 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

function dodajGwiazdkeWStringu() {
    return strings1.map((string) => {
        const newString = string.toString();
        const rozwiazanie = newString.split('').join('*')
        return rozwiazanie});
}
const stringPodzielonyGwiazdka = dodajGwiazdkeWStringu();

// console.table(stringPodzielonyGwiazdka);

/**Zadanie 4
 * Stwórz funkcję która będzie zwracać "zresetowaną" tablicę todos
 * tzn mając tablice todos z różnymi statusami przetwórz daną tablicę tak żeby wszystkie statusy
 * były ustawione na todo - zwróć uwage jak wygląda podany kształ danych
 *
 * wynik wyświetl za pomocą console.table
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */
const todos0 = [
    { task: "wyspać się", status: "in progress" },
    { task: "mieć dobry chumor", status: "todo" },
    { task: "pouczyć się CSSa", status: "in progress" },
    { task: "pouczyć się JSa", status: "todo" },
  ];

  function zresetujStatusTablicyTodos0(todos) {
    return todos.map((task) => ({...task, status: 'todo'}));
  }
  const zresteowanyStatusTablicyTodos0 = zresetujStatusTablicyTodos0(todos0);
  
//   console.table(todos0);
//   console.table(zresteowanyStatusTablicyTodos0);


  function daneDoTabeli(a) {
    const htmlAsArrayOfTRsTodos0 = a.map((task) => {
        return `
        <tr> 
        <td>
        ${task.task}
        </td>
        <td>
        ${task.status}
        </td>
        <td>
        <button>what?</button>
        </td>
        </tr>`
    });
    return htmlAsArrayOfTRsTodos0
  }

function stworzTabeleWHTML(a){
    const htmlTRAsAString = a.join('');
    const htmlTable= `<table>
    <tbody>
    ${htmlTRAsAString}
    </tbody>
    </table>`
    return htmlTable;
};

const articleHTMLButJSObjectTodos0 = document.querySelector('#output1');

const zwrotZFunkcjiDaneDoTabeli = daneDoTabeli(zresteowanyStatusTablicyTodos0);

articleHTMLButJSObjectTodos0.innerHTML = stworzTabeleWHTML(zwrotZFunkcjiDaneDoTabeli);


/**Zadanie 5
* Stwórz funkcję która będzie zwracać "zarchiwizowaną" tablicę todos
 * tzn dodaj dodatkowe pole typu boolean do kazdego obiektu w tablicy
 * pole niech się nazywa archived i niech będzie ustawione na true
 *
 * wynik wyświetl za pomocą console.table
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const todos1 = [
    { task: "wyspać się", status: "in progress" },
    { task: "mieć dobry chumor", status: "todo" },
    { task: "pouczyć się CSSa", status: "in progress" },
    { task: "pouczyć się JSa", status: "todo" },
  ];

  function zarchiwizownyTodos1() {
    return todos1.map((task) => ({...task, archived: true}));
  }

  const zarchiwizowny = zarchiwizownyTodos1();
//   console.table(zarchiwizowny);


  function daneDoTabeli(a) {
    const htmlAsArrayOfTRsTodos0 = a.map((task) => {
        return `
        <tr> 
        <td>
        ${task.task}
        </td>
        <td>
        ${task.status}
        </td>
        <td>
        ${task.archived}
        </td>
        </tr>`
    });
    return htmlAsArrayOfTRsTodos0
  }

function stworzTabeleWHTML(a){
    const htmlTRAsAString = a.join('');
    const htmlTable= `<table>
    <tbody>
    ${htmlTRAsAString}
    </tbody>
    </table>`
    return htmlTable;
};

const articleHTMLButJSObjectTodos1 = document.querySelector('#output2');

const zwrotZFunkcjiDaneDoTabeli1 = daneDoTabeli(zarchiwizowny);

articleHTMLButJSObjectTodos1.innerHTML = stworzTabeleWHTML(zwrotZFunkcjiDaneDoTabeli1);


/**Zadanie 6
 * stwórz funkcje która obsłuży search bar (np taki jak w aplikacjach do wyszukiwania rekordów)
 *
 * funckja będzie szukać w tablicy na podstawie pola "task",
 * funckja ma zwracać pierwszy pasujący elemnt
 *
 *
 * ⭐ ⭐ dla chętnych niech funckja posiada drugi parametr określający czy chcemy dostać
 * wszystkie pasujące elementy np podając słowo "pouczyć się" funkcja powinna zwrócić dwa elmenty z poniższej tablicy
 * gdy drugi parametr funkcji określa np że chcemy konretny rekord/element tablicy niech funckja
 * wyszukuje pierwszy pasujący element
 *
 *
 */

const todos2 = [
    { task: "wyspać się", status: "in progress" },
    { task: "mieć dobry chumor", status: "todo" },
    { task: "pouczyć się CSSa", status: "in progress" },
    { task: "pouczyć się JSa", status: "todo" },
  ];

  function znajdz(slowoKlucz) {
    return todos2.filter((nazwa) => nazwa.task.includes(slowoKlucz));
  }
//   console.table(znajdz('pou'));
//   console.table(znajdz('mie'));

  function daneDoTabeli(a) {
    const htmlAsArrayOfTRsTodos0 = a.map((task) => {
        return `
        <tr> 
        <td>
        ${task.task}
        </td>
        <td>
        ${task.status}
        </td>
        <td>
        <button>ok</button>
        </td>
        </tr>`
    });
    return htmlAsArrayOfTRsTodos0
  }

function stworzTabeleWHTML(a){
    const htmlTRAsAString = a.join('');
    const htmlTable= `<table>
    <tbody>
    ${htmlTRAsAString}
    </tbody>
    </table>`
    return htmlTable;
};

const articleHTMLButJSObjectTodos2 = document.querySelector('#output3');

const zwrotZFunkcjiDaneDoTabeli2 = daneDoTabeli(znajdz('mi'));

articleHTMLButJSObjectTodos2.innerHTML = stworzTabeleWHTML(zwrotZFunkcjiDaneDoTabeli2);


/** Zadanie 7
 * podana tablica skłąda się ze studenów którzy są przyporządkowani każdy do jakiejś grupy
 * jednak są oni w tej samej tablicy
 *
 * swtórz funkcje która stworzy dwie lub więcej tablic w tablicy na podstawie pola group
 * dzięki temu pogrupujesz studentów i będzie można ich wyświetlić pogrupowancyh do
 * czego zachęcam żeby przećwiczyć operacje na DOMie
 */

const students = [
    { name: "John", age: 12, group: 1 },
    { name: "Jane", age: 22, group: 2 },
    { name: "Joe", age: 55, group: 1 },
    { name: "Kate", age: 9, group: 2 },
  ];
  
  let ageSum = 0;
  students.forEach((student)=> {
    ageSum = ageSum + student.age;
  })
    //acc akumulator to takie miejsce w pamięci, ktore jest dodstępne w każdym obrocie pętli (tutaj ageSum), a student to nasz parametr
    //to zero wartośc początkowa naszego akumulatora, może to być tablica obiekt co chcemy żeby było naszym początkiem  
  const ageSum1 = students.reduce((acc,student)=>{
    acc = acc + student.age;
    return acc
  },0)

//   function dodajDoGrupy(){
//     return students.reduce(()=>{},)
//   }