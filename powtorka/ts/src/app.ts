// console.log("TypeScript");

let age: number = 29;
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
import { Category, Task } from "./types/types";
import { render } from "./helpers/render-task-helpers.js";

const taskNAmeInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];

const task = {
  title: "Wyrzucić smieci",
  done: false,
};

const tasks: Task[] = [
  { title: "wyrzucić śmieci", done: false, category: "work" },
  { title: "pójść na siłownię", done: false, category: "gym" },
  { title: "nakarmić koty", done: true, category: "hobby" },
];

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");
    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      selectedCategory = category;
    });
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${category}`);
    labelElement.innerText = category;
    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);
    categoriesContainerElement.appendChild(categoryElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({
    title: taskNAmeInputElement.value,
    done: false,
    category: selectedCategory,
  });
  render(tasks, tasksContainerElement);
});

renderCategories();
addTask({ title: "napisać notatkę", category: "work", done: false });
render(tasks, tasksContainerElement);
