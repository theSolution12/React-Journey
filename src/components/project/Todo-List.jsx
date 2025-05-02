import { useEffect } from "react";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, [])

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1 className="text-center font-semibold text-5xl text-gray-700">
        Todo List
      </h1>
      <div className="flex gap-2 items-center justify-center mt-5">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
          className="form-control mb-3 border border-blue-500 rounded p-2"
        />
        <button
          onClick={() => handleAddTodo()}
          className="btn btn-primary mb-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add Todo
        </button>
      </div>
      <ul className="list-disc list-inside mt-5">
        {todos.map((todo, index) => (
          <li key={index} className="text-lg text-gray-700 mb-2">
            {todo}
            <button
              onClick={() => setTodos(todos.filter((_, i) => i !== index))}
              className="ml-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
