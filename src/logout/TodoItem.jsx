import { useState } from "react";

export default function TodoItem() {
  const [updateTodoList, setUpdateTodoList] = useState("");

  const handleChangeTodoList = (event) => {
    setUpdateTodoList(event.target.value)
  }
  return (
    <>
        <div className="header">
          <h1>My Todo</h1>
          <input value={updateTodoList} onChange={handleChangeTodoList} placeholder="new task"  />
        </div>
        <div className="todo_item">
          <li>item-1</li>
          <button className="delete">X</button>
        </div>
        <div className="todo_item">
          <li>item-1</li>
          <button className="delete">X</button>
        </div>
        <div className="todo_item">
          <li>item-1</li>
          <button className="delete">X</button>
        </div>
        <div className="todo_item">
          <li>item-1</li>
          <button className="delete">X</button>
        </div>
        <div className="todo_item">
          <li>item-1</li>
          <button className="delete">X</button>
        </div>
    </>
  );
}
