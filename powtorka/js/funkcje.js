/*function dowolnaNazwaFunkcji (mogąbyć jakieś argumenty) {
ciało funkcji
może być return który coś zwraca
} */

// funkcja bez argumentu
function powiedzCzesc() {
  console.log("Cześć!");
}

function powiedzCzesc2(imie) {
  console.log(`Cześć ` + imie + "!");
}

function mnozyRazyDwa(argument) {
  return argument * 2;
}
/* tutaj mamy wywołanie funkcji czyli tutaj za 
argument podstawione jest 5*/
let pomnozoneRazyDwa = mnozyRazyDwa(5);
console.log(pomnozoneRazyDwa);
/* tutaj też jest wywołanie funkcji z argumentem 3 
i odrazu wyświetlenie tego */
console.log(mnozyRazyDwa(3));

// wywołanie funkcji bez argumentu
powiedzCzesc();

// wywołanie funkcji z argumentem
powiedzCzesc2("Małgosia");

let imieUzyt = "Agata";
powiedzCzesc2(imieUzyt);

// funkcja licząca dlugość wszystkich boków prostokąta
function dlugoscBokowProstokata(a, b) {
  return 2 * a + 2 * b;
}

console.log(dlugoscBokowProstokata(2, 3));
console.log(dlugoscBokowProstokata(4, 5));
console.log(dlugoscBokowProstokata(3, 7));

/* 
Dwie funkcje sprawdzające i na koniec warunek i wypisanie tekstu w konsoli
 */
let argumentDoSpr = 15;

function czyArgumentWiekszyOd10(a) {
  if (a > 10) {
    return true;
  } else {
    return false;
  }
}

function czyArgumentPodzielnyBezResztyPrzez2(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

if (
  czyArgumentWiekszyOd10(argumentDoSpr) === true &&
  czyArgumentPodzielnyBezResztyPrzez2(argumentDoSpr) === true
) {
  console.log("hurraaa!");
} else {
  console.log(";(");
}
/* 
zadanie z funkcją przyjmującą dwie zmienne usd i euro i mówi co jest większe
zwróci większą wartość
*/

const euro = 4.41;
const usd = 3.99;

function coWieksze(e, u) {
  if (e > u) {
    console.log(`euro jest droższe od dolara i wynosi: `, e);
    return e;
  } else if (e < u) {
    console.log(`dolar jest droższy od euro i wynosi: `, u);
    return u;
  } else {
    console.log(
      "kurs euro jest taki sam jak kurs dolara. Kursy te wynoszą: ",
      e
    );
    return e;
  }
}

coWieksze(euro, usd);

function myFunction(e, u) {
  let wynik;
  if (e > u) {
    wynik = e;
  } else {
    wynik = u;
  }
  return wynik;
}

console.log(myFunction(euro, usd));

// jako obiekty

const euroObj = { price: 5, name: "EURO", country: "Euro region" };
const usdObj = { price: 4, name: "USD", country: "USA" };
const juanObj = { price: 3, name: "JUAN", country: "China" };

function porownaj(one, two) {
  const onePrice = one.price;
  const twoPrice = two.price;
  const oneName = one.name;
  const twoName = two.name;
  if (onePrice > twoPrice) {
    console.log(`${oneName} jest większe od ${twoName} = ${onePrice}`);
    return onePrice;
  } else {
    console.log(`${twoName} jest większe od ${oneName} = ${twoPrice}`);
    return twoPrice;
  }
}
porownaj(euroObj, usdObj);

// sprawdzenie czy podany ciąg znaków to polski pesel
let savePesels = "";
let invalidPesels = "";

// funkcje onSuccess
function onSuccess(number) {
  console.log(`To jest poprawny numer PESEL ${number}`);
}

function onSuccessSaveToDB(numer) {
  console.log(`To jest poprawny numer PESEL ${numer}`);
  console.log("Następuje zapis do bazy danych");
  savePesels += "," + numer;
}

function onSuccessSaveSendEmail(number) {
  console.log(`To jest poprawny numer PESEL ${number}`);
  console.log("Wysyłam email do prezesa");
}

// funkcje onFailure
function onFailure(wrong) {
  console.log(`To nie jest poprawny numer PESEL ${wrong}`);
}

function onFailureSaveToDB(numer) {
  console.log(`To nie jest poprawny numer PESEL ${numer}`);
  console.log("Popraw Pesel aby nastąpił zapis do bazy danych");
}

//                           string,  funkcja        , funkcja
function isNumberLongEnought(idIn, OnPeselSuccess, OnPeselFailure) {
  const requiedLength = 11;
  // numer albo NaN
  const convertedNumber = Number(idIn);
  let lenght = (Math.log(convertedNumber) * Math.LOG10E + 1) | 0;
  // czy numer nie jest NaN i czy jego długośc wynosi 11
  if (!isNaN(convertedNumber) && lenght === requiedLength) {
    OnPeselSuccess(convertedNumber);
  } else {
    OnPeselFailure(idIn);
  }
}

isNumberLongEnought("111", onSuccess, onFailure);
isNumberLongEnought("22222222222", onSuccess, onFailure);
isNumberLongEnought("1234567890", onSuccess, onFailure);
isNumberLongEnought("22222222222", onSuccessSaveSendEmail, onFailure);
isNumberLongEnought("22222222222", onSuccessSaveToDB, onFailure);
isNumberLongEnought("22222g22222", onSuccessSaveToDB, onFailureSaveToDB);
// console.log(savePesels)

function getAdderFunction() {
  console.log("to jest funkcja getAdderFunction");
  return function (a, b) {
    console.log("To jest funkcja zwrócona");
    console.log(`Będziemy dodawać ${a} do ${b}`);
    return a + b;
  };
}

let funkcjaZwrocona = getAdderFunction();
console.log(funkcjaZwrocona);
console.log(typeof funkcjaZwrocona);

console.log(funkcjaZwrocona(3, 7));

// to też jest poprawny zapis to co w nawiasie (4,4) to jest do tej funkcji anonimowej
let wynik2 = getAdderFunction()(4, 4);
console.log(wynik2);
