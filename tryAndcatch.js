
let przykad = {
    a: 5,
    b: {
        c: 2,
        d: 'Dzien dobry'
    }
 }


 try {

    console.log(przykad.a)
    console.log(przykad.b)
    console.log(przykad.b)
    console.log(przykad.c.d);
    
} catch (error) {
    console.log('wystąpił problem ale dzięki zastosowaniu try catch możemy iść dalej');
}
console.log(przykad.b.c);
console.log(przykad.b.d);



console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let osoba = {
    imie: `Gabriel`,
    nazwisko: 'Gorka',
    adres: {
        miasto: 'Poznań',
        kodPocztowy: 22222,
        ulica: `ogólna`,
        numer : {
            numerDomu: 4,
            numerMieszkania: 3
        }
    },
    logAdres: function ( ) {
        console.log(this.adres);
    }
}

function zmienadres(klient,nowyAdres) {
    if(nowyAdres === undefined) {
        console.error (`Ten parametr jest wymagany`);
        return;
    }
    if( 
        nowyAdres.miasto === undefined || 
        nowyAdres.kodPocztowy === undefined || 
        nowyAdres.ulica === undefined || 
        nowyAdres.numer === undefined) {
        console.error (`Twoj adress jest nie kompletny`);
        return;
    }

    klient.adres = nowyAdres;
}

function zmienAdresIWyrzucBlad(klient,nowyAdres) {
    if(nowyAdres === undefined) {
        throw new Error ('parametr nowyAdres jest wymagany i nie został dostarczony');
    }
    if( 
        nowyAdres.miasto === undefined || 
        nowyAdres.kodPocztowy === undefined || 
        nowyAdres.ulica === undefined || 
        nowyAdres.numer === undefined) {
        throw new Error ('jeden z wymaganych parametrów nie został dostarczony');
    }

    klient.adres = nowyAdres;
}
function zmienNumer(klient, nowyAdres) {
    klient.adres.numer.numerDomu = nowyAdres.numer.numerDomu;
    klient.adres.numer.numerMieszkania = nowyAdres.numer.numerMieszkania;
}


osoba.logAdres();

let nowyAdress = {
    miasto: 'Warszawa',
    kodPocztowy: 23213,
    ulica: `piekna`,
    numer : {
        numerDomu: 4,
    }
}

zmienadres(osoba, nowyAdress);
osoba.logAdres();

// zmienadres(osoba, 'Rolnicza');
// osoba.logAdres();
let nowyNumer = 22;
try {
    zmienNumer(osoba,nowyNumer);
}
catch (error) {
    console.error(error);
    if (typeof nowyNumer === 'number');
{ let wlasciwyNumer = {
        numer : {
            numerDomu: nowyNumer,
            numerMieszkania: undefined
        }
    }
    console.log(`Zaktualizowano pole adres z adresem`, wlasciwyNumer);
    zmienNumer(osoba,wlasciwyNumer);
}
    
}
finally {
    osoba.logAdres();
    console.log('Program konczy dzialanie');
}


let nowyAdressBlad = {
    miasto: 'Lublin',
    kodPocztowy: 21133,
    ulica: `niebieska`,
    numer : {
        numerDomu: 9,
    }
}

// zmienadres(osoba, nowyAdressBlad);
// osoba.logAdres();

zmienAdresIWyrzucBlad(osoba, nowyAdressBlad);
osoba.logAdres();

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);


let person = {
    imie: `Jan`,
    nazwisko: 'Kowalski',
    adres: {
        miasto: 'Gdańsk',
        kodPocztowy: 81818,
        ulica: `długa`,
        numer : {
            numerDomu: 77,
            numerMieszkania: 5
        }
    },
    logAddress: function ( ) {
        console.log(this.adres);
    }
}


function zmienNumer2(osoba, nowyAddress) {
    osoba.adres.numer.numerDomu = nowyAddress.numer.numerDomu;
    osoba.adres.numer.numerMieszkania = nowyAddress.numer.numerMieszkania;
}

person.logAddress();

let newNumber = "22";
try {
    zmienNumer2(person,newNumber);
} catch (error) {
    console.error(error);
    if (typeof newNumber === 'number')
    { 
        let wlasciwyNumber = {
        numer : {
            numerDomu: newNumber,
            numerMieszkania: undefined
        }
        }
        console.log(`Zaktualizowano pole adres z adresem`, wlasciwyNumber);
        zmienNumer2(person,wlasciwyNumber);
     
    } else {
        throw new Error('Zły format adressu numer nie może być stringiem');
    }
}
finally {
    person.logAddress();
    console.log('Program konczy dzialanie');
}

let nowyAdressBlad2 = {
    miasto: 'Lublin',
    kodPocztowy: 21133,
    ulica: `niebieska`,
    numer : {
        numerDomu: 9,
    }
}

