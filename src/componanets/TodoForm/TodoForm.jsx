import React, {useState} from "react";
import styles from "./TodoForm.module.css";

export default function TodoForm() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    };

    // add todo to todoList
    const handleAddTodo = () => {
        if (editTodo !== null) {
            // Edit existing todo
            const updatedList = todoList.map((item) =>
                item === editTodo ? todo : item
            );
            setTodoList(updatedList);
            setEditTodo(null);
        } else {
            // Add new todo
            setTodoList((prevTodoList) => [...prevTodoList, todo]);
        }
        setTodo("");
    };

    // remove todo from todoList
    const handleRemoveTodo = (todo) => {
        setTodoList((prevTodoList) => prevTodoList.filter((item) => item !== todo));
    }

    // edit todo from todoList
    const handleEditTodo = (todo) => {
        setEditTodo(todo);
        setTodo(todo);
        // setEditTodo(false)
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
                 <button type="submit" className={styles.add} onClick={handleAddTodo}>
                {editTodo !== null ? "Edit" : "Add"}
                </button>
            <ol>
                {todoList.map((item) => (
                     <li key={item}>
                     {item}{" "}
                     <button
                         type="button"
                         className={styles.remove}
                         onClick={() => handleEditTodo(item)}
                     >
                         Edit
                     </button>{" "}
                     <button
                         type="button"
                         className={styles.remove}
                         onClick={() => handleRemoveTodo(item)}
                     >
                         Delete
                     </button>
                </li>
                ))}
            </ol>
           
        </div>
    );
}