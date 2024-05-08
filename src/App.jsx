// import LoginPage from "./Login/Login";
import Router from "./router/Router";
// import LogoutTodolist from "./logout/LogoutTodolist";
import Authenticate from "./Login/Auth";

function App() {
  return (
    <Authenticate>
    {/* <LoginPage>
      <LogoutTodolist> */}
        <Router />
      {/* </LogoutTodolist>
    </LoginPage> */}
    </Authenticate>
  );
}

export default App;
