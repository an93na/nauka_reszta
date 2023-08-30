// DOM - model obiektowy dokumentu, struktura drzewiasta.

let elementyTd = document.querySelectorAll("td");
let pierwszyElementTd = elementyTd[0];
let ostatniElementTd = elementyTd[elementyTd.length - 1];

console.log("Dokument zawiera ", elementyTd.length + " elementy <td>");
