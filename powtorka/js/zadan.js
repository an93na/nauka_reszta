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
