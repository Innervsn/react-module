// import { click } from "@testing-library/user-event/dist/click";
// import "./btn.css";

// function Btn({ name, type }) {
//   return (
//     <div className="block">
//       <h2 className="block__title">Заголовок</h2>
//       <button className="block__button">{name}</button>
//     </div>
//   );
// }

// export default Btn;

// function Button({name}) {
//   const handleClick = (paramOne) => (e) => {};

//   return (
//     <div>
//       <button onClick={(e) => handleClick("Oleg")(e)} className="button">
//       {name}
//       </button>
//     </div>
//   );
// }

// export default Button;

function Button({ name, handleClick }) {
  return (
    <div>
      <button onClick={handleClick} className="button">
        {name}
      </button>
    </div>
  );
}

export default Button;
