import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const fetchCount = async () => {
    const res = await fetch("http://localhost:4000/count");
    const data = await res.json();
    setCount(data.count);
  };

  const increment = async () => {
    await fetch("http://localhost:4000/inc", { method: "POST" });
    fetchCount();
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
