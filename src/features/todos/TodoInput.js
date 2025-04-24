import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

export default function TodoInput() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo({ text: text }));
            setText('');
        }
    }

    return (
        <div style={{ marginBottom: '10px' }}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={"Add a new todo..."}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
