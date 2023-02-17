console.log('~~~~~~~~~~~~Zadanie1~~~~~~~~~~~~~~')
// Zadanie 1. 
// dla zadanej tablicy  [8, 4, 2, 7, 1, 9, 4]
// napisz funcke, ktora przyjmie tablice i zwroci jej najwiekszy element

let tab1 = [8, 4, 2, 7, 1, 9, 4];

// rozwiązanie z pętlą for & if. 
function zad1 (a) {
    let max = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
        // console.log(max);
    }
    return max;
}

let aaa = zad1(tab1);
console.log(`Największa liczba z tablicy to: `,aaa);
// console.log(zad1(tab1));

//rozwiązanie z Math.max

let ma = Math.max(...tab1);
console.log(`Największa liczba z tablicy to: `, ma);

//rozwiązanie z sortowaniem tablicy
tab1.sort();
// console.log(tab1);
console.log('Największa liczba z tablicy to: ', tab1[6]);

console.log('~~~~~~~~~~~Zadanie2~~~~~~~~~~~~~~~~');

//Zadanie2
// Napisz funkcje, ktora przymie dwie tablice i podmieni w nich wartosci na podanych indeksach
// np flip([1,2,3], [8,9,10], 1, 0) => spowoduje, ze tablice beda miec wartosci: [1,9,3], [1,9,10]
// uwaga: zadbaj o przypadek gdy flip([1,2,3], [8,9,10], x, x), gdzie x bedzie tym samym indeksem

let tab2 = [1, 2, 3, 4];
let tab3 = [5, 6, 7, 8];

function zad2 (){
    
}