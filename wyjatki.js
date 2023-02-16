

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