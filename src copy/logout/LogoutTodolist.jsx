import "../../src copy/App.css"
import TodoItem from "./TodoItem"
import { useState ,useEffect } from "react";
import axios from "axios";


function LogoutTodolist() {
  const [todos , setTodos] = useState([]);

useEffect(()=>{
  getAllTodo()
},[])

  const getAllTodo = async() => {
    try {
      const response = await axios.get('https://cc17-assessment-api.onrender.com/v1/todo');
      setTodos(response.data.slice(0,11))

    }catch (error){
      console.log(error)
    }
  }

  const [logoutUser , setLogoutUser] =useState('');




const handleLogoutUser = (event) => setLogoutUser(event.target.value);

  return (
    <div className="app">
      <div className="app_container_todo">
        <ul className="todo_list">
       <TodoItem key={todos} />
        </ul>
        
          <button className="logout" onClick={handleLogoutUser} value={logoutUser} >LOGOUT</button>
      </div>
    </div>
  );
}

export default LogoutTodolist;
