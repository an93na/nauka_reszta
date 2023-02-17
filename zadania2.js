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
tab1.sort((a,b) => a-b);
// console.log(tab1);
// console.log(tab1.length)
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
// napisz funckje, ktora podaną tablice przedzieli na pól i zwróci obiekt z polami 'before' i 'after' 
// (jak na dobrej imprezie):
// biscet([1,2,3,8,9,0]) => {beofre: [1,2,3], after: [8,9,0]}
// jesli tablica nie ma parzystej liczby elementow, obiekt powinien zawierac dodatkowo pole 'middle' 
// z elementem srodkowym

let tab8 = [1,2,3,8,9,0]; 

// let cala = tab8.length
// console.log(cala)

// let polowa = cala/2
// console.log(polowa);

function podziel(a) {
    let obiekt = {
        after : [],
        middle: [],
        before : []
    };
    let calatab = a.length;
    let polowatab = calatab/2;
        console.log('tu patrz', polowatab);
    
    if  (calatab % 2 === 0) {
    for (let i = 0; i < a.length; i++) {
        if (i < polowatab ) {
            obiekt.after[i]=a[i];
        }
        else if (i >= polowatab) {
            obiekt.before[i]=a[i];
        }
    }
    } 
    else {

    console.log('hehe cos innego');

    for (let i = 0; i < a.length; i++) {
        if (i < polowatab ) {
            obiekt.after[i]=a[i];
        }
        else if ( i = polowatab) {
            obiekt.middle[i]=a[i];  
        }
        else if (i > polowatab) {
            obiekt.before[i]=a[i];
        }
    }
}
    return obiekt
}
let wynikpodziel = podziel(tab8);
console.log(wynikpodziel);


console.log('~~~~~~~~~~~Zadanie9~~~~~~~~~~~~~~~~');
// dla tablicy obiektow z cenami zakupow:
/* 
  [
		{marchew: 5, jablka: 3, gruszki: 12},
		{marchew: 7, jablka: 1, gruszki: 2},
		{marchew: 2, jablka: 13, gruszki: 8},
	]
*/
// wypisz poszczegolne wiersze (.foreach)
// dodaj do każdej wartosci cyfre 10 (.map)
// znajdz te wiersze, w ktorych jabkla byly dorzsze od gruszek (.filter)
// zsumuj zakupy do nowego obiektu (.reduce)

let tab9 = [
        {marchew: 5, jablka: 3, gruszki: 12},
		{marchew: 7, jablka: 1, gruszki: 2},
		{marchew: 2, jablka: 13, gruszki: 8},
]

tab9.forEach((a) => {console.log(a)});

let podb = tab9.map((a) => {
    a.marchew +=10;
    a.jablka +=10;
    a.gruszki +=10;
    return a});
console.log(`Dodawanie +10`,podb);

let cena = tab9.filter((a) => {
     return a.jablka > a.gruszki
})
console.log(`filtrowanie`,cena);

let summa = tab9.reduce((a, b) => b.marchew+b.jablka+b.gruszki, 0)
console.log('suma zakupów: ',summa);


console.log('~~~~~~~~~~~Zadanie10~~~~~~~~~~~~~~~~');
// dla podanej listy cen brutto i zawartego w nich podatku:
// oblicz w nowej tablicy same wartosci podatkow, n.p [(500 * 0.23), (140 * 0.08) ...]
// J/W ale podaj laczna sume wartosci podatku
// J/W ale podaj laczna sume wartosci podatku z podzialem na grupy procentowe
// n.p  {tax23: (500*0.23 + 5140*0.23), tax08: ....}

  let tab10 =  [
      {price: 500, tax: 23},
      {price: 140, tax: 8},
      {price: 800, tax: 14},
      {price: 5140, tax: 23},
      {price: 250, tax: 8},
    ]
    
    let zadanie10 = tab10.map((a) => {return a.price * (a.tax/100)});
    // console.log(zadanie10);

    let wartoscPodatkow = zadanie10;
    console.log(`Tablica z wartością podatków`,wartoscPodatkow);

    let sumaWartosciPodatkow = wartoscPodatkow.reduce((a,b) => a+b, 0)
    console.log(`Suma wartości podatków`,sumaWartosciPodatkow);

    let podatek23 = tab10.filter((a) => a.tax === 23);
    console.log(`Tablica tylko z podatkiem 23: `,podatek23);

    let watroscPodatek23 = podatek23.map((a) => {return a.price*(a.tax/100)});
    console.log(`Tablica z wyliczoną wartością podatku 23: `,watroscPodatek23);

    let sumaWatoscPodatek23 = watroscPodatek23.reduce((a,b) => a+b,0)
    console.log(`Wartośc podatku 23: `,sumaWatoscPodatek23);

    let podatek8 = tab10.filter((a) => a.tax === 8);
    console.log(`Tablica tylko z podatkiem 8: `,podatek8);

    let watroscPodatek8 = podatek8.map((a) => {return a.price*(a.tax/100)});
    console.log(`Tablica z wyliczoną wartością podatku 8: `,watroscPodatek8);

    let sumaWatoscPodatek8 = watroscPodatek8.reduce((a,b) => a+b,0)
    console.log(`Wartośc podatku 8: `,sumaWatoscPodatek8);

    let podatek14 = tab10.filter((a) => a.tax === 14);
    console.log(`Tablica tylko z podatkiem 14: `,podatek14);

    let watroscPodatek14 = podatek14.map((a) => {return a.price*(a.tax/100)});
    console.log(`Tablica z wyliczoną wartością podatu 14: `,watroscPodatek14);

    let sumaWatoscPodatek14 = watroscPodatek14.reduce((a,b) => a+b,0)
    console.log(`Wartośc podatku 14: `,sumaWatoscPodatek14);

    let sprawdzenie = sumaWatoscPodatek8+sumaWatoscPodatek14+sumaWatoscPodatek23;
    console.log(sprawdzenie);

    console.log('~~~~~~~~~~~Zadanie11~~~~~~~~~~~~~~~~');
    // Napisz funckje sprawdzajaca, czy dany lancuch znakow jest palindromem

    let lancuch11 = 'abcdefghij'

    function polindrom(a) {
        let wynik = '';
        let wynik2 = '';
        for(let i=a.length-1; i >= 0; i--){
            wynik += a[i];  
        }
        //  console.log(wynik);
         for (let j = 0; j < a.length; j++) {
            wynik2 +=a[j];
            
         }
        //  console.log(wynik2)
         if (wynik === wynik2) {
            console.log('podany łańcuch znaków jest polimerem');
         }
         else {
            console.log('podany łańcuch znaków NIE jest polimerem');
         }
    }
       
    polindrom(lancuch11);
    polindrom('aaaa');
    polindrom('anna');


    console.log('~~~~~~~~~~~Zadanie12~~~~~~~~~~~~~~~~');
    // za pomoca wbudowanej metory .sort i zaglebienu się w dokumentacje posortuj tablice [9, 5, 8, 1, 0, 30]
    // J/W ale malejąco, uśmiechnij się do sieie w duchu, gdy zauwazysz, jak mało to pracy
    
    let tab12 = [9, 5, 8, 1, 0, 30]; 
    let posortowaneRosnaco = tab12.sort((a,b) => a-b);
    console.log(`Elementy tablicy posortowane rosnąco: `,posortowaneRosnaco);
    let posortowaneMalejaco = tab12.sort((a, b) => b-a);
    console.log(`Elementy tablicy posortowane rosnąco: `,posortowaneMalejaco);

    console.log('~~~~~~~~~~~Zadanie13~~~~~~~~~~~~~~~~');
    // wygeneruje za pomocą Math.rand tablice 10 losowych elementów
    // sprawdz, czy ktorykolwiek jest większy niż 0.8
    // sprawdź czy wszystkie są w zakresie 0.2 < x < 0.8
    // sprawdź, czy żaden nie jest mniejszy niż 0.1
    // (.some, .every)

    // let tab13 = Math.random();
    // console.log(tab13)

    function zad13() {
        let tabliczka = [];
        for (i = 0; i < 10; i++){
            tabliczka[i] = Math.random()
        
        }
        return tabliczka
    }
let tab13 = zad13();
console.log(tab13);

let WiekszeOd08 = tab13.filter((a) => a > 0.8);
console.log('Wartości większe od 0.8', WiekszeOd08);

let Zakres = tab13.filter((a)=> (a > 0.2 && a < 0.8))
console.log(`Wartosci z zakresu od 0.2 do 0.8`, Zakres);

let mniejszeOd01 = tab13.filter((a) => a< 0.1);
console.log('Wartości mniejsze od 0.1', mniejszeOd01);

let newEvery = tab13.every((a) => (a > 0.1));
console.log(newEvery);

let newSome = tab13.some((a) => (a > 0.8));
console.log(newSome);
