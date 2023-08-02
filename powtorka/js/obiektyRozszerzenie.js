let obiektTestowy = {
  a: 123,
  b: "Ala ma kota",
  ccc: true,
  imie: "Barbara",
};

// akcessory po kropce
let imie = obiektTestowy.imie;
let wybranaZmienna = obiektTestowy.ccc;

console.log(imie, wybranaZmienna);

// akcessor z kropka nie jest dynamiczny

let randomowyObiekt = {
    0: 'x0',
    1: 'y1',
    2: 'z2',
    normalnePole: 404
}
/* nazwa nie może zaczynać się od cyfry, a w obiekcie można tak wpisać,
ale nie można się dobrać do pola przez zwykły zapis randomowyObiekt.0
bo to nie działa, ale te cyfry pod spodem zamieniają się na stringi i wtedy to działa */
console.log(randomowyObiekt[0])