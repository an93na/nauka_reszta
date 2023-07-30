let pojazd = "samochód"; // 'samochód' 'rower' 'tuktuk'
let iloscKol;

// swicht to instrukcja sterująca
switch (pojazd) {
  case "samochód": {
    console.log(`Pojazd to: samochód`);
    iloscKol = 4;
    // break przerywa wykonanie jeśli coś się zgadza to przerwa wykonanie
    // inaczej wykona wyszystkie casy po kolei
    break;
  }
  case "rower": {
    console.log("Pojazd to: rower");
    iloscKol = 2;
    break;
  }
  case "tuktuk": {
    console.log("Pojazd to: tuktuk");
    iloscKol = 3;
    break;
  }
  //   default to odpowiednik elsa tam trafiają wszystkie przypadki których nie ma w case
  default: {
    console.log(`typ ${pojazd} nie jest obsługiwany`);
    break;
  }
}
console.log(`ilość kół to: ${iloscKol}`);

// to co wyżej ale jako if else
if (pojazd === "samochód") {
  console.log(`Pojazd to: samochód`);
  iloscKol = 4;
  console.log(`ilość kół to: ${iloscKol}`);
} else if (pojazd === "rower") {
  console.log("Pojazd to: rower");
  iloscKol = 2;
  console.log(`ilość kół to: ${iloscKol}`);
} else if (pojazd === "tuktuk") {
  console.log("Pojazd to: tuktuk");
  iloscKol = 3;
  console.log(`ilość kół to: ${iloscKol}`);
} else {
  console.log(`typ ${pojazd} nie jest obsługiwany`);
  console.log(`ilość kół to: brak w bazie`);
}
