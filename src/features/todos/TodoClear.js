import React from "react";
import { useDispatch } from "react-redux";
import { clearTodos } from "./todosSlice";

export default function TodoClear() {
    const dispatch = useDispatch();

    const handleClearAll = () => {
        dispatch(clearTodos())
    }

    return (
        <button onClick={handleClearAll}>Clear All</button>
    )
}
