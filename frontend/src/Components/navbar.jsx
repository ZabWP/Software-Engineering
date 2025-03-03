import SSO from "./googleSSO";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h1>Navbar Component</h1>
      <SSO />
    </div>
  );
};

export default Navbar;
