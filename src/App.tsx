import { useEffect, useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";

type CardProps = {
  title: string;
};

const Card = ({ title }: CardProps) => {
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div onClick={() => setCount(count + 1)}>
      <p>
        {title}
        <br />
        {count}
      </p>
      <Button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </Button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>Components</h2>
      <Card title="Pen" />
      <Card title="Pencil" />
      <Card title="Eraser" />
    </div>
  );
};

export default App;
