import { Category } from "../types/types.js";

export class TaskClass {
  title: string;
  done: boolean;
  categoty?: Category;

  constructor(
    title: string,
    done: boolean,
    category: Category = Category.GENERAL
  ) {
    this.title = title;
    this.done = done;
    this.categoty = category;
  }
}
