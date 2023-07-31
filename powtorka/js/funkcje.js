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

function dlugoscBokowProstokata(a, b) {
  return 2 * a + 2 * b;
}

console.log(dlugoscBokowProstokata(2, 3));
console.log(dlugoscBokowProstokata(4, 5));
console.log(dlugoscBokowProstokata(3, 7));
