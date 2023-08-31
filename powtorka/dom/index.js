// DOM - model obiektowy dokumentu, struktura drzewiasta.

const elementyTd = document.querySelectorAll("td");
const pierwszyElementTd = elementyTd[0];
const ostatniElementTd = elementyTd[elementyTd.length - 1];

console.log("Dokument zawiera ", elementyTd.length + " elementy <td>");
console.log("Pierwszy element to: ", pierwszyElementTd);
console.log("Ostatni element to: ", ostatniElementTd);

const pierwszyTd = document.querySelector("td");
console.log("Pierwszy element to: ", pierwszyTd);

// document.getElementById("ele1"); -po ID, zawsze zwraca pojedyńczy element
// document.getElementsByTagName("table"); - po nazwie tagu
// document.getElementsByName("imie"); - po atrybucie name
// document.getElementsByClassName("tekscik"); - po nazwie klasy

// [0] wez z tego co zwroci pierzy element
const el = document.getElementsByName("nazwisko")[0];
const maType = el.hasAttribute("type")
console.log('element o name=nazwisko '+ (maType?"1":"0"))