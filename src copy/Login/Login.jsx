import "../../../Test-Suwanan40/src/App.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Authenticate from "../Login/Auth"
import { Auth } from "../Login/Auth";

// import axios from "axios"

function LoginPage() {
const navigate = useNavigate();
const {login} = useContext(Auth);

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loginUser, setLoginUser] = useState('');

  const handleChangEmailLogin = (event) => setEmailLogin(event.target.value);
  const handleChangePasswordLogin = (event) =>
    setPasswordLogin(event.target.value);

const handleLoginUser = async (event) => {
    event.preventDefault();
    if(emailLogin && passwordLogin) {
        setLoginUser();
        await login({emailLogin},{passwordLogin});
        navigate('/todolist');
    }else {
        alert('Invalid Email or Password');
    }
}




  return (
    <div className="app_login">
      <div className="app_container_login">
        <div className="header">
          <h1>Welcome</h1>
        </div>
        <div className="form">
          <p>username</p>
          <input
            type="text"
            placeholder="enter your email"
            value={emailLogin}
            onChange={handleChangEmailLogin}
          />
        </div>
        <div className="form">
          <p>password</p>
          <input
            type="password"
            placeholder="enter your password"
            value={passwordLogin}
            onChange={handleChangePasswordLogin}
          />
        </div>
        
          <button className="login" type="submit" onClick={handleLoginUser} value={loginUser}>
            Login
          </button>
        
      </div>
    </div>
  );
}

export default LoginPage;
