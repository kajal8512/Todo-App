import React from "react";
import styles from "./TodoForm.module.css";

export default function TodoForm() {
    const [todo, setTodo] = React.useState('');
    const [todoList, setTodoList] = React.useState([]);

    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    };

    // add todo to todoList
    const handleAddTodo = () => {
        setTodoList((prevTodoList) => [...prevTodoList, todo]);
        setTodo("");
    };

    // remove todo from todoList
    const handleRemoveTodo = (todo) => {
        setTodoList((prevTodoList) => prevTodoList.filter((item) => item !== todo));
    }

    return (
        <div className={styles.maincontainer}>
            <label htmlFor="todo" className={styles.heading}>Todo App</label>
            <input
                    id="todo"
                    className={styles.addInput}
                    type="text"
                    value={todo}
                    onChange={handleTodoChange}
                />
            <button type="submit" className={styles.add} onClick={handleAddTodo}>Add</button>
            <ol>
                {todoList.map((item) => (
                    <li key={item}>{item} <button
                    type="button"
                    className={styles.remove}
                    onClick={() => handleRemoveTodo(item)}
                    >Remove</button>
                </li>
                ))}
            </ol>
           
        </div>
    );
}