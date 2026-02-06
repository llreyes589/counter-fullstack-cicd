import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const fetchCount = async () => {
    const res = await fetch("http://108.175.8.128:4000/count");
    const data = await res.json();
    setCount(data.count);
  };

  const increment = async () => {
    await fetch("http://108.175.8.128:4000/inc", { method: "POST" });
    fetchCount();
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
