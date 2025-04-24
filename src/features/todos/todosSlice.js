import { createSlice} from "@reduxjs/toolkit";

let id = 0;

export const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: ++id,
                text: action.payload.text,
                completed: false
            })
        },
        toggleTodo: (state, action) => {
            const todo = state.find(t => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        clearTodos: () => [],
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, toggleTodo, clearTodos, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
