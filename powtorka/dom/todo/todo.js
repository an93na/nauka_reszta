function znajdzElementy(selektor) {
  return document.querySelectorAll(selektor);
}

function znajdzElement(selektor) {
  return document.querySelector(selektor);
}

function zrobElement(nazwa, tekst, opcje = {}) {
  const element = document.createElement(nazwa);
  element.innerText = tekst;
  if (opcje) {
    element.setAttribute(opcje.nazwaAtr, opcje.wartosc);
  }
  return element;
}

function wyswietlKomunikat(tekst, waznosc) {
  const ostrzezenie = zrobElement("div", tekst);
  for (let index = 0; index < bledy.children.length; index++) {
    bledy.children[index].remove();
  }
  ostrzezenie.setAttribute("class", "waga" + waznosc);
  bledy.appendChild(ostrzezenie);
  window.setTimeout(() => {
    for (let index = 0; index < bledy.children.length; index++) {
      bledy.children[index].remove();
    }
  }, 2000);
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
    const eleUsun = zrobElement("button", "usun");
    const eleGora = zrobElement("button", "w górę");
    const eleDol = zrobElement("button", "w dół");
    const eleGotowe = zrobElement("button", "zrobione");
    const eleCheck = zrobElement("input", "zrobione", {
      nazwaAtr: "type",
      wartosc: "checkbox",
    });
    elLi.appendChild(eleUsun);
    elLi.appendChild(eleGotowe);
    elLi.appendChild(eleCheck);
    elLi.appendChild(eleGora);
    elLi.appendChild(eleDol);

    eleUsun.onclick = (evt) => {
      // usuwa element li
      evt.target.parentElement.remove();
      wyswietlKomunikat("Usunięto czynność", 1);
    };
    eleGotowe.onclick = (evt) => {
      // przekreśla czynność
      evt.target.parentElement.style.textDecoration = "line-through";
    };
    eleCheck.onclick = (evt) => {
      evt.target.parentElement.style.textDecoration = "line-through";
    };
    eleGora.onclick = (evt) => {
      const liKlikniete = evt.target.parentElement;
      const liWczesniejsze = liKlikniete.previousElementSibling;
      const ul = liKlikniete.parentElement;
      ul.insertBefore(liKlikniete, liWczesniejsze);
    };
    eleDol.onclick = (evt) => {
      const liKlikniete = evt.target.parentElement;
      const liNastepne = liKlikniete.nextElementSibling;
      const ul = liKlikniete.parentElement;
      ul.insertBefore(liNastepne, liKlikniete);
    };
    wyswietlKomunikat("Dodano czynnność", 0);
  } else {
    wyswietlKomunikat("Nie można dodać pustej czynności!", 2);
  }
});
