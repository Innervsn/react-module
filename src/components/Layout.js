import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/basket">
        Basket
      </Link>
    </>
  );
}

export default Layout;
