
let kot = {
    imie: 'Amancik',
    wiek: 2,
    kraj: `Francja`, //USA, Francja
    rasa: 'europejski',
    dajGlos:  () => { 
        if (kot.kraj === `Polska`) { 
            console.log('Miau Miau')}
        else if (kot.kraj === 'Francja'){
            console.log('Meu Meu')}
        else {
            console.log('Miałłłu Miałłłu nie umiem miauczeć w tym kraju'); }
    }
}

kot.dajGlos(); 
function funkcjaMiau(){
    { 
        if (this.kraj === `Polska`) { 
            console.log('Miau Miau')}
        else if (this.kraj === 'Francja'){
            console.log('Meu Meu')}
        else {
            console.log('Miałłłu Miałłłu nie umiem miauczeć w tym kraju'); }
    }
}

function przedstawSieFunkcja () {
    console.log(`Hej jestem kotem i mam na imię ${this.imie}`);
}

let tablicaKotow = [
    {
        imie: 'Amancik',
        wiek: 2,
        kraj: `Francja`, //USA, Francja
        rasa: 'europejski',
        przedstawSie: przedstawSieFunkcja,
        dajGlos:  funkcjaMiau
    },
    {
        imie: 'Tofik',
        wiek: 1.5,
        kraj: `Polska`, //USA, Francja
        rasa: 'europejski',
        przedstawSie: przedstawSieFunkcja,
        dajGlos:  funkcjaMiau
    }
]
// console.log(tablicaKotow);
tablicaKotow[0].przedstawSie();   
tablicaKotow[0].dajGlos();   
tablicaKotow[1].przedstawSie();   
tablicaKotow[1].dajGlos();   

console.log('~~~~~~~~~~~~~~~Klasy~~~~~~~~~~~~~~~~~~~');

class cat {
    constructor (imie, wiek, rasa, waga) {
        // console.log('konstruktor');
        this.imieKota = imie;
        this.wiekKota = wiek;
        this.rasaKota = rasa;
        this.wagaKota = waga;
        this.najedzony = false;
        this.szczesliwy = true;
    }
    zamiauczProsze () {
        console.log (`nazywam się ${this.imieKota} i sobie miaucze: Miau Miau!`)
    }



czyJestesGlodny() {
    if (this.najedzony === true) {
        console.log('tak');
    }
    else {
        console.log('o nie zjadłbym coś');
    }
}
zjedz() {
 this.najedzony = true;
}

bawSie() {
    this.szczesliwy = true;
    this.najedzony = false;
    console.log(`tup tup tup yhu ale frajda`);
}

tesknijZaOpiekunem() {  
    this.szczesliwy = false;
    this.najedzony = false;
    console.log(`smutno mi`)
}
odpoczywaj () {
    console.log(`ZZzzz ZZZZzzz zzZZZz`)
}
}

let mojKot = new cat('Amancik', 12, 'europejski', 6);
console.log(mojKot.imieKota,mojKot.wiekKota,mojKot.rasaKota, mojKot.wagaKota);

let tablicaKot = [
    new cat('Amancik', 1, 'europejski', 5),
    new cat('Tornado', 4, 'perski', 7),
    new cat('Balascik', 2, 'syjamski', 6),
    new cat('Pchełka', 6, 'leśny', 4)

]

tablicaKot[2].zamiauczProsze();
console.log(`~~~~~~~~~~~~~~~~~~~~~`);

let nowyKot = new cat('Kitku', 5, 'leśny', 5);

if (nowyKot.czyJestesGlodny()) {
    nowyKot.zjedz();
} else {
    nowyKot.bawSie();
}

nowyKot.tesknijZaOpiekunem();

if (nowyKot.czyJestesGlodny()) {
    nowyKot.zjedz();
} else {
    nowyKot.odpoczywaj()
}

console.log('~~~~~~~~~dziedziczenie~~~~~~~~~~~~~');