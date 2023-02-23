console.log('~~~~~~~~~~~~~~~~~~~~1~~~~~~~~~~~~~~~~~~~~');

//1. Łączenie 3 stringów w jeden

let zmienna1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
let zmienna2 = 'Ex pariatur odit repellat animi ab? Vitae fuga tempore ratione illo nihil qui,'
let zmienna3 = 'neque eum velit esse aliquid! Ab perspiciatis ex deleniti!'

zad1 = zmienna1+zmienna2+zmienna3;
console.log('Całe zdanie po połączeniu: ',zad1);

console.log('~~~~~~~~~~~~~~~~~~~~2~~~~~~~~~~~~~~~~~~~~');

//2. Sprawdzanie długości zmiennej z poprzedniego zadania.

// za pomocą length
zad2 = zad1.length
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

console.log('~~~~~~~~~~~~~~~~~~~~13~~~~~~~~~~~~~~~~~~~~');
//13. 