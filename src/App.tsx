import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(
    parseInt(localStorage.getItem("count") ?? "0") || 0
  );
  const handleCounter = () => setCount((count) => count + 1);
  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count]);
  return (
    <div>
      <h1>COUNT :{count} </h1>
      <button onClick={handleCounter}>ADD</button>
    </div>
  );
};

export default App;
