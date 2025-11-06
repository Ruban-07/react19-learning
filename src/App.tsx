import "./App.css";

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return (
    <div>
      <p>{title}</p>
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
