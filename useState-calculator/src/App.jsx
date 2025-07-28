import { useState } from "react";
import "./App.css";
function App() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [Operation, setOperation] = useState("");
  const [result, setResult] = useState("Result Will Show Here");

  const handleOnclickequal = () => {
    if (Operation === "+") {
      setResult(Number(num1) + Number(num2));
    } else if (Operation === "-") {
      setResult(Number(num1) - Number(num2));
    }
  };

  return (
    <>
      <div className=" h-screen flex-col  flex justify-center items-center">
        <input
          type="number"
          onChange={(e) => {
            setnum1(e.target.value);
          }}
        />
        <button
          className=" w-[50px] h-[20px]"
          onClick={() => {
            setOperation("+");
          }}
        >
          +
        </button>
        <button
          className=" w-[50px] h-[20px]"
          onClick={() => {
            setOperation("-");
          }}
        >
          -
        </button>

        <input
          type="number"
          onChange={(e) => {
            setnum2(e.target.value);
          }}
        />
        <button className=" w-[50px] h-[20px]" onClick={handleOnclickequal}>
          =
        </button>
        <h1> {result}</h1>
      </div>
    </>
  );
}

export default App;
