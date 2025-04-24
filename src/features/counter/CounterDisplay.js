import React from 'react';
import { useSelector } from 'react-redux';

export default function CounterDisplay() {
    const count = useSelector((state) => state.counter.value);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Redux Counter</h2>
            <h1>{count}</h1>
        </div>
    );
}
