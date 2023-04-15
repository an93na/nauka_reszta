console.log('~~~~~~~~~~~~~~~~~~~~1~~~~~~~~~~~~~~~~~~~~');

//1. Łączenie 3 stringów w jeden

let zmienna1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
let zmienna2 = 'Ex pariatur odit repellat animi ab? Vitae fuga tempore ratione illo nihil qui,'
let zmienna3 = 'neque eum velit esse aliquid! Ab perspiciatis ex deleniti!'

let zad1 = zmienna1+zmienna2+zmienna3;
console.log('Całe zdanie po połączeniu: ',zad1);

console.log('~~~~~~~~~~~~~~~~~~~~2~~~~~~~~~~~~~~~~~~~~');

//2. Sprawdzanie długości zmiennej z poprzedniego zadania.

// za pomocą length
let zad2 = zad1.length
console.log(zad2);

// za pomocą funkcji
function sprawdz2(a){
    let wynik
    for(let i=1; i<a.length ;i++){
        wynik = i
    }
    return wynik
}

console.log('Ilość znaków w zdaniu z zadania1: ', sprawdz2(zad1));

console.log('~~~~~~~~~~~~~~~~~~~~3~~~~~~~~~~~~~~~~~~~~');
//3. Wyświetlanie 10 kolejnych liter zaczynając od 7

let startIndex = 6;
let stopIndex = startIndex +10;

let zad3 = zad1.substring(startIndex, stopIndex);
console.log('10 kolejnych znaków zaczynając od 7 znaku: ', zad3);

console.log('~~~~~~~~~~~~~~~~~~~~4~~~~~~~~~~~~~~~~~~~~');
//4. Wyświetlenie 8 ostatnich liter.

// console.log(zad2) 
iloscLiterDoWyswietlenia = 8;

//wykorzystanie .slice 
let zad4 = zad1.slice(zad2-iloscLiterDoWyswietlenia,zad2);

console.log('8 ostatnich znaków od końca: ', zad4);

//wykorzystanie pętli
let wycinekZad4='';
for (i=zad2-1; i>= zad2-iloscLiterDoWyswietlenia; i--){
    wycinekZad4 += zad1[i]
}

console.log(wycinekZad4);

console.log('~~~~~~~~~~~~~~~~~~~~5~~~~~~~~~~~~~~~~~~~~');
//5. jw tylko z wykorzystaniem length i substring

//8 ostatnich liter
let zad5 = zad1.substring(zad2-8);
console.log(zad5)

//4 ostatnie litery
let zad5a = zad1.substring(zad2-4);
console.log(zad5a);

console.log('~~~~~~~~~~~~~~~~~~~~6~~~~~~~~~~~~~~~~~~~~');
//6. Zamiana tekstu żeby wszystkie litery były duże a potem wsztskie małe

//duże
let zad6toUpperCase = zad1.toUpperCase();
console.log('Tekst z dużych liter: ',zad6toUpperCase);

//małe
let zad6toLowerCase = zad1.toLowerCase();
console.log('Tekst z małych liter: ',zad6toLowerCase);

console.log('~~~~~~~~~~~~~~~~~~~~7~~~~~~~~~~~~~~~~~~~~');
//7. Zmienna złożona z liter 10, 15, 25, 30, 35, 40, 45 i 50.

let zad7a = zad1.slice(10,11);
// console.log(zad7a);
let zad7b = zad1.slice(15,16);
// console.log(zad7b);
let zad7c = zad1.slice(25,26)
// console.log(zad7c);
let zad7d = zad1.slice(30,31)
// console.log(zad7d);
let zad7e = zad1.slice(35,36)
// console.log(zad7e);
let zad7f = zad1.slice(40,41)
// console.log(zad7f);
let zad7g = zad1.slice(45,46)
// console.log(zad7g);
let zad7h = zad1.slice(50,51)
// console.log(zad7h);

let zad7 = zad7a+zad7b+zad7c+zad7d+zad7e+zad7f+zad7g+zad7h;
console.log(zad7);

console.log('~~~~~~~~~~~~~~~~~~~~8~~~~~~~~~~~~~~~~~~~~');
//8. Zamiana słowa z zadania poprzedniego na słowo essa

let zad8 = zad7.replace(zad7,'essa');
console.log(zad8);

console.log('~~~~~~~~~~~~~~~~~~~~9~~~~~~~~~~~~~~~~~~~~');
//9. Szukanie w teksie wystąpienia "ani"

let zad9a = zad1.indexOf('ani');
let zad9b = zad1.lastIndexOf('ani');
console.log('index pierwszego pojawienia się ani: ',zad9a,'index ostatniego pojawienia się ani: ',zad9b);
let zad9 = zad1.search('ani');
console.log('Index pojawienia się ani',zad9);
let zad9Includes = zad1.includes('ani');
console.log('Sprawdzenie czy ciąg zawiera ani: ',zad9Includes);

console.log('~~~~~~~~~~~~~~~~~~~~10~~~~~~~~~~~~~~~~~~~~');
//10. Znajdź słowo 'eros' przy użyciu wybranej metody a następnie wyświetl je w konsoli wykorzystująć substring

let zad10a = zad1.indexOf('amet');
console.log(zad10a);
let zad10b= zad1.substring(22,26);
console.log(zad10b);

console.log('~~~~~~~~~~~~~~~~~~~~11~~~~~~~~~~~~~~~~~~~~');
//11. Wyświetl tekst z zadania 10 wielkimi literami

let zad11 = zad10b.toUpperCase();
console.log(zad11);

// 11a. Pobierz tekst od użytkownika, a następnie wyświetl go wielkimi literami

// let tekst11a = prompt("Wprowadź tekst:");
// let tekstDuzy = tekst11a.toUpperCase();
// console.log(tekstDuzy);
const div = document.createElement('div');
div.setAttribute('class', 'divGlowny');
document.body.appendChild(div);

const ol = document.createElement('ol');
document.body.appendChild(ol);

const div11 = document.createElement('div');
div11.setAttribute('class', 'divSrodek');
div.appendChild(div11);

const paragraf = document.createElement("p");
const input11a = document.createElement("input");
const button11a = document.createElement("button");

input11a.setAttribute("type","text");
input11a.setAttribute("id","tekstUzytkownika");
input11a.setAttribute("placeholder", "Wyświetli powiększony tekst");
button11a.innerText='wyświetl';
button11a.setAttribute('class', 'button');
paragraf.innerText="Wprowadzony tekst po kliknięciu zostanie wyświetlony jako powiększony tekst."

div11.appendChild(paragraf);
div11.appendChild(input11a);
div11.appendChild(button11a);

const tekstInput11a = document.getElementById("tekstUzytkownika");
button11a.addEventListener("click", ()=> {
    // zabezpieczenie przed dodaniem pustych wartości
    if(tekstInput11a.value != ''){
         const tekst = tekstInput11a.value.toUpperCase()
    // tekstInput11a.value = tekst;
    console.log(tekst)
    const li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = 'Twój powiększony tekst: ' + tekst;
    // czyszczenie inputu
    tekstInput11a.value = ''
    }
   
}
);
console.log('~~~~~~~~~~~~~~~~~~~~12~~~~~~~~~~~~~~~~~~~~');
//12. Wyświetlenie tekstu od tyłu

let tekst12 = 'Coś tam'

//Przy wykorzystaniu właściwości tekstu i tablic
let zad12Podziel = tekst12.split("");
// console.log(zad12Podziel);
let zad12Odwroc = zad12Podziel.reverse();
// console.log(zad12Odwroc);
let zad12 = zad12Odwroc.join("");
console.log(zad12);

//Przy wykorzytaniu pętli for
let zad12Dlugosc = tekst12.length;
console.log(zad12Dlugosc);
let zad12Petla= '';

for(let i = zad12Dlugosc-1; i >=0; i--){
    zad12Petla=zad12Petla + tekst12[i];
    
}
console.log(zad12Petla);

//12a Pobierz tekst od użytkownika i wyświetl go od końca

const div12 = document.createElement('div');
div12.setAttribute('class', 'divSrodek');
div.appendChild(div12);

const paragraf2 = document.createElement("p");
const tekst12a = document.createElement('input');
const button12a = document.createElement('button');

tekst12a.setAttribute('type','text');
tekst12a.setAttribute('id','12a');
tekst12a.setAttribute('placeholder','Wyświetl od tyłu');
button12a.innerText='od końca';
button12a.setAttribute('class', 'button');
paragraf2.innerText= "Wpisany tekst zostanie wyświetlony od tyłu."

div12.appendChild(paragraf2);
div12.appendChild(tekst12a);
div12.appendChild(button12a);

const tekst12aWprowadzony = document.getElementById('12a');
button12a.addEventListener('click', ()=> {
    let tekst = tekst12aWprowadzony.value;
    let tekstDlugosc = tekst.length
    // console.log(tekstDlugosc);
    // console.log(tekst);
    let zad12aPetla = '';
    for (let i=tekstDlugosc-1; i>=0; i--) {
        zad12aPetla = zad12aPetla + tekst[i];
    }
    console.log(zad12aPetla);
    // II sposób
    // let tekstOdTylu = tekst.split('').reverse().join('');
    // console.log(tekstOdTylu);

    const li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = 'Twój tekst od tyłu: ' + zad12aPetla;
    tekst12a.value = '';
});



console.log('~~~~~~~~~~~~~~~~~~~~13~~~~~~~~~~~~~~~~~~~~');
//13. Wyświetlanie słowa litera tyle razy ile jest znaków w danym tekście.

let tekst13 = 'Litera'
console.log(zad12Dlugosc);

for (let i=0; i<=zad12Dlugosc; i++){
    console.log(i,tekst13);
}

// 13a. Pobierz tekst od użytkownika, a następnie wyświetl “Litera” tyle razy ile liter ma dany tekst

const div13 = document.createElement('div');
div13.setAttribute('class', 'divSrodek');
div.appendChild(div13);

const paragraf3 = document.createElement("p");
const input13a = document.createElement("input");
const button13a= document.createElement("button");

input13a.setAttribute("type", "text");
input13a.setAttribute("id", "13a");
input13a.setAttribute("placeholder", `Wyświetli "Litera" `);
button13a.innerText="zamień"
button13a.setAttribute('class', 'button');
paragraf3.innerText=`Wyświetli słowo 'Litera' tyle razy ile jest liter w Twoim tekście`

div13.appendChild(paragraf3);
div13.appendChild(input13a);
div13.appendChild(button13a);

const tekst13awprowadzony = document.getElementById("13a");
button13a.addEventListener("click", ()=> {
    const tekst13Ile = tekst13awprowadzony.value.length
    // console.log(tekst13Ile);

    // const tekst13Wynik = "Litera ".repeat(tekst13Ile);
    let tekst13Wynik = "";
    for(let i=0; i<tekst13Ile; i++) {
        tekst13Wynik += "Litera ";
    }

    console.log(tekst13Wynik);

    const li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = `Wyświetlanie słowa 'Litera' tyle razy ile jest liter w Twoim tekście: ` + tekst13Wynik;
});

console.log('~~~~~~~~~~~~~~~~~~~~14~~~~~~~~~~~~~~~~~~~~');
//14. . Wyświetlanie części tekstu, która występuje po pierwszej literze “a”

let tekst14 = 'Kloejna część tekstu zaczynająca się od kolejna'

let zad14 = tekst14.search('a');
// console.log(zad14);
let zad14end = tekst14.substring(6)
console.log(zad14end);

//14a Pobierz tekst od użytkownika a następnie wyświetl część tekstu, która występuje po pierwszej literze “a”

const div14 = document.createElement('div');
div14.setAttribute('class', 'divSrodek');
div.appendChild(div14);

const paragraf4 = document.createElement('p')
const input14a = document.createElement('input');
const button14a = document.createElement('button');

input14a.setAttribute('type', 'text');
input14a.setAttribute('id', '14a');
input14a.setAttribute('placeholder', "Wyświetli od a");
button14a.innerText=`po "a"`
button14a.setAttribute('class', 'button');
paragraf4.innerText=`Wyświetli Twój tekst po pierwszej literze "a": `

div14.appendChild(paragraf4);
div14.appendChild(input14a);
div14.appendChild(button14a);

const tekst14a = document.getElementById('14a')
button14a.addEventListener('click', () => {
    let t1 = tekst14a.value.search('a');
    // console.log(t1)
    let t2 = tekst14a.value.substring(t1);
    console.log(t2)

    const li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = `Wyświetlanie Twojego tekstu po pierwszej literze "a": ` + t2;
});

console.log('~~~~~~~~~~~~~~~~~~~~15~~~~~~~~~~~~~~~~~~~~');
//15. Policzenie ile samogłosek jest w tekscie.

let samogloski = ['a','e', 'i', 'o', 'u', 'y'];
let ilesamoglosek = 0;

for (let i=0; i<tekst14.length; i++) {
    if (samogloski.includes(tekst14[i])){
        ilesamoglosek++;
    }
}
console.log('ilość samogłosek to:',ilesamoglosek);

// 15a. Pobierz tekst od użytkownika, a następnie policz ile się w nim znajduje samogłosek

const div15 = document.createElement('div');
div15.setAttribute('class', 'divSrodek');
div.appendChild(div15);

const paragraf5 = document.createElement('p');
let input15 = document.createElement('input');
let button15 = document.createElement('button');

input15.setAttribute('type', 'text');
input15.setAttribute('placeholder','Wyświetl ile samogłosek');
button15.innerText=`ile samo`
button15.setAttribute('class', 'button');
paragraf5.innerText='Wyświetli ilość samogłosek we wprowadzonym tekście';

div15.appendChild(paragraf5);
div15.appendChild(input15);
div15.appendChild(button15);

button15.addEventListener('click', () => {
    let tekstZinput15 = input15.value.length;
    let samo = 0
    for (let i=0; i<tekstZinput15; i++) {
        if (samogloski.includes(input15.value[i])){
            samo++
        }
    }
    console.log('ilość samogłosek we wprowadzonym tekście to: ',samo); 

    const li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = 'Ilość samogłosek we wprowadzonym tekście to: ' + samo;
})

console.log('~~~~~~~~~~~~~~~~~~~~16~~~~~~~~~~~~~~~~~~~~');
// 16. Zamienianie wszystkich liter “a” “e” “o” na “x”

let litery16 = ['a', 'e'];
//przy użyciu funkcji replaceAll
let zad16 = tekst14.replaceAll(/[ae]/ig, 'x')
console.log(zad16);

// przy użyciu pętli 
let wynik16 = '';
for(let i = 0; i<tekst14.length; i++){
    
    if (tekst14[i]==='a' || tekst14[i] === "e") {
        tekst14[i].replace('a','x' )
        wynik16+= 'x';
    }
    else {
        wynik16 += tekst14[i];
    }
}

console.log(wynik16);
//16a. Pobierz tekst od użytkownika, a następnie zamień wszystkie litery “a” “e” “o” na “x

const div16 = document.createElement('div');
div16.setAttribute('class', 'divSrodek');
div.appendChild(div16);

const paragraf6 = document.createElement('p');
let input16 = document.createElement('input');
let button16 = document.createElement('button');

input16.setAttribute('type', 'text');
input16.setAttribute('placeholder','zamiana a,e,o na x');
button16.innerText=`na "x"`
button16.setAttribute('class', 'button');
paragraf6.innerText= `Zamieni wszystkie litery “a” “e” “o” na “x" w Twoim tekście`

div16.appendChild(paragraf6)
div16.appendChild(input16);
div16.appendChild(button16);

button16.addEventListener('click', ()=> {
    let wynik16a = '';
    let zamianaNaMaleLitery = input16.value.toLocaleLowerCase()
    // console.log(zamianaNaMaleLitery)
    for(let i = 0; i<input16.value.length; i++){
        if (zamianaNaMaleLitery[i]==='a' || zamianaNaMaleLitery[i] === "e" || zamianaNaMaleLitery[i] === 'o') {
            wynik16a+= 'x';
        }
        else {
            wynik16a+= zamianaNaMaleLitery[i];
        }
}
    console.log(wynik16a);

    const li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = `Zamiana wszystkich liter “a” “e” “o” na “x" w Twoim tekście: ` + wynik16a;
});

// Za pomocą forEach
// let text16a = input16.addEventListener('input', ()=> {
//     let wynik16a = '';
//     let zamianaNaMaleLitery = input16.value.toLocaleLowerCase();
//     Array.from(zamianaNaMaleLitery).forEach((litera) => {
//         if (litera === 'a' || litera === 'e' || litera === 'o') {
//             wynik16a += 'x';
//         } else {
//             wynik16a += litera;
//         }
//     });
//     console.log(wynik16a);
// });

// za pomocą replaceAll
// let text16a = input16.addEventListener('input', ()=> {
//     let zamianaNaMaleLitery = input16.value.toLowerCase();
//     let wynik16a = zamianaNaMaleLitery.replaceAll('a', 'x').replaceAll('e', 'x').replaceAll('o', 'x');
//     console.log(wynik16a);
// });


console.log('~~~~~~~~~~~~~~~~~~~~17~~~~~~~~~~~~~~~~~~~~');
//17. złączanie 3 słów w jedno.

let slowo1 = 'Ala';
let slowo2 = 'ma';
let slowo3 = 'kota'

//normalne łacznie
let zad17 = slowo1+slowo2+slowo3;
console.log(zad17);

//wykorzytatnie concat
let zad17a = slowo1.concat(slowo2);
let zad17b = zad17a.concat(slowo3);
console.log(zad17b);

// 17a  Napisz program, który pobiera od użytkownika 5 słów, a następnie wyświetla ja jako jeden ciąg tekstu

const div17 = document.createElement('div');
div17.setAttribute('class', 'divSrodek');
div.appendChild(div17);

const paragraf7 = document.createElement('p');
const input17a = document.createElement('input');
const button17a = document.createElement('button');

input17a.setAttribute('type', 'text');
input17a.setAttribute('placeholder', 'wprowadź pięć słów');
button17a.innerText=`złącz`;
button17a.setAttribute('class', 'button');
paragraf7.innerText = `Po wprowadzeniu 5 słów zostaną one złączone w jedno`

div17.appendChild(paragraf7);
div17.appendChild(input17a);
div17.appendChild(button17a);

button17a.addEventListener('click', ()=> {
    const slowo = input17a.value.trim().split(' ');
    if (slowo.length === 5) {
        const polaczoneSlowa = slowo.join('');
        console.log(polaczoneSlowa);
        const result = document.createElement('li');
        result.innerText = 'Twoje złączone słowa: '+ polaczoneSlowa;
        ol.appendChild(result);

      } else {
        console.log('Wprowadź dokładnie pięć słów!');
        const li = document.createElement('li');
        ol.appendChild(li);
        li.innerText = `Wprowadź dokładnie 5 słów`;
      }
    });
    
console.log('~~~~~~~~~~~~~~~~~~~~18~~~~~~~~~~~~~~~~~~~~');
// Napisz program, który pobiera od użytkownika 5 słów, a następnie wyświetla ja jako jeden ciąg tekstu

// let word1 = prompt("Podaj pierwsze słowo:");
// let word2 = prompt("Podaj drugie słowo:");
// let word3 = prompt("Podaj trzecie słowo:");
// let word4 = prompt("Podaj czwarte słowo:");
// let word5 = prompt("Podaj piąte słowo:");

// let sentence = word1 + " " + word2 + " " + word3 + " " + word4 + " " + word5;

// // console.log("Twoje słowa jako jeden ciąg tekstu: " + sentence);


