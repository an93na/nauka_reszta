const x = 23;
const isEven = (x % 2 === 0)? "parzysta" : "nieparzysta";
console.log(isEven); //"nieparzysta"

const age = 21;
const status = (age < 18) ? "jesteś za młody" : "zapraszamy na seans";
console.log(status); //"zapraszamy na seans"

const name = "Ola";
console.log( (name === "Ola") ? "Masz na imię Ola" : "Nie masz na imię Ola" ) //"Masz na imię Ola"

const nr = 10;
const answer = nr ? "yes" : "no";
console.log(answer);

const isMember = true;
console.log( `Koszt usługi to ${ (isMember ? "2.00" : "10.00") }zł` );