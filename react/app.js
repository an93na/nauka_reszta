// ZAD1

const numbers = [2, 12, 6, 4, 7, 11];

function getSquaredNumbers() {
    return numbers.map((a) => a*a);
  }
  console.log(getSquaredNumbers());


  const phrases = ["react", "trelemorele", "frontend", "angular", "js", ""];


// ZAD2

function getLenghtsOfPhrases(){
  let tab = [] 
  phrases.forEach(p => {
     tab.push(p.length);
  })
  // console.log(tab);
  // console.log(phrases);
  return tab;
};
const dlugoscStringow = getLenghtsOfPhrases();
console.log(dlugoscStringow);

// ZAD3
const users = [
  { name: "John", age: 20 },
  { name: "Johny", age: 12 },
  { name: "Jerry", age: 22 },
  { name: "Jack", age: 17 },
  { name: "Jane", age: 66 },
];

function verfiyUsers(){
  console.log(users);
  return users.map((user) => ({...user, isAdult: user.age >= 18}))
};
console.log(verfiyUsers());


