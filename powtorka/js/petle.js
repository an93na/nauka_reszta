let idx = 0;

// tutaj trzeba pamiętać o tym że w środku tych nawiasów trzeba napisać coś
// co będzie mówić kiedy ta pętla przestanie działać bo sama z siebie while
// nie zwiększa indeksu przez co cały czas będzie on mniejszy od 40
while (idx <= 40) {
  console.log("nadal mniejsze");
  if (idx % 5 === 0) {
    idx += 6;
  } else if (idx % 3 === 1) {
    idx += 7;
  } else {
    idx++;
  }
  console.log(idx);
}

