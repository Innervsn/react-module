import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const [login, getLogin] = useState("");
  const [password, getPassword] = useState("");

  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [loginError, setLoginError] = useState("Поле не должно быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Поле не должно быть пустым"
  );

  const userLogin = (login) => {
    localStorage.getItem("login", JSON.stringify(login));
    getLogin(login);
  };

  const userPassword = (password) => {
    localStorage.getItem("password", JSON.stringify(password));
    getPassword(password);
  };

  const loginHandler = (e) => {
    getLogin(e.target.value);

    if (e.target.value.length < 4) {
      setLoginError("Логин должен содержать не менее 4-х символов");
      if (!e.target.value) {
        setLoginError("Логин должен содержать не менее 4-х символов");
      }
    } else {
      setLoginError("");

      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(String(e.target.value).toLowerCase())) {
        setLoginError("Не корректный email");
      } else {
        setLoginError("");
      }
    }
  };

  const passwordHandler = (e) => {
    getPassword(e.target.value);
    if (e.target.value.length < 4) {
      setPasswordError("Пароль должен содержать не менее 4-х символов");
      if (!e.target.value) {
        setPasswordError("Поле не должно быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;

      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <div className="login-link">
          <Link class="login-link-entry" to="/registration-page">
            Зарегистрироваться
          </Link>
        </div>
        <h1 className="login-title">ВХОД</h1>
        <label className="login-space">
          <input
            className="login-input"
            placeholder="Логин"
            type="email"
            name="login"
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => (loginHandler(e), userLogin(e.target.value))}
          />
        </label>

        <div className="login-error">
          {loginDirty && loginError && (
            <p className="login-error-title">{loginError}</p>
          )}
        </div>

        <label className="login-space">
          <input
            className="login-input"
            placeholder="Пароль"
            type="password"
            name="password"
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => (passwordHandler(e), userPassword(e.target.value))}
          />
        </label>

        <div className="login-error">
          {passwordDirty && passwordError && (
            <p className="login-error-title">{passwordError}</p>
          )}
        </div>

        <div className="login-check-block">
          <div className="login-check">
            <input
              className="login-checkbox"
              type="checkbox"
              id="check-reg"
              required
            />
            <label className="" for="check-reg"></label>
            <p className="login-check-text">
              Я согласен получать обновления на почту
            </p>
          </div>
          <div className="login-error"></div>
        </div>

        <div className="login-submit">
          <button className="login-submit-btn" type="submit">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};
