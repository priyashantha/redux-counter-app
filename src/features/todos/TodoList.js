import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./todosSlice";

export default function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    }

    const handleRemove = (e, id) => {
        e.stopPropagation();
        dispatch(removeTodo(id));
    }

    return (
        <ul>
            {todos.map(todo => (
                <li
                    key={todo.id}
                    onClick={() => handleToggle(todo.id)}
                    style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                    {todo.text}
                    <button onClick={(e) => handleRemove(e, todo.id)}>❌</button>
                </li>
            ))}
        </ul>
    )
}
