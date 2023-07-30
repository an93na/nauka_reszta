let pojazd = "samochód"; // 'rower' 'tuktuk'
let iloscKol;

switch (pojazd) {
  case "samochód":
    console.log("samochód");
    break;
  case "rower":
    console.log("rower");
    break;
  case "tuktuk":
    console.log("tuktuk");
    break;
  default:
    console.log(`typ ${pojazd} nie jest obsługiwany`);
    break;
}
