function wywolanie(n, start) {
  for (let index = start; index < n + start; index++) {
    console.log(index);
  }
}
// wywolanie(2, 5);

function wywolanie2(ile, start) {
  for (let index = 0; index < ile; index++) {
    console.log(start + index);
  }
}
wywolanie2(3, 5);

// potęgowanie 2**3 to znaczy 2 do potęgi 3
// Pierwsza cyfra podzielna przez 123 w zakresie od 0 - 1000
let wynikPodzielny;
for (idx = 1; idx <= 1000; idx++) {
  if (idx % 123 === 0) {
    console.log("Wynik to: ", idx);
    wynikPodzielny = idx;
    break;
  }
}

// conntinue
// wypisz dzielienia cyfry 123 przez kolejene cyfry całkowite zaczynając od -10 - +10

for (let idx = -10; idx <= 10; idx++) {
  if (idx === 0) {
    console.log("nie dzielimy przez zero");
    continue;
  }
  console.log(123 / idx);
}

// forEach
let arrayForEach = ["aaa", "aa", "bbb", "bb", "ccc", "cc", "abc", "cda"];

arrayForEach.forEach((a) => console.log(a.length >= 3 ? a : ""));
arrayForEach.forEach((a) => console.log(a + "%%%"));
// forEach nic nie zwraca wynik jest undefined. Jedynie przewala się po elemencie, służy tylko do wyświetlania
// natomiast map zwraca nową tablicę
let map = arrayForEach.map((a) => a + "map");
console.log(map);

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let rna = "";
  for (let index = 0; index < dna.length; index++) {
    if (dna[index] === "T") {
      rna += "U";
    } else {
      rna += dna[index];
    }
  }
  return rna;
}

console.log(DNAtoRNA("UTTT"));

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let wynik = args[0];
    for (let index = 0; index < args.length; index++) {
      if (args[index] < wynik) {
        wynik = args[index];
      } else {
        wynik;
      }
    }
    return wynik;
  }
}

let small = new SmallestIntegerFinder();
console.log(small.findSmallestInt([34, 15, 88, 2]));
