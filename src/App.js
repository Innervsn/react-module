import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { MenuPage } from "./Pages/menu-page/menu-page";
import { DishPage } from "./Pages/dish-page/dish-page";
import { BasketPage } from "./Pages/basket-page/basket-page";
import { EntryPage } from "./Pages/validation-pages/entry-page";
import { RegistrationPage } from "./Pages/validation-pages/registration-page";
import { store } from "./redux/index";
// import { store } from "./components/slices/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/dish-page" element={<DishPage />} />
          <Route path="/basket-page" element={<BasketPage />} />
          <Route path="/entry-page" element={<EntryPage />} />
          <Route path="/registration-page" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
