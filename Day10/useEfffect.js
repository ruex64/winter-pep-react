import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated to: ${count}`);
  }, [count]); // Runs when 'count' changes

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
export default MyComponent