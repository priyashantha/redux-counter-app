import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoClear from "./TodoClear";

export default function Todos() {
    return (
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <h2>Todo List</h2>
            <TodoInput />
            <TodoList />
            <TodoClear />
        </div>
    )
}
