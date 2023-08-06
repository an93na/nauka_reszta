let pies = {
  imie: "Azor",
  wiek: 3,
  kraj: "Polska", //Polska Hau Hau, Anglia Bark Bark, Niemcy Woof Woof
  rasa: "Owczarek Niemiecki",
  dajGlos: function () {
    if (pies.kraj === "Polska") {
      console.log("Hau Hau ");
    } else if (pies.kraj === " Anglia") {
      console.log("Bark Bark");
    } else {
      console.log("Nie umiem szczekać w tym kraju");
    }
  },
};

function funkcjaSzczeknij () {
  if (this.kraj === "Polska") {
    console.log("Hau Hau ");
  } else if (this.kraj === "Anglia") {
    console.log("Bark Bark");
  } else {
    console.log("Nie umiem szczekać w tym kraju");
  }
};

function funkcjaPrzedstawiajca() {
  console.log(`Hej jestem psem i mam na imię ${this.imie}`);
};

let dogsArray = [
  {
    imie: "Azor",
    wiek: 3,
    kraj: "Polska", //Polska Hau Hau, Anglia Bark Bark, Niemcy Woof Woof
    rasa: "Owczarek Niemiecki",
    dajGlos: funkcjaSzczeknij,
    przedstawSie: funkcjaPrzedstawiajca,
  },
  {
    imie: "Kajtek",
    wiek: 5,
    kraj: "Niemcy", //Polska Hau Hau, Anglia Bark Bark, Niemcy Woof Woof
    rasa: "Pudel",
    dajGlos: funkcjaSzczeknij,
    przedstawSie: funkcjaPrzedstawiajca,
  },
  {
    imie: "Pimpek",
    wiek: 7,
    kraj: "Anglia", //Polska Hau Hau, Anglia Bark Bark, Niemcy Woof Woof
    rasa: "Labrador",
    dajGlos: funkcjaSzczeknij,
    przedstawSie: funkcjaPrzedstawiajca,
  },
];
dogsArray[0].dajGlos();
dogsArray[1].dajGlos();
dogsArray[2].dajGlos();

dogsArray[0].przedstawSie();
dogsArray[1].przedstawSie();
dogsArray[2].przedstawSie();

