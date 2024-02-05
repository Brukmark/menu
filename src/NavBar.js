import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="NavBar">
      <h1>Bruk's Menu</h1>
      <div className="order">
        <Link to="/">Home</Link>

        <Link to="/Create">new menu</Link>
      </div>
    </nav>
  );
};

export default NavBar;
