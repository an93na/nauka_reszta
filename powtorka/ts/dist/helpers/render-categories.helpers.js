const handleCategoryChange = (category) => {
    if (category === "general") {
        console.log("Zmiana na general!");
    }
    else if (category === "gym") {
        alert("Ktoś tu ćwiczy");
    }
    else if (category === "hobby") {
        document.body.style.background = "green";
    }
    else if (category === "work") {
        console.log("Zmiana na general!");
        alert("Ktoś tu ćwiczy");
        document.body.style.background = "green";
    }
};
export const renderCategories = (categories, categoriesContainerElement, inputChangeCalback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCalback(category);
            handleCategoryChange(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
