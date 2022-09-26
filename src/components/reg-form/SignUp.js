import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./SignUp.css";

export const SignUp = () => {
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm({ mode: "onSubmit" });

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [loginError, setLoginError] = useState("Поле не должно быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Поле не должно быть пустым"
  );

  const userLogin = (login) => {
    localStorage.setItem("login", JSON.stringify(login));
    setLogin(login);
  };

  const userPassword = (password) => {
    localStorage.setItem("password", JSON.stringify(password));
    setPassword(password);
  };

  const loginHandler = (e) => {
    setLogin(e.target.value);

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
    setPassword(e.target.value);
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
    <div className="registration-container">
      <form className="registration-form">
        <div className="registration-link">
          <Link class="registration-link-entry" to="/entry-page">
            Авторизоваться
          </Link>
        </div>
        <h1 className="registration-title">РЕГИСТРАЦИЯ</h1>
        <label className="registration-space">
          <input
            className="registration-input"
            name="login"
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => (loginHandler(e), userLogin(e.target.value))}
            placeholder="Логин"
            type="email"
          />
        </label>

        <div className="registration-error">
          {loginDirty && loginError && (
            <p className="registration-error-title">{loginError}</p>
          )}
        </div>

        <label className="registration-space">
          <input
            className="registration-input"
            name="password"
            placeholder="Пароль"
            type="password"
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => (passwordHandler(e), userPassword(e.target.value))}
          />
        </label>

        <div className="registration-error">
          {passwordDirty && passwordError && (
            <p className="registration-error-title">{passwordError}</p>
          )}
        </div>

        <div className="registration-check-block">
          <div className="registration-check">
            <input
              className="registration-checkbox"
              type="checkbox"
              id="check-reg"
              required
            />
            <label className="" for="check-reg"></label>
            <p className="registration-check-text">
              Я согласен получать обновления на почту
            </p>
          </div>
        </div>

        <div className="registration-submit">
          <button className="registration-submit-btn">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};
