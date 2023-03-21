console.log('~~~~~~~~~~~~~~~~~~~~1~~~~~~~~~~~~~~~~~~~~');

//1. Łączenie 3 stringów w jeden

let zmienna1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
let zmienna2 = 'Ex pariatur odit repellat animi ab? Vitae fuga tempore ratione illo nihil qui,'
let zmienna3 = 'neque eum velit esse aliquid! Ab perspiciatis ex deleniti!'

let zad1 = zmienna1+zmienna2+zmienna3;
console.log('Całe zdanie po połączeniu: ',zad1);

console.log('~~~~~~~~~~~~~~~~~~~~2~~~~~~~~~~~~~~~~~~~~');

//2. Sprawdzanie długości zmiennej z poprzedniego zadania.

// za pomocą length
let zad2 = zad1.length
console.log(zad2);

// za pomocą funkcji
function sprawdz2(a){
    let wynik
    for(let i=1; i<a.length ;i++){
        wynik = i
    }
    return wynik
}

console.log('Ilość znaków w zdaniu z zadania1: ', sprawdz2(zad1));

console.log('~~~~~~~~~~~~~~~~~~~~3~~~~~~~~~~~~~~~~~~~~');
//3. Wyświetlanie 10 kolejnych liter zaczynając od 7

let startIndex = 6;
let stopIndex = startIndex +10;

let zad3 = zad1.substring(startIndex, stopIndex);
console.log('10 kolejnych znaków zaczynając od 7 znaku: ', zad3);

console.log('~~~~~~~~~~~~~~~~~~~~4~~~~~~~~~~~~~~~~~~~~');
//4. Wyświetlenie 8 ostatnich liter.

// console.log(zad2) 
iloscLiterDoWyswietlenia = 8;

//wykorzystanie .slice 
let zad4 = zad1.slice(zad2-iloscLiterDoWyswietlenia,zad2);

console.log('8 ostatnich znaków od końca: ', zad4);

//wykorzystanie pętli
let wycinekZad4='';
for (i=zad2-1; i>= zad2-iloscLiterDoWyswietlenia; i--){
    wycinekZad4 += zad1[i]
}

console.log(wycinekZad4);

console.log('~~~~~~~~~~~~~~~~~~~~5~~~~~~~~~~~~~~~~~~~~');
//5. jw tylko z wykorzystaniem length i substring

//8 ostatnich liter
let zad5 = zad1.substring(zad2-8);
console.log(zad5)

//4 ostatnie litery
let zad5a = zad1.substring(zad2-4);
console.log(zad5a);

console.log('~~~~~~~~~~~~~~~~~~~~6~~~~~~~~~~~~~~~~~~~~');
//6. Zamiana tekstu żeby wszystkie litery były duże a potem wsztskie małe

//duże
let zad6toUpperCase = zad1.toUpperCase();
console.log('Tekst z dużych liter: ',zad6toUpperCase);

//małe
let zad6toLowerCase = zad1.toLowerCase();
console.log('Tekst z małych liter: ',zad6toLowerCase);

console.log('~~~~~~~~~~~~~~~~~~~~7~~~~~~~~~~~~~~~~~~~~');
//7. Zmienna złożona z liter 10, 15, 25, 30, 35, 40, 45 i 50.

let zad7a = zad1.slice(10,11);
// console.log(zad7a);
let zad7b = zad1.slice(15,16);
// console.log(zad7b);
let zad7c = zad1.slice(25,26)
// console.log(zad7c);
let zad7d = zad1.slice(30,31)
// console.log(zad7d);
let zad7e = zad1.slice(35,36)
// console.log(zad7e);
let zad7f = zad1.slice(40,41)
// console.log(zad7f);
let zad7g = zad1.slice(45,46)
// console.log(zad7g);
let zad7h = zad1.slice(50,51)
// console.log(zad7h);

let zad7 = zad7a+zad7b+zad7c+zad7d+zad7e+zad7f+zad7g+zad7h;
console.log(zad7);

console.log('~~~~~~~~~~~~~~~~~~~~8~~~~~~~~~~~~~~~~~~~~');
//8. Zamiana słowa z zadania poprzedniego na słowo essa

let zad8 = zad7.replace(zad7,'essa');
console.log(zad8);

console.log('~~~~~~~~~~~~~~~~~~~~9~~~~~~~~~~~~~~~~~~~~');
//9. Szukanie w teksie wystąpienia "ani"

let zad9a = zad1.indexOf('ani');
let zad9b = zad1.lastIndexOf('ani');
console.log('index pierwszego pojawienia się ani: ',zad9a,'index ostatniego pojawienia się ani: ',zad9b);
let zad9 = zad1.search('ani');
console.log('Index pojawienia się ani',zad9);
let zad9Includes = zad1.includes('ani');
console.log('Sprawdzenie czy ciąg zawiera ani: ',zad9Includes);

console.log('~~~~~~~~~~~~~~~~~~~~10~~~~~~~~~~~~~~~~~~~~');
//10. Znajdź słowo 'eros' przy użyciu wybranej metody a następnie wyświetl je w konsoli wykorzystująć substring

let zad10a = zad1.indexOf('amet');
console.log(zad10a);
let zad10b= zad1.substring(22,26);
console.log(zad10b);

console.log('~~~~~~~~~~~~~~~~~~~~11~~~~~~~~~~~~~~~~~~~~');
//11. Wyświetl tekst z zadania 10 wielkimi literami

let zad11 = zad10b.toUpperCase();
console.log(zad11);

// 11a. Pobierz tekst od użytkownika, a następnie wyświetl go wielkimi literami

// let tekst11a = prompt("Wprowadź tekst:");
// let tekstDuzy = tekst11a.toUpperCase();
// console.log(tekstDuzy);

const input11a = document.createElement("input");
input11a.setAttribute("type","text");
input11a.setAttribute("id","tekstUzytkownika");
input11a.setAttribute("placeholder", "Wyświetli powiększony tekst w konsoli");
document.body.appendChild(input11a);

const tekstInput11a = document.getElementById("tekstUzytkownika");
tekstInput11a.addEventListener("input", ()=> {
    const tekst = tekstInput11a.value.toUpperCase()
    // tekstInput11a.value = tekst;
    console.log(tekst)}
);
console.log('~~~~~~~~~~~~~~~~~~~~12~~~~~~~~~~~~~~~~~~~~');
//12. Wyświetlenie tekstu od tyłu

let tekst12 = 'Coś tam'

//Przy wykorzystaniu właściwości tekstu i tablic
let zad12Podziel = tekst12.split("");
// console.log(zad12Podziel);
let zad12Odwroc = zad12Podziel.reverse();
// console.log(zad12Odwroc);
let zad12 = zad12Odwroc.join("");
console.log(zad12);

//Przy wykorzytaniu pętli for
let zad12Dlugosc = tekst12.length;
console.log(zad12Dlugosc);
let zad12Petla= '';

for(let i = zad12Dlugosc-1; i >=0; i--){
    zad12Petla=zad12Petla + tekst12[i];
    
}
console.log(zad12Petla);

//12a Pobierz tekst od użytkownika i wyświetl go od końca

const tekst12a = document.createElement('input');
tekst12a.setAttribute('type','text');
tekst12a.setAttribute('id','12a');
tekst12a.setAttribute('placeholder','Od tyłu w consoli');
document.body.appendChild(tekst12a);

const tekst12aWprowadzony = document.getElementById('12a');
tekst12aWprowadzony.addEventListener('input', ()=> {
    let tekst = tekst12aWprowadzony.value;
    let tekstDlugosc = tekst.length
    // console.log(tekstDlugosc);
    // console.log(tekst);
    let zad12aPetla = '';
    for (let i=tekstDlugosc-1; i>=0; i--) {
        zad12aPetla = zad12aPetla + tekst[i];
    }
    console.log(zad12aPetla);

    // II sposób
    // let tekstOdTylu = tekst.split('').reverse().join('');
    // console.log(tekstOdTylu);
});



console.log('~~~~~~~~~~~~~~~~~~~~13~~~~~~~~~~~~~~~~~~~~');
//13. Wyświetlanie słowa litera tyle razy ile jest znaków w danym tekście.

let tekst13 = 'Litera'
console.log(zad12Dlugosc);

for (let i=0; i<=zad12Dlugosc; i++){
    console.log(i,tekst13);
}

// 13a. Pobierz tekst od użytkownika, a następnie wyświetl “Litera” tyle razy ile liter ma dany tekst
const input13a = document.createElement("input");
input13a.setAttribute("type", "text");
input13a.setAttribute("id", "13a");
input13a.setAttribute("placeholder", `Wyświetli "Litera w consoli" `);
document.body.appendChild(input13a);

const tekst13awprowadzony = document.getElementById("13a");
tekst13awprowadzony.addEventListener("input", ()=> {
    const tekst13Ile = tekst13awprowadzony.value.length
    // console.log(tekst13Ile);

    // const tekst13Wynik = "Litera ".repeat(tekst13Ile);
    let tekst13Wynik = "";
    for(let i=0; i<tekst13Ile; i++) {
        tekst13Wynik += "Litera ";
    }

    console.log(tekst13Wynik);
});

console.log('~~~~~~~~~~~~~~~~~~~~14~~~~~~~~~~~~~~~~~~~~');
//14. . Wyświetlanie części tekstu, która występuje po pierwszej literze “a”

let tekst14 = 'Kloejna część tekstu zaczynająca się od kolejna'

let zad14 = tekst14.search('a');
// console.log(zad14);
let zad14end = tekst14.substring(6)
console.log(zad14end);

//14a Pobierz tekst od użytkownika a następnie wyświetl część tekstu, która występuje po pierwszej literze “a”

const input14a = document.createElement('input');
input14a.setAttribute('type', 'text');
input14a.setAttribute('id', '14a');
input14a.setAttribute('placeholder', "w consoli od a");
document.body.appendChild(input14a);

const tekst14a = document.getElementById('14a')
const tekst14aWynik = tekst14a.addEventListener('input', () => {
    let t1 = tekst14a.value.search('a');
    console.log(t1)
});

console.log('~~~~~~~~~~~~~~~~~~~~15~~~~~~~~~~~~~~~~~~~~');
//15. Policzenie ile samogłosek jest w tekscie.

let samogloski = ['a','e', 'i', 'o', 'u', 'y'];
let ilesamoglosek = 0;

for (let i=0; i<tekst14.length; i++) {
    if (samogloski.includes(tekst14[i])){
        ilesamoglosek++;
    }
}
console.log('ilość samogłosek to:',ilesamoglosek);

console.log('~~~~~~~~~~~~~~~~~~~~16~~~~~~~~~~~~~~~~~~~~');
// 16. Zamienianie wszystkich liter “a” “e” “o” na “x”

let litery16 = ['a', 'e'];
//przy użyciu funkcji replaceAll
let zad16 = tekst14.replaceAll(/[ae]/ig, 'x')
console.log(zad16);

// przy użyciu pętli 
let wynik16 = '';
for(let i = 0; i<tekst14.length; i++){
    
    if (tekst14[i]==='a' || tekst14[i] === "e") {
        tekst14[i].replace('a','x' )
        wynik16+= 'x';
    }
    else {
        wynik16 += tekst14[i];
    }
}

console.log(wynik16);

console.log('~~~~~~~~~~~~~~~~~~~~17~~~~~~~~~~~~~~~~~~~~');
//17. złączanie 3 słów w jedno.

let slowo1 = 'Ala';
let slowo2 = 'ma';
let slowo3 = 'kota'

//normalne łacznie
let zad17 = slowo1+slowo2+slowo3;
console.log(zad17);

//wykorzytatnie concat
let zad17a = slowo1.concat(slowo2);
let zad17b = zad17a.concat(slowo3);
console.log(zad17b);

console.log('~~~~~~~~~~~~~~~~~~~~18~~~~~~~~~~~~~~~~~~~~');
// Napisz program, który pobiera od użytkownika 5 słów, a następnie wyświetla ja jako jeden ciąg tekstu

// let word1 = prompt("Podaj pierwsze słowo:");
// let word2 = prompt("Podaj drugie słowo:");
// let word3 = prompt("Podaj trzecie słowo:");
// let word4 = prompt("Podaj czwarte słowo:");
// let word5 = prompt("Podaj piąte słowo:");

// let sentence = word1 + " " + word2 + " " + word3 + " " + word4 + " " + word5;

// // console.log("Twoje słowa jako jeden ciąg tekstu: " + sentence);



