import React from 'react';
import CounterControls from './features/counter/CounterControls';
import Todos from "./features/todos/Todos";
import CounterDisplay from "./features/counter/CounterDisplay";

function App() {
  return (
      <div>
          <CounterControls />
          <CounterDisplay />
          <Todos />
      </div>
  );
}

export default App;
