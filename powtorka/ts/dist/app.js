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
import { Category } from "./types/types.js";
import { render } from "./helpers/render-task-helpers.js";
import { renderCategories } from "./helpers/render-categories.helpers.js";
const taskNAmeInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
];
const task = {
    title: "Wyrzucić smieci",
    done: false,
};
const tasks = [
    { title: "wyrzucić śmieci", done: false, category: Category.WORK },
    { title: "pójść na siłownię", done: false, category: Category.GYM },
    { title: "nakarmić koty", done: true, category: Category.HOBBY },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        title: taskNAmeInputElement.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, tasksContainerElement);
});
addTask({ title: "napisać notatkę", category: Category.WORK, done: false });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
// do any można wszystko przypisać ale jest to
//  złą praktyką
let wiek;
wiek = 13;
wiek = "a";
wiek = false;
wiek = [];
// typ unknown
let get = (response) => response;
const logFixed = (v) => {
    console.log(v.toFixed());
};
let zmienna;
zmienna = 19;
zmienna = "string";
zmienna = true;
logFixed(3.6);
let value = get(3.6);
if (typeof value === "number") {
    logFixed(value);
}
