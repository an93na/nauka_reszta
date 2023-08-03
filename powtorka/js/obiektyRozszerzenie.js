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
    3: 'x0',
    9: 'y1',
    5: 'z2',
    normalnePole: 404
}
/* nazwa nie może zaczynać się od cyfry, a w obiekcie można tak wpisać,
ale nie można się dobrać do pola przez zwykły zapis randomowyObiekt.0
bo to nie działa, ale te cyfry pod spodem zamieniają się na stringi i wtedy to działa.*/
console.log(randomowyObiekt[3])
/* I tutaj jest różnica pomiędzy tablicą a obiektem. Bo w tablicy mamy indexy i 
jeśli piszemy tab[3] to chodzi nam o wartośc pola z indexem 3. A w obiekcie jeśli piszemy 
[3] to musi istnieć pole z taką etykietą, czyli z taka nazwą. Jesli nie ma takiego pola
to dostaniemy undefined */