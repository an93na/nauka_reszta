import { Category } from "../types/types.js";
export class TaskClass {
    constructor(title, done, category = Category.GENERAL) {
        this.title = title;
        this.done = done;
        this.categoty = category;
    }
}
