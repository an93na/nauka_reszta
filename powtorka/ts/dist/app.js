// console.log("TypeScript");
let age = 29;
import { render } from "./helpers/render-task-helpers.js";
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
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
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
renderCategories();
addTask({ title: "napisać notatkę", category: "work", done: false });
render(tasks, tasksContainerElement);
