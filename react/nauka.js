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

