let bilans = 1000;
let debet = 1400;

let czyMoznaWykonac = bilans > debet;

if (czyMoznaWykonac) {
  console.log("Opreacja przebiegła pomyślnie");
} else {
  console.log("Opreacja nie powiodła się. Sprawdź ilość dostępnych środków");
}
