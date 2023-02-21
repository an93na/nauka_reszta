console.log('~~~~~~~~~~~~~~~~~~~~1~~~~~~~~~~~~~~~~~~~~');

//1. Łączenie 3 stringów w jeden

let zmienna1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
let zmienna2 = 'Ex pariatur odit repellat animi ab? Vitae fuga tempore ratione illo nihil qui,'
let zmienna3 = 'neque eum velit esse aliquid! Ab perspiciatis ex deleniti!'

zad1 = zmienna1+zmienna2+zmienna3;
console.log(zad1);

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

console.log(sprawdz2(zad1));

console.log('~~~~~~~~~~~~~~~~~~~~3~~~~~~~~~~~~~~~~~~~~');
//3. Wyświetlanie 10 kolejnych liter zaczynając od 7

function zad3(a,b,c){
    let wynik
    for(let i=b; i<=b+c; i++){
        wynik = i;
    }
    console.log(wynik)
    a = a.slice(b, wynik)
    return a
}

console.log(zad3(zad1,5,10));