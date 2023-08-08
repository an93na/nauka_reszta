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

function funkcjaSzczeknij() {
  // this czyli ten i jak wywołujemy tą funkcję na tablicy to wtedy nam się konkretny
  // index podstwia z konkretnym psem (patrz od lini 59 - 65)
  if (this.kraj === "Polska") {
    console.log("Hau Hau ");
  } else if (this.kraj === "Anglia") {
    console.log("Bark Bark");
  } else {
    console.log("Nie umiem szczekać w tym kraju");
  }
}

function funkcjaPrzedstawiajca() {
  console.log(`Hej jestem psem i mam na imię ${this.imie}`);
}

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

// klasa
class Pies {
  //  specjalna funkcja tworząca klasę
  constructor(imie, wiek, rasa, waga) {
    console.log("Wywołano konstruktor klasy PIES");
    this.name = imie;
    this.age = wiek;
    this.rasa = rasa;
    this.weight = waga;
    this.najedzony = false;
    this.szczesliwy = true;
  }
  //   metody
  podajImieProsze() {
    console.log(`Nazywam się ${this.name} i sobie szczekam`);
  }
  czyJestesGlodny() {
    if (this.najedzony === true) {
      console.log("tak");
    } else {
      console.log("Zjadłbym coś");
    }
  }

  czyJestesSzczesliwy() {
    if (this.szczesliwy === true) {
      console.log("tak");
    } else {
      console.log("smutno mi");
    }
  }

  zjedz() {
    this.najedzony = true;
  }

  biegaj() {
    this.szczesliwy = true;
    this.najedzony = false;
  }

  tesknijZaOpiekunem() {
    this.szczesliwy = false;
    this.najedzony = false;
  }
}

let mojNowyPies = new Pies("Lusia", 6, "kundel", 12);
console.log(
  mojNowyPies.name,
  mojNowyPies.age,
  mojNowyPies.rasa,
  mojNowyPies.weight
);

let tablicaPsow = [
  new Pies("Lusia", 6, "kundel", 12),
  new Pies("Lucek", 2, "york", 8),
  new Pies("Felek", 11, "podhalanski", 35),
  new Pies("Flora", 8, "pudel", 10),
];

tablicaPsow[2].podajImieProsze();
let testowyPies = new Pies("Jogi", 4, "beagle", 14);

// opieka nad psem

if (testowyPies.czyJestesGlodny()) {
  testowyPies.zjedz();
} else {
  testowyPies.biegaj();
}

testowyPies.tesknijZaOpiekunem();

console.log(`~~~~~~~~~~~~~~~~~~`);
// Dziedziczenie
// klasa abstrakcyjna można ją powołać do życia przez dziedziczenie. Nie istnieje sama
class Zwierze {
  constructor(imie, wiek, rasa, waga) {
    this.imie = imie;
    this.wiek = wiek;
    this.rasa = rasa;
    this.waga = waga;
    this.najedzony = false;
    this.szczesliwy = true;
    console.log(`Stworzono zwierzę!`);
  }
  wydajDzwiek() {
    console.log(`Nazywam się ${this.imie} i coś mówię`);
  }
  czyJestesGlodny() {
    if (this.najedzony === true) {
      console.log("tak");
    } else {
      console.log("Zjadłbym coś");
    }
    return this.najedzony;
  }
  czyJestesSzczesliwy() {
    if (this.szczesliwy === true) {
      console.log("tak");
    } else {
      console.log("smutno mi");
    }
    return this.szczesliwy;
  }
  tesknijZaOpiekunem() {
    console.log(`Mmmm mmm mmm`);
    this.najedzony = false;
  }
}

// klasa dog jest też zwierzęciem więc posiada wszystko co ma klasa zwierzę
class Dog extends Zwierze {
  constructor(imie, wiek, rasa, waga, kolorObrozy) {
    // super odwołuje się do konstruktora klasy którą rozszerza czyli tam trafiamy
    super(imie, wiek, rasa, waga);
    this.kolorObrozy = kolorObrozy;
    console.log("stworzono psa!");
  }
  // nadpisuje funkcję z klasy zwierzę bo wiem więcej i wiem co ten pies wydaje z siebie
  wydajDzwiek() {
    console.log(`Nazywam się ${this.imie} i szczekam`);
  }
}
class Cat extends Zwierze {
  constructor(imie, wiek, rasa, waga, zycia) {
    super(imie, wiek, rasa, waga);
    if (zycia === undefined) {
      this.iloscZyc = 7;
    } else {
      this.iloscZyc = zycia;
    }
    console.log("stworzono psa!");
  }
  wydajDzwiek() {
    console.log(`Nazywam się ${this.imie} i miaucze`);
  }
}

let dogTestowy = new Dog("Tofik", 3, "Labrador", 21, "niebieska");
let catTestowy = new Cat("Felek", 6, "Mix", 6);
let catTestowy1 = new Cat("Felek2", 6, "Mix", 6, 5);
dogTestowy.wydajDzwiek();
catTestowy.wydajDzwiek();
catTestowy1.wydajDzwiek();
