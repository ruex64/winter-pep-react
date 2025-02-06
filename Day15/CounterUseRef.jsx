import React, { useRef, useState } from 'react';

const CounterWithRef = () => {
  const countRef = useRef(0);
  const [_, setRender] = useState(0); // A dummy state to trigger re-renders

  const increment = () => {
    countRef.current += 1;
    console.log(countRef.current);
    setRender(prev => prev + 1); // Trigger re-render
  };

  const decrement = () => {
    countRef.current -= 1;
    console.log(countRef.current);
    setRender(prev => prev + 1); // Trigger re-render
  };

  return (
    <div>
      <h1>Counter: {countRef.current}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterWithRef;
