console.log("działa");

class Ksiazka {
  constructor(nazwa, strony, dostepna) {
    this.nazwa = nazwa;
    this.strony = strony;
    this.dostepna = (dostepna !== undefined) ? dostepna: true;
  }
}

let dane = [
  new Ksiazka("Pomidory", 300, true),
  new Ksiazka("Rosół", 40, false ),
  new Ksiazka("Kuchnia Polska", 400, true),
];

// znajdzie div z id main
let div = document.getElementById("main");
// początek listy
let ul = document.createElement("ul");
let li = document.createElement("li");
let li2 = document.createElement("li");
// dodaje tekst
li.innerHTML = "coś tam";
li.className = "red";
li2.innerHTML = "coś tam2";
li2.className = "green";
div.appendChild(ul);
ul.appendChild(li);
ul.appendChild(li2);

let liArray = dane.map((ele, idx) => {
  let li = document.createElement(`li`);
  li.innerHTML = ele.nazwa + "" + ele.strony + "";
  if (ele.dostepna) {
    li.className = "green";
  } else {
    li.className = "red";
  }
  return li;
});
ul.append(...liArray)