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
