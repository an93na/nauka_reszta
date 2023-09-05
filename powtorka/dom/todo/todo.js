function znajdzElementy(selektor) {
  return document.querySelectorAll(selektor);
}

function znajdzElement(selektor) {
  return document.querySelector(selektor);
}

function zrobElement(nazwa, tekst) {
  const element = document.createElement(nazwa);
  element.innerText = tekst;
  return element;
}

function wyswietlKomunikat(tekst, waznosc) {
  const ostrzezenie = zrobElement("div", tekst);
  for (let index = 0; index < bledy.children.length; index++) {
    bledy.children[index].remove();
  }
  ostrzezenie.setAttribute('class', 'waga'+waznosc)
  bledy.appendChild(ostrzezenie);
  window.setTimeout(()=>{
    for (let index = 0; index < bledy.children.length; index++) {
      bledy.children[index].remove();
    }
  },2000)
}

const lista = znajdzElement("ul");
const dodaj = znajdzElement("button");
const input = znajdzElement("input[name='rzecz']");
// tutaj szukamy div z id bledy
const bledy = znajdzElement("div#bledy");

dodaj.addEventListener("click", () => {
  const rzecz = input.value;
  //   console.log(rzecz)
  input.value = "";
  if (rzecz !== "") {
    const elLi = zrobElement("li", rzecz);
    lista.appendChild(elLi);
    eleUsun = zrobElement("button", "usun");
    elLi.appendChild(eleUsun);
    wyswietlKomunikat("Dodano czynnność", 0);
  } else {
    wyswietlKomunikat("Nie można dodać pustej czynności!", 2);
  }
});
