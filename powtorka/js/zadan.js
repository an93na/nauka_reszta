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

let summation = (num) => {
  let suma = 0;
  for (let index = 1; index <= num; index++) {
    suma += index;
  }
  return suma;
};

console.log(summation(3));

function bmi(weight, height) {
  let bmiCal = weight / height ** 2;
  if (bmiCal <= 18.5) {
    return "Underweight";
  } else if (bmiCal <= 25) {
    return "Normal";
  } else if (bmiCal <= 30) {
    return "Overweight";
  } else if (bmiCal > 30) {
    return "Obese";
  }
}

console.log(bmi(80, 1.8));
console.log(bmi(50, 1.8));
console.log(bmi(120, 1.8));

function toSamoOdTylu(str) {
  let slowoTyl = "";
  for (let index = str.length - 1; index >= 0; index--) {
    slowoTyl += str[index];
  }

  if (slowoTyl === str) {
    return true;
  } else {
    return false;
  }
}

console.log(toSamoOdTylu("isogram"));
console.log(toSamoOdTylu("aba"));

// function greet(name) {
//   return `Hello, ${name} how are you doing today?`;
// }

// krótsza wersja
let greet = (name) => `Hello, ${name} how are you doing today?`;
console.log(greet("Asia"));

// function areYouPlayingBanjo(name) {
//   if (name[0] === "R" || name[0] === "r") {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }
// }

// II wersja
let areYouPlayingBanjo = (name) =>
  name +
  (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
  " banjo";

console.log(areYouPlayingBanjo("Ray"));
console.log(areYouPlayingBanjo("Asia"));

function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && b + c > a && a + c > b) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(isTriangle(0, 3, 4));
console.log(isTriangle(1, -3, 4));
console.log(isTriangle(4, 3, 4));

const binaryArrayToNumber = (arr) => {
  let suma = 0;
  let licznik = 0;
  let idx = -1;
  for (let index = arr.length - 1; index >= 0; index--) {
    idx++;
    licznik = arr[index] * 2 ** idx;
    suma = suma + licznik;
  }
  return suma;
};

console.log(binaryArrayToNumber([1, 1, 1, 1]));
console.log(binaryArrayToNumber([0, 0, 0, 1]));

// krótsza wersja
const shortBinaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);
console.log(shortBinaryArrayToNumber([0, 0, 0, 1]));
console.log(shortBinaryArrayToNumber([0, 1, 1, 0]));

// Sum Numbers
function sum(numbers) {
  let sumuj = 0;
  if (numbers.length > 0) {
    for (let index = 0; index < numbers.length; index++) {
      sumuj += numbers[index];
    }
    return sumuj;
  } else {
    return 0;
  }
}
console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));
console.log(sum([125.122]));

// krótsza wersja
let shortSum = (tab) =>
  tab.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(shortSum([1, 7, -9, -0.65]));
console.log(shortSum([]));
console.log(shortSum([123.62225]));

function doubleInteger(i) {
  return i * 2;
}
console.log(doubleInteger(2));

function fakeBin(x) {
  let bin = "";
  let a = "";
  if (x !== "") {
    for (let index = 0; index < x.length; index++) {
      if (x[index] < 5) {
        a = "0";
      } else if (x[index] >= 5) {
        a = "1";
      }
      bin += a;
    }
  }
  return bin;
}

console.log(fakeBin("45385593107843568"));

let fakeBinShort = (x) => {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
};
console.log(fakeBinShort("45385593107843568"));

function openOrSenior(data) {
  let tab = [];
  data.map((val) => {
    if (val[0] >= 55 && val[1] > 7) {
      tab.push("Senior");
    } else {
      tab.push("Open");
    }
    return tab;
  });
  return tab;
}
console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);

function validatePIN(pin) {
  if (
    (pin.length === 4 || pin.length === 6) &&
    !isNaN(pin) &&
    /^[0-9]+$/.test(pin)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePIN("12345"));
console.log(validatePIN("1235"));
console.log(validatePIN("12a5"));
console.log(validatePIN("098765"));
console.log(validatePIN("98.765"));

function solution(str, ending) {
  let endingLenght = ending.length;
  let start = str.length - endingLenght;
  let slowo = "";
  for (let index = start; index < str.length; index++) {
    slowo = slowo + str[index];
  }
  if (slowo === ending) {
    return true;
  }
  return false;
}

console.log(solution("abcde", "cde"));
console.log(solution("abc", "cde"));

function solutionTwo(str, ending) {
  return str.endsWith(ending);
}

console.log(solutionTwo("abcde", "cde")); // Output: true
console.log(solutionTwo("abc", "cde")); // Output: false


function reverseFunction(a) {
  let zbieraj = "";
  let podzielone;
  for (let index = a.length - 1; index >= 0; index--) {
    zbieraj += a[index];
  }
  podzielone = zbieraj.split(" ").reverse().join(" ");
  return podzielone;
}

console.log(reverseFunction("This is an example!"));

// krótsza wersja
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
console.log(reverseWords("This is an example!"))