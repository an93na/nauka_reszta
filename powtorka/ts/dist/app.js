// console.log("TypeScript");
let age = 29;
// age = 49;
// let ageAsString: string = "dwadzieścia";
// const add = (v1: number, v2: number) => v1 + v2;
// console.log(add(5, 4));
// const input1: HTMLInputElement = document.querySelector("#input1");
// const input2: HTMLInputElement = document.querySelector("#input2");
// const button = document.querySelector("button");
// const dodaj = (i1: number, i2: number) => i1 + i2;
// button.addEventListener("click", () => {
//   const sum = dodaj(Number(input1.value), Number(input2.value));
//   console.log('suma z input: ',sum);
// });
// const logAge = (age: number | string) => {
//   console.log(`Hej mam ${age} lat!`);
// };
// logAge(28);
// logAge("dwadzieścia osiem");
// let zmienna: string | number | boolean;
// zmienna = "dwa";
// zmienna = 2;
// zmienna = true;
// const buttonElement = document.querySelector("button");
// const calculatePrice = (orginalPrice: number, hasDiscount: boolean) => {
//   return hasDiscount ? orginalPrice * 0.8 : orginalPrice;
// };
// buttonElement.addEventListener("click", () => {
//   const orginalPrice: number = 50;
//   const hasDiscount: boolean =
//     new URLSearchParams(window.location.search).get("discount") === "true";
//   console.log(calculatePrice(orginalPrice, hasDiscount));
// });
// <li>
// <label for="task-1">Wyrzucić śmieci</label>
// <input type="checkbox" name="wyrzucić śmieci" id="task-1" />
// </li>
const taskNAmeInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [
    "wyrzucić śmieci",
    "pójść na siłownię",
    "nakarmić koty",
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNAmeInputElement.value);
    render();
});
render();
