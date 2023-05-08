"use strict";
// let x: string;
const czlowieki = [];
czlowieki.push({
    imie: "Jan",
    nazwisko: "Kowalski",
    dataUrodzenia: "01-01-1993",
});
czlowieki.push({
    imie: "Jan1",
    nazwisko: "Kowalski1",
    dataUrodzenia: "01-01-1992",
});
czlowieki.push({
    imie: "Jan2",
    nazwisko: "Kowalski2",
    dataUrodzenia: "01-01-1990",
});
czlowieki.forEach((item) => {
    console.log(`${item.imie} ${item.nazwisko} ${item.dataUrodzenia}`);
});
