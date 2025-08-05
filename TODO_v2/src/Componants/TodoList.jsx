const TodoList = ({Todo, setTodo}) => {
  return (
    <div className="border">
      {Todo.map((item, index) => {
        return (
          <div key={index}>
            {item}
            <button
              onClick={() => {
                setTodo(Todo.filter((_, item) => item !== index));
              }}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
