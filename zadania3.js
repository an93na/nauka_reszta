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
// jw tylko z wykorzystaniem length i substring

//8 ostatnich liter
let zad5 = zad1.substring(zad2-8);
console.log(zad5)

//4 ostatnie litery
let zad5a = zad1.substring(zad2-4);
console.log(zad5a);