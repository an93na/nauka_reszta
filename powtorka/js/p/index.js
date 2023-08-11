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

// znajdzie div z id main
let div = document.getElementById("main");
// początek listy
let ul = document.createElement("ul");
let li = document.createElement("li");
// dodaje tekst
li.innerHTML = "coś tam";
div.appendChild(ul);
ul.appendChild(li);
