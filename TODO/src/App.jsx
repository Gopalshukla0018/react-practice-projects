import { useState } from "react";
import "./App.css";
function App() {
  const [Todo, setTodo] = useState([]);
  const [InputVal, setInputVal] = useState("");
  return (
    <>
      <div className="flex flex-col  dark  w-screen h-screen">
        <h1>TODO APP </h1>
        <div>
          <input
          
            type="text"
            placeholder="Enter Your Todo"
            value={InputVal}
            className="w-60px"
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && InputVal.trim() !== "") {
                setTodo([...Todo, InputVal]);
                setInputVal("");
              }
            }}
          />
          <button
            onClick={() => {
              if (InputVal.trim() === "") return;
              setTodo([...Todo, InputVal]);
              setInputVal("");
            }}
          >
            ADD
          </button>
        </div>
        <div className=" border  w-max h-auto">
          {Todo.map((item, index) => {
            return (
              <div key={index}>
                {item}{" "}
                <span>
                  <button
                    onClick={() => {
                      console.log("deleted");
                      setTodo(Todo.filter((_, item) => item !== index));
                    }}
                  >
                    x
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
