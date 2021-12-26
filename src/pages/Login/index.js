import React, { useState } from "react";
import "./login.css";
import { MdAccountCircle, MdLock } from "react-icons/md";
import { HiEyeOff, HiEye } from "react-icons/hi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  let userImg = "";

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
    userImg = document.querySelector("#xibata");
    if (!show) {
      userImg.setAttribute(
        "src",
        "https://www.pngall.com/wp-content/uploads/11/Spy-PNG.png"
      );
    } else {
      userImg.setAttribute(
        "src",
        "https://icon-library.com/images/anonymous-icon-png/anonymous-icon-png-0.jpg"
      );
    }
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://icon-library.com/images/login-icon-png/login-icon-png-25.jpg"
          alt="Login App"
        />
      </div>
      <div className="login-right">
        <div className="login-anonymous">
          <img
            id="xibata"
            src="https://icon-library.com/images/anonymous-icon-png/anonymous-icon-png-0.jpg"
            alt="Logo-Anonymous"
          />
        </div>
        <div className="login-loginInputEmail">
          <MdAccountCircle />
          <input id = "inputLogin"
            type="email"
            value={email}
            placeholder="Login"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-loginInputPassword">
          <MdLock></MdLock>
          <input id = "inputPassword"
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-eye">
            {show ? (
              <HiEye size={20} onClick={handleClick} />
            ) : (
              <HiEyeOff size={20} onClick={handleClick} />
            )}
          </div>
        </div>
        <button type="submit">Entrar</button>

        <h4>Não tenho conta</h4>

        <button type="submit">Cadastrar</button>
      </div>
    </div>
  );
};

export default Login;
