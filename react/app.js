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

// ZAD4

const workers = [
  {
    name: "John",
    seniority: "junior",
    salary: 4000,
  },
  {
    name: "Jack",
    seniority: "senior",
    salary: 15000,
  },
  {
    name: "Jane",
    seniority: "regular",
    salary: 10000,
  },
  {
    name: "Jerry",
    seniority: "senior",
    salary: 20000,
  },
];

function processSalaries() {
  // console.log(workers);
  return workers.map((worker) => {
    if (worker.seniority === 'senior'){
      return {...worker, salary: worker.salary*1.5}
    }
    else if (worker.seniority === 'regular'){
      return {...worker, salary: worker.salary*1.3}
    }
    else if (worker.seniority === 'junior'){
      return {...worker, salary: worker.salary*1.15}
    }
  })
}
console.log(processSalaries());

//ZAD5

// function getAdults() {
//   // console.log(users);
//   return users.filter((user) => {
//   if (user.age >= 18){
//     return true
//   }
//   else if (user.age < 18){
//     return false
//   }
// })
// } 

//II sposób krótszy 
function getAdults() {
  // console.log(users);
  return users.filter((user) => user.age >= 18)
};

console.log(getAdults());

//ZAD6

// function getJuniors() {
//   // console.log(workers);
//   return workers.filter((worker) => {
//     if (worker.seniority === 'junior'){
//       return true
//     }
//     else {
//       return false
//     }
//   })
// }

// II sposób krótszy
function getJuniors() {
  // console.log(workers);
  return workers.filter((worker) => worker.seniority === 'junior')
}

console.log(getJuniors());

// ZAD7

const strings2 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

function stringlessThree(){
  return strings2.filter((a) => a.length < 3)
} 
console.log(stringlessThree());

// ZAD8

const users2 = [
  { name: "John", age: 12 },
  { name: "Jane", age: 22 },
  { name: "Joe", age: 55 },
  { name: "Kate", age: "9" },
];

function czyPelnoletni() {
  return users2.filter((user) => user.age>= 18);
}
console.table(czyPelnoletni());

const Adults = users2.filter(
  (isAdult) => {
    return isAdult.age >= 18
  }
);

// console.table(Adults);