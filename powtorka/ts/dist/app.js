console.log("TypeScript");
let age = 29;
age = 49;
let ageAsString = "dwadzieścia";
const add = (v1, v2) => v1 + v2;
console.log(add(5, 4));
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("button");
const dodaj = (i1, i2) => i1 + i2;
button.addEventListener("click", () => {
    const sum = dodaj(Number(input1.value), Number(input2.value));
    console.log(sum);
});
