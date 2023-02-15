
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