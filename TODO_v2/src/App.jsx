import { useState } from "react";
import Header from "./Componants/Header";
import InputBox from "./Componants/InputBox";
import TodoList from "./Componants/TodoList";
const App = () => {
  const [Val, setVal] = useState("");
  const [Todo, setTodo] = useState([]);

  return (
    <div>
      <Header />
      <InputBox Val={Val} setVal={setVal} Todo={Todo} setTodo={setTodo} />
      <TodoList Todo={Todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
