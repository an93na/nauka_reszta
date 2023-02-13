

let dostepneSrodki = 1000;
let ociazenie = 400;

let operacja = dostepneSrodki > ociazenie;

if (operacja) {
    console.log('Ok, Twoja operacja została wykonana poprawnie');
}
else {
    console.log('Ups... nie masz wystarczająco środków na wykonanie tej operacji');
}

if (operacja) {
    console.log('Ok, Twoja operacja została wykonana poprawnie');
}
else {
    console.log('Ups... nie masz wystarczająco środków na wykonanie tej operacji');
}


let wiek = 20;
const pelnoletnioscPL = 18;
const pelnoletnioscUS = 21;

if (wiek < pelnoletnioscPL) {
    console.log(`You don't have enought age in US & PL`);    
}
else if (pelnoletnioscPL < wiek && pelnoletnioscUS > wiek) {
    console.log('You have enought age in PL but not in US');
}
else if (pelnoletnioscPL<wiek && pelnoletnioscUS<wiek) {
    console.log('You have enought age in PL & US');
}

let czekolada = 'mleczna';
// let czekolada2 = 'mleczna';
// let czekolada3 = 'gorzka';

if (czekolada === 'biala' || czekolada === 'mleczna') {
    console.log(`Ooo thank you it's my favourite chocolate!`);
}
else if (czekolada === 'gorzka') {
    console.log(`Ehh I sorry I don't like this type of chocolate :( `);    
} else {
    console.log('Thank you');
}