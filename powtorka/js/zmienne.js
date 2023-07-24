let name = "Dominika";
let lastName = "Dominikana";
let myAge = 23;
let isAdult = true;

let name2 = "Krzysztof";
let lastName2 = "Kowalski";
let myAge2 = 28;
let isAdult2 = true;

let name3 = "Jan";
let lastName3 = "Nowak";
let myAge3 = 34;
let isAdult3 = true;

// pusty objekt
let obiekt = {};

// obiekt z zawartością
let personObject = {
  name: "Tadeusz",
  lastName: "Nowak",
  age: 44,
  isAdult: true,
  // obiekt może zawierać w sobie kolejny obiekt, może być tych zagnieżdżeń nieskończenie wiele
  address: {
    city: "Warszawa",
    zipCode: "41-100",
    street: "Polna",
    number: {
      houseNo: 41,
      houseAdditional: 5,
    },
  },
};

console.log(personObject);

// kropka pomiędzy to jest akcesor dostępu do pola
// do którego pola chcemy się dostać
console.log(`Imię to: ${personObject.name}`);
console.log(`Miasto to: ${personObject.address.city}`);
console.log(`Numer domu to: ${personObject.address.number.houseNo}`);
