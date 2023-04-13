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

const htmlAsArrayOfTRs = Adults.map((user) => {
  return `
    <tr>
      <td>
        ${user.name}
      </td>
      <td>
        ${user.age}
      </td>
      <td>
        <button>DELETE</button>
      </td>
    </tr>
  `;
});

// console.log(htmlAsArrayOfTRs);
function createNewHTML(arg) {
  //to z TR
  const htmlTRSAsAString = arg.join("");
  const htmlTable = `<table>
  <tbody>
    ${htmlTRSAsAString}
  </tbody>
  </table>`;
  return htmlTable
}

const articleHTMLButJSObject = document.querySelector("#output");
articleHTMLButJSObject.innerHTML = createNewHTML(htmlAsArrayOfTRs);


// ZAD9
const strings1 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

function dziwneZnaki() {
  return strings1.map((a) => {
    let zamianastring = a.toString();
    let newString = zamianastring.split("").join("*");
    // console.log(newString);
    return newString;
  });
}
console.log(dziwneZnaki());

// ZAD10

const todos0 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

function zmienStatus(){
  return todos0.map((task) => ({...task, status: 'todo' }));
}
const statusTODO = zmienStatus();
console.table(statusTODO);


const htmlTodos0 = statusTODO.map((task) => {
  return `
  <tr>
  <td>
  ${task.task}
  </td>
  <td>
  ${task.status}
  </td>
  <td>
  <button>Zaliczone</button>
  </td>
  </tr>
  `;
});

// console.log(htmlTodos0);

function createNewHTML(arg) {
  //to z TR
  const htmlTRSAsAString = arg.join("");
  const htmlTable = `<table>
  <tbody>
  ${htmlTRSAsAString}
  </tbody>
  </table>`;
  return htmlTable
}
const articleHTMLButJSObjectTodos0 = document.querySelector("#output2");

articleHTMLButJSObjectTodos0.innerHTML = createNewHTML(htmlTodos0)

// ZAD11

const todos1 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

function addArchived(){
  return todos1.map(todo  => ({...todo, archived: true}))
}
const newPoleArchived = addArchived();
console.table(newPoleArchived)

const htmlTodos1 = newPoleArchived.map((todo) => {
  return `
  <tr>
  <td>
  ${todo.task}
  </td>
  <td>
  ${todo.status}
  </td>
  <td>
        ${todo.archived}
      </td>
      <td>
      <input type = "checkbox">OK</input>
      </td>
      </tr>
      `;
    });
    
    // console.log(htmlTodos1);
    
    // łączenie tablicy stringów (elementów TR) w jednego stringa;
    const finishTodos1 = htmlTodos1.join("");
    
    const htmlTableTodos1 = `<table>
    <tbody>
    ${finishTodos1}
    </tbody>
    </table>`;
    
    const articleHTMLButJSObjectTodos1 = document.querySelector("#output3");
    
    articleHTMLButJSObjectTodos1.innerHTML = htmlTableTodos1;
    
// ZAD12
const todos2 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

    function searchElement(slowoKlucz){
      return todos2.filter((nazwa) => nazwa.task.includes(slowoKlucz));
    }
    
    const wynikFunkcji = searchElement('się')
    console.table(wynikFunkcji);
    
    const htmlTodos2 = wynikFunkcji.map((todo) => {
      return `
      <tr>
      <td>
      ${todo.task}
      </td>
      <td>
      ${todo.status}
      </td>
      <td>
      <input type = "checkbox">OK</input>
      </td>
      </tr>
      `;
    });
    
    function createNewHTML(arg) {
      //to z TR
      const htmlTRSAsAString = arg.join("");
      const htmlTable = `<table>
      <tbody>
      ${htmlTRSAsAString}
      </tbody>
      </table>`;
      return htmlTable
    }
    
    const articleHTMLButJSObjectTodos2 = document.querySelector("#output4");
    
    articleHTMLButJSObjectTodos2.innerHTML = createNewHTML(htmlTodos2);
    
    
    
// ZAD13
const students = [
  { name: "John", age: 12, group: 1 },
  { name: "Jane", age: 22, group: 2 },
  { name: "Joe", age: 55, group: 1 },
  { name: "Kate", age: 9, group: 2 },
];

// ta funckja policzy nam wiek dla wszytskich studentów
students.reduce((acc, student)=>{
  acc = acc + student.age
  return acc
},0)


const groupedByAge = students.reduce(
  (groups, student) => {
    if (student.age < 30) {
      groups[0].push(student);
    } else {
      groups[1].push(student);
    }

    return groups;
  },
  [[], []]
);

console.log(groupedByAge)

// function podzielNaGrupy() {
//   return students.reduce((grupa, student) => {
//     if (student.group === 1 ){
//       grupa[0].push(student);
//     }
//     else if (student.group === 2 ){
//       grupa[1].push(student);
//     }
//     return grupa
//   },[[], []])
// }
// console.log(podzielNaGrupy());

function podzielNaGrupy() {
  return students.reduce((grupa, student) => {
    if(grupa[student.group]){
       grupa[student.group].push(student)
    }
    else {
      grupa[student.group]= [student];
    }
    return grupa
  },[])
}
const grupyPoPodziale = podzielNaGrupy()
console.log(grupyPoPodziale);

// ZAD14

function getAmountBasedOnType(seniority) {
  return workers.reduce((suma, worker) => {
    if(worker.seniority === seniority){
      suma += 1; 
    }
    return suma;
  },0)
};

console.log(getAmountBasedOnType('senior'));

// ZAD15

function getSumOfSallariesBasedOnType(seniority) {
  return workers.reduce((sumaWynagrodzen, worker) => {
    if(worker.seniority == seniority){
      sumaWynagrodzen += worker.salary;
    }
    return sumaWynagrodzen;
  },0);
};

const juniorsSallary = getSumOfSallariesBasedOnType('junior');
console.log(juniorsSallary);

const regularsSallary = getSumOfSallariesBasedOnType('regular');
console.log(regularsSallary); 

const seniorsSallary = getSumOfSallariesBasedOnType('senior');
console.log(seniorsSallary);

// ZAD16

function assignToProjects() {
  return workers.map((worker) => {
    if(worker.seniority === 'junior'){
      return {...worker, project: 'internal project'}
    }
    else if(worker.seniority === 'regular'){
      return {...worker, project: 'XYZ'}
    }
    else if(worker.seniority === 'senior'){
      return {...worker, project: 'ZYX'}
    }
  })
}
const workersWithProjects = assignToProjects();
console.table(workersWithProjects);