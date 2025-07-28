import { useState } from "react";
import "./App.css";
function App() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (count >= 1) {
            setcount(count - 1);
          }
        }}
      >
        {" "}
        -
      </button>
      <button
        onClick={() => {
          setcount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
