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
console.log("element o name=nazwisko ma następujące atrybuty ", el.attributes);
const maType = el.hasAttribute("type");
console.log(
  "element o name=nazwisko " +
    (maType ? "ma atrybut type" : "nie ma atrybutu type")
);

// getAttribute
// setAttribute
// removeAttribute

const przyciskSet = document.getElementById("set");
const przyciskDel = document.getElementById("del");
przyciskSet.addEventListener("click", () => {
  console.log("kliknięto set");
  el.setAttribute("class", "wazne");
});
przyciskDel.addEventListener("click", () => {
  console.log("kliknięto na del");
  el.removeAttribute("class");
});

const hasloWiget = document.getElementsByName("haslo")[0];
const sila = document.getElementById("sila");
hasloWiget.addEventListener("keyup", () => {
  console.log("nacisnieto klawisz");
  const komplikacjaHasla = hasloWiget.value.length / 8;
  let color = "weak";
  if (komplikacjaHasla < 0.25) {
    color = "weak";
  } else if (komplikacjaHasla < 0.5) {
    color = "medium";
  } else if (komplikacjaHasla < 0.75) {
    color = "almost";
  } else if (komplikacjaHasla < 1) {
    color = "close";
  } else if (komplikacjaHasla < 1.5) {
    color = "ok";
  } else if (komplikacjaHasla < 2) {
    color = "super";
  } else {
    color = "extra";
  }
  console.log(komplikacjaHasla);
  hasloWiget.setAttribute("class", color);
  sila.innerText = "siła hasła= " + komplikacjaHasla;
});
