console.log("działa");

class Ksiazka {
  constructor(nazwa, strony) {
    this.nazwa = nazwa;
    this.strony = strony;
    this.dostepna = true;
  }
}

let dane = [
  new Ksiazka("Pomidory", 300),
  new Ksiazka("Rosół", 40),
  new Ksiazka("Kuchnia Polska", 400),
];
