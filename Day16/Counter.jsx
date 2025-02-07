import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <p style={{ color: count > 10 ? "green" : count < 0 ? "red" : "black" }}>
        {count > 10 ? "Great job! You've reached a higher number!" : count < 0 ? "Negative count" : "Keep going!"}
      </p>
      
      <button onClick={() => setCount(count + 1)} style={{ margin: "5px" }}>Increment</button>

      <button onClick={() => setCount(count - 1)} style={{ margin: "5px" }}>Decrement</button>
    </div>
  );
}
