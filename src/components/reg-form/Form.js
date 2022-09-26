// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const FormValidation = (title, handleClick) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form action="">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={() => handleClick(email, password)}>
          {/* {title} */}
        </button>
      </form>
    </div>
  );

  // return (
  //   <div>
  //     <section className="registration-container">
  //       <form className="registration-form">
  //         <div className="registration-link">
  //           <Link className="registration-link-entry" to="/entry-page">
  //             Авторизоваться
  //           </Link>
  //           className
  //         </div>
  //         <h1 className="registration-title">Регистрация</h1>

  //         <div className="registration-inputs">
  //           <h3 className="registration-inputs-text" id="email-atantion-reg">
  //             Email
  //           </h3>
  //           <div className="registration-space">
  //             <span
  //               className="registration-atantion"
  //               id="email-atantion-mark-reg"
  //             >
  //               *
  //             </span>
  //             <input
  //               className="registration-element"
  //               type="email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               placeholder="email"
  //             />
  //             <p className="registration-error" id="empty-login-reg">
  //               Поле обязательно для заполнения
  //             </p>
  //             <p className="registration-error" id="valid-login-reg">
  //               Email невалидный
  //             </p>
  //           </div>
  //         </div>

  //         <div className="registration-inputs">
  //           <h3 id="password-atantion-reg">Пароль</h3>

  //           <div className="registration-space">
  //             <span
  //               className="registration-atantion"
  //               id="password-atantion-mark-reg"
  //             >
  //               *
  //             </span>
  //             <input
  //               className="registration-element"
  //               type="password"
  //               value={pass}
  //               onChange={(e) => setPass(e.target.value)}
  //               placeholder="Пароль"
  //             />
  //             <p className="registration-error" id="empty-password-reg">
  //               Поле обязательно для заполнения
  //             </p>
  //             <p className="registration-error" id="length-password-reg">
  //               Пароль должен содержать как минимум 8 символов
  //             </p>
  //           </div>
  //         </div>

  //         {/* <div className="registration-check">
  //           <span className="registration-check-atantion" id="check-mark-reg">
  //             *
  //           </span>
  //           <input
  //             className="registration-checkbox"
  //             type="checkbox"
  //             id="check-reg"
  //             value="yes"
  //             name="check-reg"
  //           />
  //           <label className="" for="check-reg"></label>
  //           <p className="registration-text">
  //             Я согласен с
  //             <span className="registration-agree">
  //               Правилами пользования приложением
  //             </span>
  //           </p>
  //         </div>

  //         <div className="registration-error-check">
  //           <p className="registration-error" id="empty-check-reg">
  //             Поле обязательно для заполнения
  //           </p>
  //         </div> */}

  //         <div className="registration">
  //           <button
  //             className="registration-submit"
  //             onClick={() => handleClick(email, pass)}
  //           >
  //             {title}
  //           </button>
  //         </div>
  //       </form>
  //     </section>
  //   </div>
  // );
};
