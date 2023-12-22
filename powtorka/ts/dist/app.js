// console.log("TypeScript");
let age = 29;
import { render } from "./helpers/render-task-helpers.js";
import { renderCategories } from "./helpers/render-categories.helpers.js";
const taskNAmeInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const task = {
    title: "Wyrzucić smieci",
    done: false,
};
const tasks = [
    { title: "wyrzucić śmieci", done: false, category: "work" },
    { title: "pójść na siłownię", done: false, category: "gym" },
    { title: "nakarmić koty", done: true, category: "hobby" },
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
addTask({ title: "napisać notatkę", category: "work", done: false });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
