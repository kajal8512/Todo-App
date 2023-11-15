import React from "react";
import styles from "./TodoForm.module.css";

export default function TodoForm() {
    return (
        <div className={styles.maincontainer}>
        <div className={styles.container}>
            <label htmlFor="todo" className={styles.heading}>Todo App</label>
            <input id="todo" className={styles.addInput} type="text" />
            <button type="submit" className={styles.add}>Add</button>
        </div>
        </div>
    );
}