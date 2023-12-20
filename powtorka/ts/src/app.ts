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

const taskNAmeInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

interface Task {
  title: string;
  done: boolean;
  category?: string;
}

const categories: string[] = ["general", "work", "gym", "hobby"];

const task = {
  title: "Wyrzucić smieci",
  done: false,
};

const tasks: Task[] = [
  { title: "wyrzucić śmieci", done: false, category: "work" },
  { title: "pójść na siłownię", done: false, category: "gym" },
  { title: "nakarmić koty", done: true, category: "hobby" },
];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    const id: string = `task-${index}`;
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.title;
    labelElement.setAttribute("for", id);
    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.title;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({ title: taskNAmeInputElement.value, done: false });
  render();
});

render();
