import React from "react";
import classes from './AppEx2.module.css'
import { TodoForm } from "./components/TodoForm";
import { Statistics } from "./components/Statistics";
import { TodoList } from "./components/TodoList";

export const AppEx2 = () => {
    return <article>
        <div className={classes.app}>App.js
        <TodoForm/>
        <Statistics/>
        <TodoList/>
        </div>
    </article>
}