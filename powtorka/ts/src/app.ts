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
import { Category, Task } from "./types/types.js";
import { render } from "./helpers/render-task-helpers.js";
import { renderCategories } from "./helpers/render-categories.helpers.js";
import { TaskClass } from "./classes/task.js";

const taskNAmeInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
  Category.GENERAL,
  Category.WORK,
  Category.GYM,
  Category.HOBBY,
];

const task = {
  title: "Wyrzucić smieci",
  done: false,
};

const tasks: Task[] = [
  { title: "wyrzucić śmieci", done: false, category: Category.WORK },
  { title: "pójść na siłownię", done: false, category: Category.GYM },
  { title: "nakarmić koty", done: true, category: Category.HOBBY },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
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

type TaskAsTuple = [string, Category, boolean];
const taskow: TaskAsTuple = ["zrobić zakupy", Category.GENERAL, false];
const taskName = taskow[0];
const taskCategory = taskow[1];
const taskDoneStatus = taskow[2];
addTask({ title: taskName, category: taskCategory, done: taskDoneStatus });

addTask({ title: "napisać notatkę", category: Category.WORK, done: false });
renderCategories(
  categories,
  categoriesContainerElement,
  updateSelectedCategory
);
render(tasks, tasksContainerElement);

// do any można wszystko przypisać ale jest to
//  złą praktyką
let wiek: any;
wiek = 13;
wiek = "a";
wiek = false;
wiek = [];

// typ unknown
let get = (response: unknown) => response;
const logFixed = (v: number) => {
  console.log(v.toFixed());
};

let zmienna: unknown;
zmienna = 19;
zmienna = "string";
zmienna = true;

logFixed(3.6);
let value = get(3.6);
if (typeof value === "number") {
  logFixed(value);
}

// Typ
type TaskType = {
  name: string;
  done: boolean;
  category?: Category;
};

// interfejs
interface TaskInterface {
  name: string;
  done: boolean;
  category?: Category;
}

// za pomocą typu możemy sobie przypisać coś takiego
type Kategoria = "work" | "hobby" | "general";
// a za pomocą interface już nie bo interfejs to
// musi być obiekt
// interface Kategoria  = 'work' | "hobby" | "general"
// Typy można łączyć a interfejsy już nie
// type KategoriaAndNumber = Kategoria | number;
// możemy stworzyć więcej interfejsów o tej samej nazwie
// i można sobie to wyobrazić że to co jest w pierwszym
// interfejsie zlepi się z tym co jest w drugim interfejsie
interface TaskInterface {
  createdAt: Date;
}

let newTask: TaskInterface;
newTask = {
  name: "noey task",
  done: true,
  createdAt: new Date(),
};
// interjesy przydają się wtedy gdy importuejmy coś i nie chcemy
// rozszerzać naszego interfejsu ale możemy go nadpisać
// interfejsy przydają się w momencie kiedy dana klasa
// musi go zaimplementwiać

const taskClassInstance = new TaskClass("zadanie", false, Category.GYM);
console.log(taskClassInstance)
taskClassInstance.LogCreationDate("!")