const InputBox = ({ Val, setVal, Todo, setTodo }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your todo here"
        value={Val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && Val.trim() !== "") {
            setTodo([...Todo, Val]);
            setVal("");
          }
        }}
      />
      <button
        onClick={() => {
          if (Val.trim() == "") return;
          setTodo([...Todo, Val]);
          setVal("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InputBox;
