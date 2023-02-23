//definiowanie obiektów

let imie = 'Kasia';
let nazwisko = 'Nowak';
let wiek = 29;
let wyksztalceniewyzsze = true;



let daneOsob = {
name: 'Kasia',
familyName: 'Nowak',
age: 29, 
isFinishUniversity: true,
adres: {
    ul: 'Sezamkowa',
    numerDomu: 222,
    numerMieszkania: 22,
    miejscowosc: 'Poznan',
    kodPocztowy: `22-222`
}
};

console.log(daneOsob);
console.log(`Nazwisko: ` + daneOsob.familyName);
console.log(`Imię: ` + daneOsob.name);
console.log('Czy ma wykształcenie wyższe: ' + daneOsob.isFinishUniversity);
console.log('Miejscowość: ' + daneOsob.adres.miejscowosc);
console.log("Ulica: " + daneOsob.adres.ul);
console.log('numer domu: ' + daneOsob.adres.numerDomu);
console.log('Pełny adress:', daneOsob.adres);
