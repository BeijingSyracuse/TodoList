import "./styles.css";
import TodoList from "./TodoList";
import { useState } from "react";

const todo_List = ["Check box", "Delete", "Active", "Completed"];

export default function App() {
  const [todoList, setTodoList] = useState(todo_List);
  const [todoInput, setTodoInput] = useState("");
  const handleClickAdd = () => {
    setTodoList([todoInput, ...todoList]);
    setTodoInput("");
  };
  return (
    <div className="App">
      <input
        placeholder="Add Todo"
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={handleClickAdd}>Add</button>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
