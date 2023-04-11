// Zadanie 1 - usuń/odfiltruj wszystkie stringi z tablicy które mają mniej znaków niż 3

const strings2 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

function filtruj(){
   return strings2.filter((string)=> string.length <= 3)
}

const wiecejNiz3 = filtruj();
console.log(wiecejNiz3);