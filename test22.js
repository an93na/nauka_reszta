console.log('~~~~~~~~~~~Zadanie8~~~~~~~~~~~~~~~~');
// napisz funckje, ktora podaną tablice przedzieli na pól i zwróci obiekt z polami 'before' i 'after' 
// (jak na dobrej imprezie):
// biscet([1,2,3,8,9,0]) => {beofre: [1,2,3], after: [8,9,0]}
// jesli tablica nie ma parzystej liczby elementow, obiekt powinien zawierac dodatkowo pole 'middle' 
// z elementem srodkowym

let tab8 = [1,2,3,8,9,0,9]; 

// let cala = tab8.length
// console.log(cala)

// let polowa = cala/2
// console.log(polowa);

function podziel(a) {
    let obiekt = {
        after : [],
        middle: [],
        before : []
    };
    let calatab = a.length;
    let polowatab = Math.floor(calatab/2);
        console.log('tu patrz', polowatab);
    
    if  (calatab % 2 === 0) {
    for (let i = 0; i < a.length; i++) {
        if (i < polowatab ) {
            obiekt.after[i]=a[i];
        }
        else if (i >= polowatab) {
            obiekt.before[i]=a[i];
        }
    }
    } 
    else {

    console.log('hehe cos innego');

    for (let i = 0; i < a.length; i++) {
        if (i < polowatab ) {
            obiekt.after[i]=a[i];
        }
        else if ( i === polowatab) {
            obiekt.middle[i]=a[i];  
        }
        else if (i > polowatab) {
            obiekt.before[i]=a[i];
        }
    }
}
    return obiekt
}
let wynikpodziel = podziel(tab8);
console.log(wynikpodziel);

