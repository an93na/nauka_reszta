console.log('~~~~~~~~~~~~Zadanie1~~~~~~~~~~~~~~')
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
// Napisz funkcje, ktora przymie dwie tablice i podmieni w nich wartosci na podanych indeksach
// np flip([1,2,3], [8,9,10], 1, 0) => spowoduje, ze tablice beda miec wartosci: [1,9,3], [1,9,10]
// uwaga: zadbaj o przypadek gdy flip([1,2,3], [8,9,10], x, x), gdzie x bedzie tym samym indeksem

let tab2 = [1, 2, 3, 4];
let tab2a = [5, 6, 7, 8];

function zad2 (a, b){
    a[2] = b[2];
    console.log(a);
    console.log(b);
    b[0] = a[0];
    console.log(a);
    console.log(b);
    return a;
}

let wartosc = zad2(tab2, tab2a);
// console.log(wartosc);


function zad2copy (a, b){
    a[1] = b[1];
    console.log(a);
    console.log(b);
    b[1] = a[1];
    console.log(a);
    console.log(b);
    return a;
}
let wartosca = zad2copy(tab2, tab2a);


console.log('~~~~~~~~~~~Zadanie3~~~~~~~~~~~~~~~~');
// napisz funkcje, ktora zamieni tabilce na obiekt
// toObject([9, 4, 1]) => {0: 9, 1: 4, 2: 1}

let tab3 = [9, 4, 1, 3];

function zad3 (a){
    let obi4 = {};
    for (let i = 0; i < tab3.length; i++) {
        obi4[i]= a[i]; 
    }
    return obi4

}
let w3 = zad3(tab3);
console.log(w3);


console.log('~~~~~~~~~~~Zadanie4~~~~~~~~~~~~~~~~');
// napisz funckje, ktora zwroci tablice o dlugosci N wypelnioną samymi zerami
// zeros(5) => [0,0,0,0,0]

// sama pętla for
let tab4 = [];
a = 3
for(let i = 0; i< a; i++){
    tab4[i] = 0
}
console.log(tab4);

//funkcja
let tab4a = [];
function zad4(p,n) {
    for (let i = 0; i < n ; i++){
        p[i] = 0;
    }
    return p
}
let tablica4 = zad4(tab4a,4);
console.log(tablica4);

// funkcja wersja II 

function zad4a(n) {
    let p = [];
    for (let i = 0; i < n ; i++){
        p[i] = 0;
    }
    return p
}
let tabli4u = zad4a(5);
console.log(tabli4u);

console.log('~~~~~~~~~~~Zadanie5~~~~~~~~~~~~~~~~');
// J/W, ale kolejne cyfry naturalne, poczynając od 0
// nums(5) => [0,1,2,3,4]

function zad5(n) {
    let p = [];
    for (let i = 0; i < n ; i++){
        p[i] = i;
    }
    return p
}
let tab5 = zad5(5);
console.log(tab5);

console.log('~~~~~~~~~~~Zadanie6~~~~~~~~~~~~~~~~');
// J/W ale poczynając od zadanego N
// numsFrom(5, 4) => [4,5,6,7,8]


function zad6(n, m) {
    let p = [];
    for (let i = 0; i < n ; i++){
        p[i] = m++;
    }
    return p
}
let tab6 = zad6(5, 5);
console.log(tab6);

console.log('~~~~~~~~~~~Zadanie7~~~~~~~~~~~~~~~~');
// napisz funkcje, ktora zwroci funkcje, ktora bedzie  generowac tablice [1,2,3].
//  Za pomoca takiej funkcji i operatora tablicy .concat() wygeneruj [1,2,3,1,2,3,1,2,3]

function zad7() {
    return function (a) {
        a = [1, 2, 3]
        return a
    }
}

let funkcjaZwrocona = zad7();
// console.log(funkcjaZwrocona());

let funkcjaZad7 = funkcjaZwrocona()
// console.log(funkcjaZad7);

let polacz = funkcjaZad7.concat(funkcjaZad7);
// console.log(polacz);

let ostatecznePolacz = polacz.concat(funkcjaZad7);
console.log(ostatecznePolacz)

console.log('~~~~~~~~~~~Zadanie8~~~~~~~~~~~~~~~~');
