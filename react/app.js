const numbers = [2, 12, 6, 4, 7, 11];

function getSquaredNumbers() {
    return numbers.map((a) => a*a);
  }
  console.log(getSquaredNumbers());


  const phrases = ["react", "trelemorele", "frontend", "angular", "js", ""];

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