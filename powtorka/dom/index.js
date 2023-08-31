// DOM - model obiektowy dokumentu, struktura drzewiasta.

const elementyTd = document.querySelectorAll("td");
const pierwszyElementTd = elementyTd[0];
const ostatniElementTd = elementyTd[elementyTd.length - 1];

console.log("Dokument zawiera ", elementyTd.length + " elementy <td>");
console.log("Pierwszy element to: ", pierwszyElementTd);
console.log("Ostatni element to: ", ostatniElementTd);

const pierwszyTd = document.querySelector("td");
console.log("Pierwszy element to: ", pierwszyTd);

