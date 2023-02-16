
for (let index = 0; index < 10; index++) {
const charCodeA = 65;
const charCode = charCodeA + index;

console.log(String.fromCharCode(charCode));
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let charCodeA = 65;
let charCode = charCodeA++;
let numberOfLoops = 10;
let stopCondition = (charCodeA+numberOfLoops);

while (charCode < stopCondition) {
    charCodeA++
    console.log(String.fromCharCode(charCode++));
}