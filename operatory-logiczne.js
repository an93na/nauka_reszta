// === dokładnie równy

zmienna = '12';
zmienna2 = 122;

// Number.parseInt() zamienia string na liczbę
Number.parseInt(zmienna);

console.log('zmienna = ', zmienna);
console.log(Number.parseInt(zmienna));

console.log('zmienna2 = ', zmienna2);
console.log('zmienna > 8: ', zmienna > 8);
console.log('zmienna2 > 8: ', zmienna2 > 8);
console.log('zmienna2 === 8: ', zmienna2 === 8);
console.log('zmienna2 >= 8: ', zmienna2 >= 8);
console.log('zmienna2 !== 8', zmienna2 !== 8);

//sprawdzenie czy string jest pusty
let napis = 'mnb';
console.log(napis !== '');