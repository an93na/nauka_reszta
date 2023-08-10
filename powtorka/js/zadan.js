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
    if(wynikPodzielny===undefined){
      wynikPodzielny = idx;
    }
    else {
      console.log(idx + ' też jest podzielny przez 123 ale ja mam już wynik')
    }
  }
}

console.log(wynikPodzielny);
