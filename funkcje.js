

function pierwszaFunkcja(a) {
    return a*2;
}

let wynik = pierwszaFunkcja(5);
console.log(wynik);
console.log(pierwszaFunkcja(2));
console.log(pierwszaFunkcja(6));


function drugaFunkcja() {
    return console.log('Hello')    
}

drugaFunkcja();
drugaFunkcja();
drugaFunkcja();

function trzeciaFunkcja(b) {
    return console.log(`Cześć ${imie}!`);
}

imie = 'Marek'
trzeciaFunkcja(imie);
imie = 'Kasia'
trzeciaFunkcja(imie);
imie = 'Janek'
trzeciaFunkcja(imie);