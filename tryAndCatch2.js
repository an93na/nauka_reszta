 
 
 let przykad = {
    a: 5,
    b: {
        c: 2,
        d: 'Dzien dobry'
    }
 }


 try {

    console.log(przykad.a)
    console.log(przykad.b)
    console.log(przykad.b)
    console.log(przykad.c.d);
    
} catch (error) {
    
}
console.log(przykad.b.c);
console.log(przykad.b.d);
