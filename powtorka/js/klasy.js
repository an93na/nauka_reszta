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

pies.dajGlos();
