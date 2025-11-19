import { useReducer } from "react";

type CountData = "increment" | "decrement" | "double";

type CountAction = { type: CountData };

type CountState = {
  count: number;
};

const reducer = (state: CountState, action: CountAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count + 1 };
    case "double":
      return { count: state.count * 2 };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="p-5">
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "double" })}>*</button>
    </div>
  );
};

export default App;
