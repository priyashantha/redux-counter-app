import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

export default function CounterControls() {
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <button onClick={() => dispatch(increment())}>➕ Increment</button>
            <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
            <button onClick={() => dispatch(reset())}>🔁 Reset</button>
        </div>
    );
}
