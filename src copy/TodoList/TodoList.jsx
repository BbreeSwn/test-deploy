import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios"


function App() {
  const [todos, setTodos] = useState([]);



  useEffect(() => {
    getAllTodo();
  }, []);


  async function getAllTodo() {
    try {
      const response = await axios.get(
       "https://cc17-assessment-api.onrender.com/v1/todo?userId=6"
      );
      console.log(response.data);
      setTodos(response.data.slice(0, 11));
    } catch (error) {
      console.log(error);
    }
  }
 


  return (
    <div className="app">
        <div className="todo_item">
          <h1>Todo List</h1>
          <input className="input_text" placeholder="new task"  />
          <div className="todo_item_btn">
            <li className="item">item-1{getAllTodo}</li>
            <button>X</button>
          </div>
        </div>
    </div>
  );
}

export default App;
