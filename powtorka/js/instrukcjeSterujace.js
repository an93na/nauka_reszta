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
} else if (wiek > pelnoletniWPolsce && wiek < pelnoletniWUSA) {
  console.log("Jesteś pełnoletni w Polsce ale nie jesteś pełnoletni w USA");
} else {
  console.log("Jesteś pełnoletni w Polsce i w USA");
}
