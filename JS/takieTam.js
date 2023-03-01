let tab1 = [1,2,4,5,6,3];
tab1.reverse();
console.log(tab1);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

let txt = 'słówko';
let tab2 = [...txt];
console.log(tab2);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const tab = ["Marcin", "Ania", 'Agata',"Agnieszka", "Monika"];

if (tab.includes("Agata")) {
    console.log("Agata występuje w tablicy pod indeksem", tab.indexOf("Agata"));
}

if (!tab.includes("Kurczak")) {
    console.log("Kurczak nie występuje w tej tablicy");
}