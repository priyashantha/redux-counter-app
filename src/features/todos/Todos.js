import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo, clearTodos } from "./todosSlice";

export default function Todos() {
    const [input, setInput] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (input.trim()) {
            dispatch(addTodo({ text: input }));
            setInput('');
        }
    }

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    }

    const handleRemove = (e, id) => {
        e.stopPropagation();
        dispatch(removeTodo(id));
    }

    return (
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <h2>Todo List</h2>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={"Add a new todo..."}
            />
            <button onClick={handleAdd}>Add</button>

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

            <button onClick={() => dispatch(clearTodos())}>Clear All</button>
        </div>
    )
}
