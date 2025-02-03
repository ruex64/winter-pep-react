import { useMemo, useState } from 'react';

function ChildComponent({ data }) {
  console.log('Child render');
  return <div>{data}</div>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // Memoize the data passed to the child component to prevent unnecessary rerenders
  const memoizedData = useMemo(() => {
    return { count };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <ChildComponent data={memoizedData} />
    </div>
  );
}
export default ParentComponent