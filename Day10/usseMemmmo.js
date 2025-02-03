import { useMemo, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Expensive computation
  const expensiveComputation = (num) => {
    console.log('Computing...');
    return num * 1000;
  };

  // Memoize the result to avoid recalculating unless count changes
  const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Memoized value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent