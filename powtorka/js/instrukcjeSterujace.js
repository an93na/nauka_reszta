let bilans = 1000;
let debet = 1400;

let czyMoznaWykonac = bilans > debet;

if (czyMoznaWykonac) {
  console.log("Opreacja przebiegła pomyślnie");
} else {
  console.log("Opreacja nie powiodła się. Sprawdź ilość dostępnych środków");
}

let wiek = 28;
const pelnoletniWPolsce = 18;
const pelnoletniWUSA = 21;

if (wiek < pelnoletniWPolsce) {
  console.log("Nie jesteś pełnoletni ani w Polsce ani w USA");
}
// && mówi nam że oba warunki muszą być spełnione
else if (wiek > pelnoletniWPolsce && wiek < pelnoletniWUSA) {
  console.log("Jesteś pełnoletni w Polsce ale nie jesteś pełnoletni w USA");
} else {
  console.log("Jesteś pełnoletni w Polsce i w USA");
}

// wybór koloru niebieski zielony czerwony

let kolor = "braz";
// || ten lub inny 
if (kolor === "czerwony" || kolor === "niebieski") {
  console.log("To idealny wybór");
} else if (kolor === "zielony") {
  console.log("nie przepadam za tym kolorem");
}
else {
    console.log('no może być')
}