import { Category } from "../types/types.js";

export class TaskClass {
  title: string;
  done: boolean;
  categoty?: Category;
  createdAt: Date;

  constructor(
    title: string,
    done: boolean,
    category: Category = Category.GENERAL
  ) {
    this.title = title;
    this.done = done;
    this.categoty = category;
    this.createdAt = new Date();
  }
  LogCreationDate(extra: string) {
    console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`);
  }
}
