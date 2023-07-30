let pojazd = "rower"; // 'samochód' 'rower' 'tuktuk'
let iloscKol;

switch (pojazd) {
  case "samochód": {
    console.log("samochód");
    iloscKol = 4;
    break;
  }
  case "rower": {
    console.log("rower");
    iloscKol = 2;
    break;
  }
  case "tuktuk": {
    console.log("tuktuk");
    iloscKol = 3;
    break;
  }
  default: {
    console.log(`typ ${pojazd} nie jest obsługiwany`);
    break;
  }
}
console.log(`ilość kół to: ${iloscKol}`)
