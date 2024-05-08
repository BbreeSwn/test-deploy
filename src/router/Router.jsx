import {createBrowserRouter , RouterProvider} from "react-router-dom"
import LoginPage from "../Login/Login";
import LogoutTodolist from "../logout/LogoutTodolist";

const router = createBrowserRouter([
    {path:'/' , element:<LoginPage/>},
    {path:'/todolist', element:<LogoutTodolist/>},
]);

function Router() {
    return <RouterProvider router={router} />;
  }
  
  export default Router;