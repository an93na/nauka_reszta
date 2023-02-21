//1. Łączenie 3 stringów w jeden

let zmienna1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
let zmienna2 = 'Ex pariatur odit repellat animi ab? Vitae fuga tempore ratione illo nihil qui,'
let zmienna3 = 'neque eum velit esse aliquid! Ab perspiciatis ex deleniti!'

zad1 = zmienna1+zmienna2+zmienna3;
console.log(zad1);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

//2. Sprawdzanie długości zmiennej z poprzedniego zadania.

// za pomocą length
zad2 = zad1.length
console.log(zad2);

// za pomocą funkcji
function sprawdz2 (a){
    let wynik
    for(let i=0; i<a.length ;i++){
        wynik = i
    }
    return wynik
}

console.log(sprawdz2(zad1));
