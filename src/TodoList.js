import { useState } from "react";

export default function TodoList({ todoList, setTodoList }) {
  const [checked, setChecked] = useState(false);

  const handleDeleteClick = (e) => {
    console.log(e.target.id === "0");
    setTodoList(
      todoList.filter((_, index) => index.toString() !== e.target.id)
    );
  };

  const handleCheckClick = () => {
    if (!checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    console.log(checked);
  };

  return (
    <div>
      {todoList.map((item, index) => (
        <ul key={index}>
          <li>
            <input type="checkbox" onClick={handleCheckClick} />
            {item}
            <button id={index} onClick={(e) => handleDeleteClick(e)}>
              x
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}
