// Zadanie 1 - usuń/odfiltruj wszystkie stringi z tablicy które mają mniej znaków niż 3

const strings2 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

// I sposób z funkcją filter
function filtruj(){
   return strings2.filter((string)=> string.length > 3)
}

const wiecejNiz3 = filtruj();
console.table(wiecejNiz3);

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

//   II sposób
  function czyPelnoletni() {
    return users.filter((user) => user.age >= 18);
  };
  
  const pelnoletni = czyPelnoletni()
  console.table(pelnoletni);